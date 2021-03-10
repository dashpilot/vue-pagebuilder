import Picker from './components/fa-picker.mjs'
import Add from './components/add-content.mjs'

const template = `

  <transition name="fade">
      <div id="editor" v-if="item" spellcheck="false">

      <div class="editor-header">
      <h4 class="float-left">Edit</h4>
      <div class="close" @click="item = false">&times;</div>
      </div>
      <br>

      <div v-for="(val, key) in fields">
        <div class="label">{{key.replace('_', ' ')}}</div>
        <input type="text" class="form-control" v-if="val == 'txt'" v-model="item[key]">
        <textarea class="form-control" v-if="val == 'rte'" v-model="item[key]"></textarea>
        <fa-picker v-if="val == 'icon'" v-bind:value="''" @input="setIcon"></fa-picker>
      </div>

      <div class="label">Options</div>
      <div class="btn-group w-100">
      <button class="btn btn-outline-secondary w-50" @click="moveItem(item.id)">Move Down</button>
      <button class="btn btn-outline-danger w-50" @click="deleteItem(item.id)">Delete</button>
      </div>

      <button class="btn btn-primary mt-3" @click="save">Save</button>

    </div>
  </transition>

  <add-content v-bind:layouts="layouts" v-bind:entries="entries"></add-content>
`

export default {
  template,

  props: ['layouts', 'entries'],

  data() {
    return {
      item: false,
      fields: false,
    }
  },

  components: {
    'fa-picker': Picker,
    'add-content': Add,
  },

  methods: {
    save: function() {
      alert(JSON.stringify(this.entries));
      this.item = false;
    },
    setIcon: function(e) {
      this.item.icon = e
    },
    deleteItem: function(id) {
      let r = confirm('Are you sure you want to delete this item?');
      if (r == true) {
        this.entries.splice(this.entries.findIndex(x => x.id === id), 1);
        this.item = false;
      }
    },
    moveItem: function(id) {
      var from = this.entries.findIndex(x => x.id == id);
      var to = from + 1;
      console.log(from);
      console.log(to);
      var f = this.entries.splice(from, 1)[0];
      this.entries.splice(to, 0, f);
    },
  },

  mounted() {
    console.log('Editor component mounted.')

    var app = this;
    document.body.addEventListener('click', function(e) {
      if (e.target.closest('.editable')) {
        let el = e.target.closest('.editable');
        let id = el.id;
        app.item = app.entries.filter(x => x.id === id)[0];

        let myfields = el.getAttribute('data-fields');
        let params = new URLSearchParams(myfields);
        myfields = Object.fromEntries(params.entries())
        //console.log(myfields);
        app.fields = myfields;

      }
    })
  }
}
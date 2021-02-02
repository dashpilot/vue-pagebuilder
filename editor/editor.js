const template = `

  <transition name="fade">
      <div id="editor" v-if="item" spellcheck="false">

      <div class="editor-header">
      <h4 class="float-left">Edit</h4>
      <div class="close" @click="item = false">&times;</div>
      </div>
      <br>

      <div v-for="(value, key) in fields">
        <div class="label">{{key}}</div>
        <input type="text" class="form-control" v-if="value == 'txt'" v-model="item.title">
        <textarea class="form-control" v-if="value == 'rte'" v-model="item.body"></textarea>
      </div>

    </div>
  </transition>

  <transition name="fade">
      <div id="adder" v-if="add">

      <div class="editor-header">
      <h4 class="float-left">Add Content</h4>
      <div class="close" @click="add = false">&times;</div>
      </div>
      <br>

      <div class="list-group">
      <a @click="addLayout" class="list-group-item" v-for="layout in layouts" :data-layout="layout">{{layout}}</a>
      </div>

    </div>
  </transition>

  <div id="dock"><img src="editor/img/add.png" class="grow" @click="add = true" /></div>

`

export default {
  template,

  props: ['layouts', 'entries'],

  data() {
    return {
      item: false,
      fields: false,
      add: false
    }
  },

  methods: {
    addLayout: function(event) {
      let layout = event.target.getAttribute('data-layout');
      let newItem = {};
      newItem.id = "item-" + Date.now();
      newItem.layout = layout;
      newItem.title = 'Lorem Ipsum';
      console.log(newItem);
      this.entries.unshift(newItem);
      this.add = false;
    }
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
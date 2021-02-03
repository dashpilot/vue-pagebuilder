const template = `

  <transition name="fade">
      <div id="adder" v-if="add">

      <div class="editor-header">
      <h4 class="float-left">Add Content.</h4>
      <div class="close" @click="add = false">&times;</div>
      </div>
      <br>

      <img @click="addLayout" v-for="layout in layouts" :data-layout="layout" class="box img-fluid" :src="'components/'+layout+'/preview.png'" />

    </div>
  </transition>

  <div id="dock"><img src="editor/img/add.png" class="grow" @click="add = true" /></div>

`

export default {
  template,

  props: ['layouts'],

  data() {
    return {
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
      newItem.body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis.';
      console.log(newItem);
      this.entries.unshift(newItem);
      this.add = false;
    },
  },

  mounted() {
    console.log('Adder component mounted.')
  }
}

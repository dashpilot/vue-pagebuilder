const template = `

  <transition name="fade">
      <div id="adder" v-if="add">

      <div class="editor-header">
      <h4 class="float-left">Add Content</h4>
      <div class="close" @click="add = false">&times;</div>
      </div>
      <div class="editor-content mt-4">

      <img @click="addLayout" v-for="layout in layouts" :data-layout="layout" class="box img-fluid" :src="'components/'+layout+'/preview.png'" />

      </div>
    </div>
  </transition>

  <transition name="fade">
      <div id="designer" v-if="designer">

      <div class="editor-header">
      <h4 class="float-left">Change Design</h4>
      <div class="close" @click="designer = false">&times;</div>
      </div>

    <div class="editor-content">

      <div class="label">Color</div>


<div class="input-group mb-3">
  <input class="form-control" v-model="color" @change="setColor(color, '#000')">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary w-100px" type="button" @click="choose=!choose"><span v-if="!choose">Choose</span><span v-if="choose">Close</span></button>
  </div>
</div>

<div v-if="choose">
      <div class="swatch" style="background-color: #1FBC9C" @click="setColor('#1FBC9C', '#FFF')"></div>
      <div class="swatch" style="background-color: #1CA085" @click="setColor('#1CA085', '#FFF')"></div>
      <div class="swatch" style="background-color: #2ECC70" @click="setColor('#2ECC70', '#FFF')"></div>
      <div class="swatch" style="background-color: #27AF60" @click="setColor('#27AF60', '#FFF')"></div>

      <div class="swatch" style="background-color: #3398DB" @click="setColor('#3398DB', '#FFF')"></div>
      <div class="swatch" style="background-color: #2980B9" @click="setColor('#2980B9', '#FFF')"></div>
      <div class="swatch" style="background-color: #2980B9" @click="setColor('#2980B9', '#FFF')"></div>
      <div class="swatch" style="background-color: #8E43AD" @click="setColor('#8E43AD', '#FFF')"></div>

      <div class="swatch" style="background-color: #3D556E" @click="setColor('#3D556E', '#FFF')"></div>
      <div class="swatch" style="background-color: #222F3D" @click="setColor('#222F3D', '#FFF')"></div>
      <div class="swatch" style="background-color: #F2C511" @click="setColor('#F2C511', '#000')"></div>
      <div class="swatch" style="background-color: #F39C19" @click="setColor('#F39C19', '#FFF')"></div>

      <div class="swatch" style="background-color: #E84B3C" @click="setColor('#E84B3C', '#FFF')"></div>
      <div class="swatch" style="background-color: #C0382B" @click="setColor('#C0382B', '#FFF')"></div>
      <div class="swatch" style="background-color: #DDE6E8" @click="setColor('#DDE6E8', '#000')"></div>
      <div class="swatch" style="background-color: #BDC3C8" @click="setColor('#BDC3C8', '#FFF')"></div>

      <div class="swatch" style="background-color: #F7FAFC" @click="setColor('#F7FAFC', '#000')"></div>
      <div class="swatch" style="background-color: #FFFFFF; border: 1px solid #DDD;" @click="setColor('#FFFFFF', '#000')"></div>
</div>

    <div class="label">Font</div>

    <div class="list-group">
    <a class="list-group-item" @click="setFont('Rubik')"><i class="fas fa-check mr-2" v-if="font == 'Rubik'"></i> Default</a>
    <a class="list-group-item" @click="setFont('Lobster')"><i class="fas fa-check mr-2" v-if="font == 'Lobster'"></i> Lobster</a>
    <a class="list-group-item" @click="setFont('Playfair Display')"><i class="fas fa-check mr-2" v-if="font == 'Playfair Display'"></i> Playfair Display</a>
    <a class="list-group-item" @click="setFont('Raleway')"><i class="fas fa-check mr-2" v-if="font == 'Raleway'"></i> Raleway</a>
    <a class="list-group-item" @click="setFont('Cutive Mono')"><i class="fas fa-check mr-2" v-if="font == 'Cutive Mono'"></i> Cutive Mono</a>
    <a class="list-group-item" @click="setFont('Helvetica')"><i class="fas fa-check mr-2" v-if="font == 'Helvetica'"></i> Helvetica</a>
    <a class="list-group-item" @click="setFont('Georgia')"><i class="fas fa-check mr-2" v-if="font == 'Georgia'"></i> Georgia</a>
    </div>

    </div>

    </div>
  </transition>

  <div id="dock">
    <img src="editor/img/add.png" class="grow" @click="add = true; designer = false;" />
    <img src="editor/img/settings.png" class="grow" @click="designer = true; add = false;" />
  </div>

`

export default {
  template,

  props: ['layouts', 'entries'],

  data() {
    return {
      add: false,
      designer: false,
      choose: false,
      color: '#1CA085',
      font: 'Rubik',
      spacing: '-0.04em'
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
    setColor: function(hex, hex2) {
      this.color = hex;
      let root = document.documentElement;
      root.style.setProperty('--bg-color', hex);
      root.style.setProperty('--fg-color', hex2);
    },
    setFont: function(font) {
      this.font = font;
      let spacing = '0';
      if (font == 'Rubik') {
        spacing = '-0.04em';
      }
      let root = document.documentElement;
      root.style.setProperty('--font', font);
      root.style.setProperty('--spacing', spacing);
    },
    swapStyleSheet(font) {
      let sheet = 'css/' + font;
      document.getElementById("fonts").setAttribute("href", sheet);
    }
  },

  mounted() {
    console.log('Adder component mounted.')
  }
}
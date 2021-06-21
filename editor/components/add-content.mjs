const template = `

  <transition name="slide-left">
      <div class="slidein-left" id="adder" v-if="add">

      <div class="editor-header">
      <h4 class="float-left">Add Content</h4>
      <div class="close" @click="add = false">&times;</div>
      </div>
      <div class="editor-content mt-4">

      <img @click="addLayout" v-for="layout in layouts" :data-layout="layout" class="box img-fluid" :src="'components/'+layout+'/preview.png'" />

      </div>
    </div>
  </transition>

  <transition name="slide-left">
      <div class="slidein-left" id="designer" v-if="designer">

      <div class="editor-header">
      <h4 class="float-left">Change Design</h4>
      <div class="close" @click="designer = false">&times;</div>
      </div>

    <div class="editor-content">

      <div class="label">Color</div>


<div class="input-group mb-3">
  <input class="form-control" v-model="color" @change="setColor(color)">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary w-100px" type="button" @click="choose=!choose"><span v-if="!choose">Choose</span><span v-if="choose">Close</span></button>
  </div>
</div>

<div v-if="choose">

  <span v-for="mycolor in colors">
      <div class="swatch" :style="'background-color: '+mycolor" @click="setColor(mycolor)"><i class="fas fa-check fa-center" v-if="color == mycolor"></i></div>
  </span>

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


  <transition name="slide-left">
      <div class="slidein-left" id="saver" v-if="save">

      <div class="editor-header">
      <h4 class="float-left">Save</h4>
      <div class="close" @click="save = false">&times;</div>
      </div>
      <div class="editor-content mt-1">

<div class="label"><span>Download</span>  <span class="badge badge-pill badge-success float-right">free</span></div>

<p class="info">Download your design as a html file, so you can tweak it further and upload it to any hosting you like.</p>

<button class="btn btn-outline-dark w-100" @click="downloadFile"><i class="fa fa-download"></i> &nbsp;Download</button>

      </div>
    </div>
  </transition>

  <div id="dock">
    <img src="editor/img/add.png" class="grow" @click="add = true; designer = false; save= false;" />
    <img src="editor/img/settings.png" class="grow" @click="designer = true; add = false; save = false;" />
    <img src="editor/img/save.png" class="grow" @click="save = true; designer = false; add = false;" />
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
      save: false,
      color: '#F7FAFC',
      font: 'Rubik',
      spacing: '-0.04em',
      colors: ['#1CA085', '#27AF60', '#1FBC9C', '#2ECC70', '#3398DB', '#2980B9', '#575fcf', '#3D556E', '#222F3D', '#ffdd59', '#F2C511', '#F39C19', '#E84B3C', '#C0382B', '#BDC3C8', '#DDE6E8', '#F7FAFC', '#FFFFFF']
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
    setColor: function(hex) {
      this.color = hex;
      let hex2 = colorContrast(hex);
      let root = document.documentElement;
      root.style.setProperty('--bg-color', hex);
      root.style.setProperty('--fg-color', hex2);
      localStorage.setItem('bg-color', hex);
      localStorage.setItem('fg-color', hex2);
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
      localStorage.setItem('font', font);
      localStorage.setItem('spacing', spacing);
    },
    swapStyleSheet(font) {
      let sheet = 'css/' + font;
      document.getElementById("fonts").setAttribute("href", sheet);
    },
    downloadFile() {
      var css = `<style>`;
      if (localStorage.getItem("bg-color") !== null) {
        css += `:root {--bg-color:${localStorage.getItem("bg-color")};--fg-color:${localStorage.getItem("fg-color")};`
      }
      if (localStorage.getItem("font") !== null) {
        css += `--font:${localStorage.getItem("font")};--spacing:${localStorage.getItem("spacing")};`
      }
      css += `}
      </style>`;

      let header = `<!DOCTYPE html>
    		<html lang="en">
        <head>
          <meta charset="utf-8">
          <title>My Website</title>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
          <link rel="stylesheet" href="https://vue-pagebuilder.vercel.app/style.css">

          ${css}

          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&family=Lobster&family=Playfair+Display&family=Raleway&family=Cutive+Mono&display=swap" rel="stylesheet">

        </head>
    		<body>\n\n`;
      let html = document.querySelector('#page').innerHTML;
      let footer = `\n\n</body>
    		</html>`;
      dl('index.html', html_beautify(header + html.replaceAll('<!---->', '') + footer));
    }
  },
  mounted() {
    //console.log('Adder component mounted.')
  }
}

function colorContrast(hex) {

  var threshold = 150; /* about half of 256. Lower threshold equals more dark text on dark background  */
  var hRed = hexToR(hex);
  var hGreen = hexToG(hex);
  var hBlue = hexToB(hex);

  function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16)
  }

  function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16)
  }

  function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16)
  }

  function cutHex(h) {
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h
  }

  var cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
  if (cBrightness > threshold) {
    return "#000000";
  } else {
    return "#ffffff";
  }
}


function dl(filename, data) {
  var blob = new Blob([data], {
    type: 'text/html'
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
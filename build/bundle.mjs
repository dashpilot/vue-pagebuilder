const html$8 = String.raw;

const template$9 = html$8`
  <section
    :id="item.id"
    class="editable text-center"
    data-fields="icon=icon&amp;title=txt&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt"
  >
    <div class="container">
      <i :class="item.icon+' fa-big'"></i>

      <h1>{{item.title}}</h1>
      <p>{{item.subtitle}}</p>

      <a
        :href="item.button_link"
        class="btn btn-secondary"
        v-if="item.button_text"
        >{{item.button_text}}</a
      >
    </div>
  </section>
`;

var Header = {
  template: template$9,
  props: ["item"],
  mounted() {
    //console.log('Banner component mounted.')
  },
};

const html$7 = String.raw;

const template$8 = html$7`
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </section>
`;

var Post = {
  template: template$8,
  props: ["item"],
  mounted() {
    //console.log('Post component mounted.')
  },
};

var helpers = {
  def: function (key, val) {
    if (key) {
      return key;
    } else {
      return val;
    }
  },
  youtube_parser: function (url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  },
};

const html$6 = String.raw;

const template$7 = html$6`
  <section
    :id="item.id"
    class="editable"
    data-fields="title=txt&amp;body=rte&amp;image=img&amp;youtube_url=vid"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
        </div>
        <div class="col-md-6">
          <template v-if="item.image">
            <img :src="item.image" class="img-fluid" />
          </template>
          <template v-else-if="item.youtube_url">
            <div class="responsive-container">
              <iframe
                title="video"
                class="responsive-iframe"
                width="560"
                height="315"
                :src="'https://www.youtube.com/embed/' + youtube_parser(item.youtube_url)"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </template>
          <template v-else>
            <img
              src="https://vue-pagebuilder.vercel.app/editor/img/placeholder.jpg"
              class="img-fluid"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
`;

var News = {
  template: template$7,
  props: ["item"],
  created() {
    this.youtube_parser = helpers.youtube_parser;
  },
  mounted() {
    //console.log('News component mounted.')
  },
};

const html$5 = String.raw;

const template$6 = html$5`
  <section
    :id="item.id"
    class="editable"
    data-fields="title=txt&amp;body=rte&amp;image=img&amp;youtube_url=vid"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <template v-if="item.image">
            <img :src="item.image" class="img-fluid" />
          </template>
          <template v-else-if="item.youtube_url">
            <div class="responsive-container">
              <iframe
                title="video"
                class="responsive-iframe"
                width="560"
                height="315"
                :src="'https://www.youtube.com/embed/' + youtube_parser(item.youtube_url)"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </template>
          <template v-else>
            <img
              src="https://vue-pagebuilder.vercel.app/editor/img/placeholder.jpg"
              class="img-fluid"
            />
          </template>
        </div>

        <div class="col-md-6">
          <h2>{{item.title}}</h2>
          <p>{{item.body}}</p>
        </div>
      </div>
    </div>
  </section>
`;

var NewsLeft = {
  template: template$6,
  props: ["item"],
  created() {
    this.youtube_parser = helpers.youtube_parser;
  },
  mounted() {
    //console.log('News component mounted.')
  },
};

const html$4 = String.raw;

const template$5 = html$4`
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
    <div class="container">
      <div class="w-50 m-auto text-center">
        <h2>{{item.title}}</h2>
        <p>{{item.body}}</p>
      </div>
    </div>
  </section>
`;

var Featured = {
  template: template$5,
  props: ["item"],
  mounted() {
    //console.log('Featured component mounted.')
  },
};

const template$4 = `
  <section
    :id="item.id"
    class="editable"
    data-fields="title=txt&amp;body=rte&amp;title2=txt&amp;body2=rte"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center">
          <h3>{{item.title}}</h3>
          <p>{{item.body}}</p>
        </div>
        <div class="col-md-6 text-center">
          <h3>{{def(item.title2, 'Lorem Ipsum')}}</h3>
          <p>
            {{def(item.body2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis.")}}
          </p>
        </div>
      </div>
    </div>
  </section>
`;

var Features = {
  template: template$4,
  props: ["item"],
  created() {
    this.def = helpers.def;
  },
  mounted() {
    //console.log('Features component mounted.')
  },
};

const html$3 = String.raw;
const template$3 = html$3`
  <button
    :id="'launchIconPicker-'+mykey"
    class="btn btn-outline-secondary"
    :data-iconpicker-input="'#iconPicker-'+mykey"
    :data-iconpicker-preview="'#icon-preview-'+mykey"
  >
    <i :id="'icon-preview-'+mykey" :class="value"></i>
    &nbsp;Choose Icon
  </button>
  <input type="hidden" :id="'iconPicker-' + mykey" class="form-control" />
`;

var Picker = {
  template: template$3,
  props: ["mykey", "value"],
  emits: ["input"],
  mounted() {
    var app = this;
    IconPicker.Init({
      // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.5.0.json'
      jsonUrl: "/editor/js/iconpicker/iconpicker-1.5.0.json",
      // Optional: Change the buttons or search placeholder text according to the language.
      searchPlaceholder: "Search Icon",
      showAllButton: "Show All",
      cancelButton: "Cancel",
      noResultsFound: "No results found.", // v1.5.0 and the next versions
      borderRadius: "20px", // v1.5.0 and the next versions
    });
    IconPicker.Run("#launchIconPicker-" + app.mykey, function () {
      //app.value = document.querySelector('#iconPicker').value;
      app.$emit("input", {
        key: app.mykey,
        value: document.querySelector("#iconPicker-" + app.mykey).value,
      });
    });
  },
};

const html$2 = String.raw;

const template$2 = html$2`
  <transition name="slide-left">
    <div class="slidein-left" id="adder" v-if="add">
      <div class="editor-header">
        <h4 class="float-left">Add Content</h4>
        <div class="close" @click="add = false">&times;</div>
      </div>
      <div class="editor-content mt-4">
        <img
          @click="addLayout"
          v-for="layout in layouts"
          :data-layout="layout"
          class="box img-fluid"
          :src="'components/'+layout+'/preview.png'"
        />
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
          <input
            class="form-control"
            v-model="color"
            @change="setColor(color)"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary w-100px"
              type="button"
              @click="choose=!choose"
            >
              <span v-if="!choose">Choose</span><span v-if="choose">Close</span>
            </button>
          </div>
        </div>

        <div v-if="choose">
          <span v-for="mycolor in colors">
            <div
              class="swatch"
              :style="'background-color: '+mycolor"
              @click="setColor(mycolor)"
            >
              <i class="fas fa-check fa-center" v-if="color == mycolor"></i>
            </div>
          </span>
        </div>

        <div class="label">Font</div>

        <div class="list-group">
          <a class="list-group-item" @click="setFont('Rubik')"
            ><i class="fas fa-check mr-2" v-if="font == 'Rubik'"></i> Default</a
          >
          <a class="list-group-item" @click="setFont('Lobster')"
            ><i class="fas fa-check mr-2" v-if="font == 'Lobster'"></i>
            Lobster</a
          >
          <a class="list-group-item" @click="setFont('Playfair Display')"
            ><i class="fas fa-check mr-2" v-if="font == 'Playfair Display'"></i>
            Playfair Display</a
          >
          <a class="list-group-item" @click="setFont('Raleway')"
            ><i class="fas fa-check mr-2" v-if="font == 'Raleway'"></i>
            Raleway</a
          >
          <a class="list-group-item" @click="setFont('Cutive Mono')"
            ><i class="fas fa-check mr-2" v-if="font == 'Cutive Mono'"></i>
            Cutive Mono</a
          >
          <a class="list-group-item" @click="setFont('Helvetica')"
            ><i class="fas fa-check mr-2" v-if="font == 'Helvetica'"></i>
            Helvetica</a
          >
          <a class="list-group-item" @click="setFont('Georgia')"
            ><i class="fas fa-check mr-2" v-if="font == 'Georgia'"></i>
            Georgia</a
          >
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
        <div class="label">
          <span>Download</span>
          <span class="badge badge-pill badge-success float-right">free</span>
        </div>

        <p class="info">
          Download your design as a html file, so you can tweak it further and
          upload it to any hosting you like.
        </p>

        <button class="btn btn-outline-dark w-100" @click="downloadFile">
          <i class="fa fa-download"></i> &nbsp;Download
        </button>
      </div>
    </div>
  </transition>

  <div id="dock">
    <img
      src="editor/img/add.png"
      class="grow"
      @click="add = true; designer = false; save= false;"
    />
    <img
      src="editor/img/settings.png"
      class="grow"
      @click="designer = true; add = false; save = false;"
    />
    <img
      src="editor/img/save.png"
      class="grow"
      @click="save = true; designer = false; add = false;"
    />
  </div>
`;

var Add = {
  template: template$2,

  props: ["layouts", "entries"],

  data() {
    return {
      add: false,
      designer: false,
      choose: false,
      save: false,
      color: "#F7FAFC",
      font: "Rubik",
      spacing: "-0.04em",
      colors: [
        "#1CA085",
        "#27AF60",
        "#1FBC9C",
        "#2ECC70",
        "#3398DB",
        "#2980B9",
        "#575fcf",
        "#3D556E",
        "#222F3D",
        "#ffdd59",
        "#F2C511",
        "#F39C19",
        "#E84B3C",
        "#C0382B",
        "#BDC3C8",
        "#DDE6E8",
        "#F7FAFC",
        "#FFFFFF",
      ],
    };
  },

  methods: {
    addLayout: function (event) {
      let layout = event.target.getAttribute("data-layout");
      let newItem = {};
      newItem.id = "item-" + Date.now();
      newItem.layout = layout;
      newItem.title = "Lorem Ipsum";
      newItem.body =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis.";
      console.log(newItem);
      this.entries.unshift(newItem);
      this.add = false;
    },
    setColor: function (hex) {
      this.color = hex;
      let hex2 = colorContrast(hex);
      let root = document.documentElement;
      root.style.setProperty("--bg-color", hex);
      root.style.setProperty("--fg-color", hex2);
      localStorage.setItem("bg-color", hex);
      localStorage.setItem("fg-color", hex2);
    },
    setFont: function (font) {
      this.font = font;
      let spacing = "0";
      if (font == "Rubik") {
        spacing = "-0.04em";
      }
      let root = document.documentElement;
      root.style.setProperty("--font", font);
      root.style.setProperty("--spacing", spacing);
      localStorage.setItem("font", font);
      localStorage.setItem("spacing", spacing);
    },
    swapStyleSheet(font) {
      let sheet = "css/" + font;
      document.getElementById("fonts").setAttribute("href", sheet);
    },
    downloadFile() {
      var css = `<style>`;
      if (localStorage.getItem("bg-color") !== null) {
        css += `:root {--bg-color:${localStorage.getItem(
          "bg-color"
        )};--fg-color:${localStorage.getItem("fg-color")};`;
      }
      if (localStorage.getItem("font") !== null) {
        css += `--font:${localStorage.getItem(
          "font"
        )};--spacing:${localStorage.getItem("spacing")};`;
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
      let html = document.querySelector("#page").innerHTML;
      let footer = `\n\n</body>
    		</html>`;
      dl(
        "index.html",
        html_beautify(header + html.replaceAll("<!---->", "") + footer)
      );
    },
  },
  mounted() {
    //console.log('Adder component mounted.')
  },
};

function colorContrast(hex) {
  var threshold = 150; /* about half of 256. Lower threshold equals more dark text on dark background  */
  var hRed = hexToR(hex);
  var hGreen = hexToG(hex);
  var hBlue = hexToB(hex);

  function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }

  function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }

  function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }

  function cutHex(h) {
    return h.charAt(0) == "#" ? h.substring(1, 7) : h;
  }

  var cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return "#000000";
  } else {
    return "#ffffff";
  }
}

function dl(filename, data) {
  var blob = new Blob([data], {
    type: "text/html",
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}

const html$1 = String.raw;
const template$1 = html$1`
  <input
    type="file"
    id="fileInput"
    class="fileInput"
    accept="image/png, image/jpeg, image/gif"
    style="display: none;"
  />
  <button class="btn btn-outline-secondary" @click="choose">Upload</button>
`;

var Image$1 = {
  template: template$1,

  props: ["mykey"],
  emits: ["image"],

  data() {
    return {};
  },
  methods: {
    choose: function () {
      document.getElementById("fileInput").click();
    },
  },
  mounted() {
    var app = this;

    document
      .getElementById("fileInput")
      .addEventListener("change", function (e) {
        var img_width = 500;

        var img = new Image();
        img.onload = function () {
          var canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d"),
            oc = document.createElement("canvas"),
            octx = oc.getContext("2d");

          canvas.width = img_width; // destination canvas size
          canvas.height = (canvas.width * img.height) / img.width;

          var cur = {
            width: Math.floor(img.width * 0.5),
            height: Math.floor(img.height * 0.5),
          };
          oc.width = cur.width;
          oc.height = cur.height;
          octx.drawImage(img, 0, 0, cur.width, cur.height);
          while (cur.width * 0.5 > img_width) {
            cur = {
              width: Math.floor(cur.width * 0.5),
              height: Math.floor(cur.height * 0.5),
            };
            octx.drawImage(
              oc,
              0,
              0,
              cur.width * 2,
              cur.height * 2,
              0,
              0,
              cur.width,
              cur.height
            );
          }
          ctx.drawImage(
            oc,
            0,
            0,
            cur.width,
            cur.height,
            0,
            0,
            canvas.width,
            canvas.height
          );
          var base64Image = canvas.toDataURL("image/jpeg");

          //console.log(base64Image);
          //window.cur_img.src = base64Image;
          //app.item[app.mykey] = base64Image;

          app.$emit("image", {
            key: app.mykey,
            value: base64Image,
          });
        };
        img.src = URL.createObjectURL(e.target.files[0]);
      });
  },
};

const html = String.raw;

const template = html`
  <transition name="slide-right">
    <div class="editor slidein-right" v-if="item" spellcheck="false">
      <div class="editor-header">
        <h4 class="float-left">Edit</h4>
        <div class="close" @click="item = false">&times;</div>
      </div>
      <div class="editor-content">
        <div v-for="(val, key) in fields">
          <div class="label">{{key.replace('_', ' ')}}</div>

          <input
            type="text"
            class="form-control"
            v-if="val == 'txt'"
            v-model="item[key]"
          />
          <textarea
            class="form-control"
            v-if="val == 'rte'"
            v-model="item[key]"
          ></textarea>
          <fa-picker
            v-if="val == 'icon'"
            v-bind:mykey="key"
            v-bind:value="item[key]"
            @input="setIcon"
          ></fa-picker>

          <image-resize
            v-if="val == 'img'"
            v-bind:mykey="key"
            @image="setImage"
          ></image-resize>
          <input
            v-if="val == 'vid'"
            type="text"
            class="form-control"
            v-model="item[key]"
          />
        </div>

        <span v-if="item.layout != 'header'">
          <div class="label">Options</div>
          <div class="btn-group w-100">
            <button
              class="btn btn-outline-secondary w-50"
              @click="moveItem(item.id)"
            >
              Move Down
            </button>
            <button
              class="btn btn-outline-secondary w-50"
              @click="deleteItem(item.id)"
            >
              Delete
            </button>
          </div>
        </span>

        <button class="btn btn-outline-success mb-5 w-100 save" @click="save">
          Save
        </button>
      </div>
    </div>
  </transition>

  <add-content v-bind:layouts="layouts" v-bind:entries="entries"></add-content>
`;

var Editor = {
  template,

  props: ["layouts", "entries"],

  data() {
    return {
      item: false,
      fields: false,
    };
  },

  components: {
    "fa-picker": Picker,
    "add-content": Add,
    "image-resize": Image$1,
  },

  methods: {
    save: function () {
      console.log(JSON.stringify(this.entries));
      this.item = false;
    },
    setIcon: function (e) {
      this.item[e.key] = e.value;
    },
    setImage: function (e) {
      this.item[e.key] = e.value;
    },
    deleteItem: function (id) {
      let r = confirm("Are you sure you want to delete this item?");
      if (r == true) {
        this.entries.splice(
          this.entries.findIndex((x) => x.id === id),
          1
        );
        this.item = false;
      }
    },
    moveItem: function (id) {
      var from = this.entries.findIndex((x) => x.id == id);
      var to = from + 1;
      console.log(from);
      console.log(to);
      var f = this.entries.splice(from, 1)[0];
      this.entries.splice(to, 0, f);
    },
  },

  mounted() {
    //console.log('Editor component mounted.')

    var app = this;
    document.body.addEventListener("click", function (e) {
      if (e.target.closest(".editable")) {
        let el = e.target.closest(".editable");
        let id = el.id;
        app.item = app.entries.filter((x) => x.id === id)[0];

        let myfields = el.getAttribute("data-fields");
        let params = new URLSearchParams(myfields);
        myfields = Object.fromEntries(params.entries());
        //console.log(myfields);
        app.fields = myfields;
      }
    });
  },
};

const { createApp } = Vue;
const App = createApp({
  data() {
    return {
      editing: true,
      layouts: ["featured", "post", "news", "newsleft", "features"],
      entries: [
        {
          id: "item-1",
          layout: "header",
          title: "Vue Pagebuilder",
          subtitle: "Lorem ipsum dolor site amet.",
          button_text: "Contact Us",
          button_link: "#",
          icon: "fas fa-bolt",
        },
        {
          id: "item-2",
          layout: "post",
          title: "Mauris eleifend ligula",
          body: " Vivamus in nisi commodo, auctor magna vel, viverra turpis. Quisque dapibus risus nec justo euismod, id fringilla dui lobortis. Mauris vitae semper arcu. Ut ac lorem felis.",
        },
        {
          id: "item-3",
          layout: "news",
          title: "Maecenas tincidunt sem quis rutrum",
          body: "Mauris in porttitor elit. Aenean elementum eleifend quam, in tristique eros auctor porta. Donec et est in tellus blandit feugiat id nec nunc.",
        },
        {
          id: "item-4",
          layout: "features",
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis.",
        },
      ],
    };
  },

  methods: {
    defaultVal(key, def) {
      if (key == "") {
        return def;
      } else {
        return key;
      }
    },
  },

  components: {
    "wdgt-post": Post,
    "wdgt-header": Header,
    "wdgt-news": News,
    "wdgt-newsleft": NewsLeft,
    "wdgt-featured": Featured,
    "wdgt-features": Features,
    "page-editor": Editor,
  },
});

window.addEventListener("load", () => {
  App.mount("main");
});

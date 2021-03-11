const template = `
<input type="file" id="fileInput" class="fileInput" accept="image/png, image/jpeg, image/gif" style="display: none;" />
<button class="btn btn-outline-secondary" @click="choose">Upload</button>
`

export default {
  template,

  props: ['mykey'],
  emits: ["image"],

  data() {
    return {

    }
  },
  methods: {
    choose: function() {
      document.getElementById('fileInput').click();
    }
  },
  mounted() {


    var app = this;

    document.getElementById('fileInput').addEventListener('change', function(e) {

      var img_width = 500;

      var img = new Image();
      img.onload = function() {
        var canvas = document.createElement('canvas'),
          ctx = canvas.getContext("2d"),
          oc = document.createElement('canvas'),
          octx = oc.getContext('2d');

        canvas.width = img_width; // destination canvas size
        canvas.height = canvas.width * img.height / img.width;

        var cur = {
          width: Math.floor(img.width * 0.5),
          height: Math.floor(img.height * 0.5)
        }
        oc.width = cur.width;
        oc.height = cur.height;
        octx.drawImage(img, 0, 0, cur.width, cur.height);
        while (cur.width * 0.5 > img_width) {
          cur = {
            width: Math.floor(cur.width * 0.5),
            height: Math.floor(cur.height * 0.5)
          };
          octx.drawImage(oc, 0, 0, cur.width * 2, cur.height * 2, 0, 0, cur.width, cur.height);
        }
        ctx.drawImage(oc, 0, 0, cur.width, cur.height, 0, 0, canvas.width, canvas.height);
        var base64Image = canvas.toDataURL('image/jpeg')

        //console.log(base64Image);
        //window.cur_img.src = base64Image;
        //app.item[app.mykey] = base64Image;

        app.$emit("image", {
          key: app.mykey,
          value: base64Image
        });

      }
      img.src = URL.createObjectURL(e.target.files[0]);

    });

  }
}
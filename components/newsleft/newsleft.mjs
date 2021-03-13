import helpers from './../helpers.mjs'

const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte&amp;image=img&amp;youtube_url=vid">
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
      allowfullscreen />
      </div>
  </template>
  <template v-else>
    <img src="https://vue-pagebuilder.vercel.app/editor/img/placeholder.jpg" class="img-fluid" />
  </template>


    </div>

    <div class="col-md-6">
      <h2>{{item.title}}</h2>
      <p>{{item.body}}</p>
    </div>
      </div>
  </div>
  </section>
  `

export default {
  template,

  props: ['item'],

  created() {
    this.youtube_parser = helpers.youtube_parser;
  },

  mounted() {
    //console.log('News component mounted.')
  }
}
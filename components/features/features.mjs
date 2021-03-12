import helpers from './../helpers.mjs'

const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte&amp;title2=txt&amp;body2=rte">
  <div class="container">
    <div class="row">
    <div class="col-md-6 text-center">
      <h3>{{item.title}}</h3>
      <p>{{item.body}}</p>
    </div>
    <div class="col-md-6 text-center">
      <h3>{{def(item.title2, 'Lorem Ipsum')}}</h3>
      <p>{{def(item.body2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis.')}}</p>
    </div>
    </div>
  </div>
  </section>
  `

export default {
  template,

  props: ['item'],

  created() {
    this.def = helpers.def;
  },

  mounted() {
    //console.log('Features component mounted.')
  }
}
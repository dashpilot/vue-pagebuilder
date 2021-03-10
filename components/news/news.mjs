const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
  <div class="container">
    <div class="row">
    <div class="col-md-6">
      <h2>{{item.title}}</h2>
      <p>{{item.body}}</p>
    </div>
    <div class="col-md-6">
      <img src="editor/img/placeholder.jpg" class="img-fluid" />
    </div>
    </div>
  </div>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('News component mounted.')
  }
}
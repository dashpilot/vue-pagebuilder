const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
  <div class="container">
    <h2>{{item.title}}</h2>
    <p>{{item.body}}</p>
  </div>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Footer component mounted.')
  }
}

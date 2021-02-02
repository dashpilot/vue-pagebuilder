const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
  <h1>{{item.title}}</h1>
  <p>{{item.body}}</p>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Footer component mounted.')
  }
}
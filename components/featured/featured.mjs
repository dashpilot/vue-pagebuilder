const template = `
  <section :id="item.id" class="editable" data-fields="title=txt&amp;body=rte">
  <div class="container">
    <div class="w-50 m-auto text-center">
    <h2>{{item.title}}</h2>
    <p>{{item.body}}</p>
    </div>
  </div>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    //console.log('Featured component mounted.')
  }
}
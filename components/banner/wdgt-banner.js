const template = `
  <section :id="item.id" class="editable text-center" data-fields="title=txt&amp;subtitle=txt">
  <h1>{{item.title}}</h1>
  <p>{{item.subtitle}}</p>
  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Banner component mounted.')
  }
}

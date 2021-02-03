const template = `
  <section :id="item.id" class="editable text-center" data-fields="title=txt&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt&amp;icon=icon">


  <i :class="item.icon+' fa-big'"></i>

  <h1>{{item.title}}</h1>
  <p>{{item.subtitle}}</p>




  <a href="{{item.button_link}}" class="btn btn-secondary" v-if="item.button_text">{{item.button_text}}</a>

  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Banner component mounted.')
  }
}

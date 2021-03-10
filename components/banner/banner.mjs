const template = `
  <section :id="item.id" class="editable text-center" data-fields="title=txt&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt&amp;icon=icon&amp;&amp;icon_2=icon">

<div class="container">

  <i :class="item.icon+' fa-big'"></i>

  <h1>{{item.title}}</h1>
  <p>{{item.subtitle}}</p>

  <a :href="item.button_link" class="btn btn-secondary" v-if="item.button_text"><i :class="item.icon_2"></i> &nbsp;{{item.button_text}}</a>

</div>

  </section>
  `

export default {
  template,

  props: ['item'],

  mounted() {
    console.log('Banner component mounted.')
  }
}
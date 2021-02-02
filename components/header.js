const template = `
  <header class="jumbotron text-center" :style="{ 'background-color': bgColor }">
    <h4>{{text}}</h4>
  </header>
`

export default {
  template,

  props: {
    bgColor: {
      type: String,
      default: '#E9ECEF'
    }
  },

  setup() {
    return {
      text: 'Welcome to my site'
    }
  },

  mounted() {
    console.log('Header component mounted.')
  }
}
import Header from './components/header.js'
import Post from './components/wdgt-post.js'
import Banner from './components/wdgt-banner.js'
import Editor from './editor/editor.js'

const {
  createApp
} = Vue
const App = createApp({
  data() {
    return {
      layouts: ['post', 'banner'],
      entries: [{
          id: "item-1",
          layout: "post",
          title: "Hello",
          body: "Lorem ipsum dolor site amet"
        },
        {
          id: "item-2",
          layout: "post",
          title: "Hi",
          body: "This is my second message"
        }
      ],
    }
  },

  components: {
    'app-header': Header,
    'wdgt-post': Post,
    'wdgt-banner': Banner,
    'page-editor': Editor,
  },
});

window.addEventListener('load', () => {
  App.mount('main')
})
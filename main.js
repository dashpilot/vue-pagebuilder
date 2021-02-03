import Header from './components/header/header.js'
import Post from './components/post/wdgt-post.js'
import News from './components/news/wdgt-news.js'
import Banner from './components/banner/wdgt-banner.js'
import Editor from './editor/editor.js'

const {
  createApp
} = Vue
const App = createApp({
  data() {
    return {
      layouts: ['banner', 'post', 'news'],
      entries: [{
          id: "item-1",
          layout: "banner",
          title: "Sitefiction",
          body: "Lorem ipsum dolor site amet."
        },
        {
          id: "item-2",
          layout: "post",
          title: "Mauris eleifend ligula",
          body: " Vivamus in nisi commodo, auctor magna vel, viverra turpis. Quisque dapibus risus nec justo euismod, id fringilla dui lobortis. Mauris vitae semper arcu. Ut ac lorem felis."
        },
        {
          id: "item-3",
          layout: "news",
          title: "Maecenas tincidunt in sem quis rutrum",
          body: "Mauris in porttitor elit. Aenean elementum eleifend quam, in tristique eros auctor porta. Donec et est in tellus blandit feugiat id nec nunc."
        }
      ],
    }
  },

  components: {
    'app-header': Header,
    'wdgt-post': Post,
    'wdgt-banner': Banner,
    'wdgt-news': News,
    'page-editor': Editor,
  },
});

window.addEventListener('load', () => {
  App.mount('main')
})

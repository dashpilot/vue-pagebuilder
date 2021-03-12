import Header from './components/header/header.mjs'
import Post from './components/post/post.mjs'
import News from './components/news/news.mjs'
import NewsLeft from './components/newsleft/newsleft.mjs'
import Featured from './components/featured/featured.mjs'
import Features from './components/features/features.mjs'
import Editor from './editor/editor.mjs'

const {
  createApp
} = Vue
const App = createApp({
  data() {
    return {
      editing: true,
      layouts: ['featured', 'post', 'news', 'newsleft', 'features'],
      entries: [{
          id: "item-1",
          layout: "header",
          title: "Vue Pagebuilder",
          subtitle: "Lorem ipsum dolor site amet.",
          button_text: "Contact Us",
          button_link: "#",
          icon: "fas fa-bolt"
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
          title: "Maecenas tincidunt sem quis rutrum",
          body: "Mauris in porttitor elit. Aenean elementum eleifend quam, in tristique eros auctor porta. Donec et est in tellus blandit feugiat id nec nunc."
        },
        {
          id: "item-4",
          layout: "features",
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis."
        }
      ],
    }
  },

  methods: {
    defaultVal(key, def) {
      if (key == '') {
        return def;
      } else {
        return key;
      }
    }
  },

  components: {
    'wdgt-post': Post,
    'wdgt-header': Header,
    'wdgt-news': News,
    'wdgt-newsleft': NewsLeft,
    'wdgt-featured': Featured,
    'wdgt-features': Features,
    'page-editor': Editor,
  },
});

window.addEventListener('load', () => {
  App.mount('main')
})
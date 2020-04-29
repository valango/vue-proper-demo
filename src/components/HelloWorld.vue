<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{$p('For a detailed description of how this works, check out the')}}
      <br />
      <a href="https://github.com/valango/vue-proper/#readme" v-bind="proper()">
        {{$p('vue-proper documentation')}}</a>.
    </p>
    <h3 v-bind="proper('plugins')">Installed CLI Plugins</h3>
    <ul>
      <li><a v-bind="proper('cli-plugin-babel')">babel</a></li>
      <li><a v-bind="proper('cli-plugin-eslint')">eslint</a></li>
    </ul>
    <h3 v-bind="proper('links')">Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" v-bind="proper('docs')">Core Docs</a>
      </li>
      <li><a href="https://forum.vuejs.org"
             v-bind="proper('forum')">Forum</a></li>
      <li><a href="https://chat.vuejs.org" v-bind="proper('chat')">
        Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" v-bind="proper()">Twitter</a></li>
      <li><a href="https://news.vuejs.org" v-bind="proper('news')">News</a>
      </li>
    </ul>
    <h3 v-bind="proper('eco')">Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" v-bind="proper()">vue-router</a>
      </li>
      <li><a href="https://vuex.vuejs.org" v-bind="proper()">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools"
             v-bind="proper()">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org"
             v-bind="proper()">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" v-bind="proper()">
        awesome-vue</a></li>
    </ul>
    <div class="controls">
      <div v-bind="proper('try')">Try the magic:</div>
      <div>
        <button @click="toggle()" v-bind="proper('emulate')">Emulate status
          change
        </button>
        <button @click="language()" v-bind="proper('lang')">Eesti (ET)</button>
      </div>
      <div>
        <input type="checkbox" id="trace-on" v-model="traceOn">
        <label for="trace-on" v-bind="proper('trace')">
          Display trace<br>on debug panel</label>
      </div>
    </div>
  </div>
</template>

<script>
import texts from '../ui-texts'

export default {
  props: {
    msg: String
  },
  data () {
    return { red: false, traceOn: false }
  },
  methods: {
    language () {
      this.$p.set(texts[this.$p.lang = this.$p.lang === 'en' ? 'et' : 'en'])
      this.$parent.$forceUpdate()
    },
    proper: () => undefined,

    properSave (v, f) {
      if (this.$p.lang === 'et' && !texts.en[f]) {
        texts.en[f] = { innerHtml: v }
      }
      return true
    },

    toggle () {
      this.proper({ suffix: ((this.red = !this.red)) ? 'dangerous' : '' })
      this.$forceUpdate()     //  Needed, if nothing render-able was changed.
    }
  },
  watch: {
    traceOn (yes) {
      this.proper({
        debug: yes
          ? (a, f, k) => console.debug('retrievalKey: %s\nattributes: %o', k, a)
          : () => undefined
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  button {
    font-weight: bold;
    border-color: #ff0000;
    border-radius: 30px;
    height: 3em;
  }

  .controls {
    border: solid 1px #42b983;
    padding: 0.5em;
    width: 75%;
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
</style>

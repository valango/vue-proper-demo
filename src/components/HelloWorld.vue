<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/valango/vue-proper/#readme" v-bind="proper()">vue-proper
        documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a v-bind="proper('cli-plugin-babel')">babel</a></li>
      <li><a v-bind="proper('cli-plugin-eslint')">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" v-bind="proper()">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" v-bind="proper()">Forum</a></li>
      <li><a href="https://chat.vuejs.org" v-bind="proper()">
        Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" v-bind="proper()">Twitter</a></li>
      <li><a href="https://news.vuejs.org" v-bind="proper()">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
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
      <div>Try the magic:</div>
      <div>
        <button @click="toggle()">Emulate status change</button>
      </div>
      <div>
        <input type="checkbox" id="trace-on" v-model="traceOn">
        <label for="trace-on">Display trace<br>on debug panel</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return { red: false, traceOn: false }
  },
  methods: {
    proper: () => undefined,

    toggle () {
      this.context.suffix = ((this.red = !this.red)) ? 'red' : ''
      this.$forceUpdate()     //  Needed, if nothing render-able was changed.
    }
  },
  watch: {
    traceOn (yes) {
      this.context.debug = yes
        ? (a, f, k) => console.debug('retrieval-key: %s\nattributes: %o', k, a)
        : () => undefined
    }
  },
  //  Lifecycle hooks
  created () {
    this.context = this.proper(null)  //  vue-proper settings for this instance.
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{$t('For a detailed description of how this works, check out the')}}
      <br />
      <a href="https://github.com/valango/vue-proper/#readme" v-bind="proper()">
        {{$t('vue-proper documentation')}}</a>.
    </p>
    <h3>{{$t('Installed CLI Plugins')}}</h3>
    <ul>
      <li><a v-bind="proper('cli-plugin-babel')">babel</a></li>
      <li><a v-bind="proper('cli-plugin-eslint')">eslint</a></li>
    </ul>
    <h3>{{$t('Essential Links')}}</h3>
    <ul>
      <li><a href="https://vuejs.org" v-bind="proper()">{{$t('Core Docs')}}</a>
      </li>
      <li><a href="https://forum.vuejs.org"
             v-bind="proper()">{{$t('Forum')}}</a></li>
      <li><a href="https://chat.vuejs.org" v-bind="proper()">
        {{$t('Community Chat')}}</a></li>
      <li><a href="https://twitter.com/vuejs" v-bind="proper()">Twitter</a></li>
      <li><a href="https://news.vuejs.org" v-bind="proper()">{{$t('News')}}</a>
      </li>
    </ul>
    <h3>{{$t('Ecosystem')}}</h3>
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
      <div>{{$t('Try the magic')}}:</div>
      <div>
        <button @click="toggle()" v-text="$t('Emulate status change')" />
        <button @click="language()" v-text="$t('Eesti (ET)')" />
      </div>
      <div>
        <input type="checkbox" id="trace-on" v-model="traceOn">
        <label for="trace-on">{{$t('Display trace')}}<br>{{$t('on debug panel')}}</label>
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
    return { lang: 'en', red: false, traceOn: false }
  },
  methods: {
    language () {
      this.$t.set(texts[this.lang = this.lang === 'en' ? 'et' : 'en'])
      this.$parent.$forceUpdate()
    },
    proper: () => undefined,

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

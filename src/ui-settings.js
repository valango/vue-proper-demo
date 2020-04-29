//  src/ui-settings

module.exports = {
  rel: 'noopener',
  target: '_blank',

  '/cli-plugin-babel/': {
    href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
  },
  '/cli-plugin-eslint/': {
    href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
  },
  '/!dangerous$/': {
    style: 'color: #ff0000',
    '>eco!': { style: 'color: #f000ff; font-style: oblique 40deg;' },
    '>links!': { style: 'color: #0000ff;' },
    '>plugins!': {style: 'background-color: #000; color: #00f0ff;'}
  }
}

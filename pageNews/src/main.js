import Vue from 'vue'
import App from './App.vue'

//引入全局的base文件
require('./assets/css/base.css');  

new Vue({
  el: '#app',
  render: h => h(App)
})

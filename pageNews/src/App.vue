<template>
  <div id="app">
    <NavView></NavView>
    <indexContenteView></indexContenteView>
  </div>
</template>

<script>
// 引入组件
import NavView from "./components/Nav.vue"
import indexContenteView from './components/IndexContnet.vue'
export default {
  name: 'app',
  components:{
    NavView,
    indexContenteView
  }
}
</script>

<style>
@import './assets/css/index.css';
</style>

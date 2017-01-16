<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <h3>welcome to Vue!</h3>
    <strong>{{message}}</strong>
    <News></News>
  </div>
</template>

<script>
import Hello from './components/Hello'
import News from './components/News'
export default {
  data () {
    return {
      message: '欢迎来到Vue的世界'
    }
  },
  components: {
    Hello,
    News
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

<template>
  <div id="app">
    <hello></hello>
    <div class="block">
      <span class="wrapper">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="danger" icon="loading"></el-button>
      </span>
    </div>
    <div class="block">
      <span class="wrapper">
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </span>
    </div>
    <div class="block">
    <span class="wrapper">
      <el-button :plain="true" type="success">成功按钮</el-button>
      <el-button :plain="true" type="warning">警告按钮</el-button>
      <el-button :plain="true" type="danger">危险按钮</el-button>
      <el-button :plain="true" type="info">信息按钮</el-button>
      <el-button type="primary" icon="upload">上传</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </span>
    </div>
  </div>
</template>
<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>

<template>
    <h3>我是新闻列表</h3>
    <ul>
        <li>
            <a v-link="{path:'/news/newDetails/001'}">新闻1</a>
        </li>
        <li>
            <a v-link="{path:'/news/newDetails/002'}">新闻2</a>
        </li>
    </ul>
    <div class="box">
        <router-view></router-view>
    </div>
</template>
<script>
    
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
    border: 1px dashed red;
}
</style>
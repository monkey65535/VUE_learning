<template>
    <h3>我是主页</h3>
    <ul>
        <li>
            <a v-link="{path:'/home/login'}">登陆</a>
            <a v-link="{path:'/home/reg'}">注册</a>
        </li>
    </ul>
    <div class="box">
        <router-view></router-view>
    </div>
</template>
<style scoped>
.box{
    width: 100%;
    height: 100%;
    border: 1px dashed #999;
}
</style>
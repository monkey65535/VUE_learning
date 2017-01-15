// 引入模块
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routerConfig from './router.config.js';
// 声明使用router
Vue.use(VueRouter);

// 配置路由
const router = new VueRouter();
// 配置路由规则
router.map(routerConfig);

// 开启路由
router.start(App,'#app');

// 设置默认
router.redirect({
    '/':'./home'
})




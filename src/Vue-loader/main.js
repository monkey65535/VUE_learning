// ES6 模块化语法
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// 声明使用router
Vue.use(VueRouter);

// 引入路由的页面组件
import Home from './components/Home.vue';
import News from './components/News.vue';

// 配置路由
const router = new VueRouter();
// 配置路由规则
router.map({
    'home':{
        component:Home
    },
    'news':{
        component:News
    }
});

// 开启路由
router.start(App,'#app');



new Vue({
    el:'body',
    components:{
        app:App
    }
});



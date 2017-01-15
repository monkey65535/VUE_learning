// 引入路由的页面组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import Login from './components/Login.vue';
import Reg from './components/Reg.vue';
import NewDetails from './components/NewDetails.vue';

// 配置路由规则
export default({
    '/home':{
        component:Home,
        subRoutes:{
            'login':{
                component:Login
            },
            'reg':{
                component:Reg
            }
        }
    },
    '/news':{
        component:News,
        subRoutes:{
            'newDetails/:newsId':{
                component:NewDetails
            }
        }
    }
})
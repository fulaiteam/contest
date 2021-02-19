import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)

const router = new Router({
    routes: [
        {   // 登录页面
            path: '/',
            name: 'Cover',
            component: resolve => require(['@/pages/Cover'], resolve),
        },
        {   // 登录页面
            path: '/result1',
            name: 'Result1',
            component: resolve => require(['@/pages/Result1'], resolve),
        },
        {   
            path: '/result2',
            name: 'Result2',
            component: resolve => require(['@/pages/Result2'], resolve),
        },
        {   
            path: '/result3',
            name: 'Result3',
            component: resolve => require(['@/pages/Result3'], resolve),
        },
        {   
            path: '/result4',
            name: 'Result4',
            component: resolve => require(['@/pages/Result4'], resolve),
        },
    ]
})






 export default router;
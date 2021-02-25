import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Result1 from '@/pages/Result1'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'
import Test3 from '@/pages/Test3'
import Test4 from '@/pages/Test4'
import Test5 from '@/pages/Test5'
import Test6 from '@/pages/Test6'
import Test7 from '@/pages/Test7'

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
            path: '/test1',
            name: 'Test1',
            component: resolve => require(['@/pages/Test1'], resolve),
        },
        {
            path: '/test2',
            name: 'Test2',
            component: resolve => require(['@/pages/Test2'], resolve),
        },
        {
            path: '/test3',
            name: 'Test3',
            component: resolve => require(['@/pages/Test3'], resolve),
        },
        {
            path: '/test4',
            name: 'Test4',
            component: resolve => require(['@/pages/Test4'], resolve),
        },
        {
            path: '/test5',
            name: 'Test5',
            component: resolve => require(['@/pages/Test5'], resolve),
        },
        {
            path: '/test6',
            name: 'Test6',
            component: resolve => require(['@/pages/Test6'], resolve),
        },
        {
            path: '/test7',
            name: 'Test7',
            component: resolve => require(['@/pages/Test7'], resolve),
        },
        {
            path: '/test8',
            name: 'Test8',
            component: resolve => require(['@/pages/Test8'], resolve),
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
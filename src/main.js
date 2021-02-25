// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 
// import router from './router'
import ElementUI from 'element-ui';
import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store/index'
Vue.use(Vuex)
// 公共样式
import './assets/css/common.css'
import CommonJs from './assets/javascript/common.js';
import Excel from './assets/javascript/excel.js';
import Print from './assets/javascript/print.js';
import './common/font/font.css';

// 时间处理插件
import moment from "moment";
import Axios from 'axios';
Vue.prototype.$moment = moment;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(CommonJs);
Vue.use(Excel);
Vue.use(Print); // 注册

// 第三方动画
import animated from 'animate.css';
Vue.use(animated);







/* eslint-disable no-new */
// export const store = new Vuex.Store({
//   state:{
//     counter:0
//   }
// })


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
//     console.log('shi')
//     if(!sessionStorage.getItem('token') && !localStorage.getItem('token')){
//       console.log('123')
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }else{
//     	 next();
//     }
//   }else {
//     console.log('否')
//     next();
//   }
// });




// router.afterEach( ( to, from, next ) => {
//   console.log(111111)
//   setTimeout(()=>{
//     var _hmt = _hmt || [];
//     (function() {
//       var hm = document.createElement("script");
//       hm.src = "https://hm.baidu.com/hm.js?728ddd705740fde45b8bb2c033c8053e";
//       var s = document.getElementsByTagName("script")[0]; 
//       s.parentNode.insertBefore(hm, s);
//     })();
//   },0);
// } );

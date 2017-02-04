import Vue from 'vue'
import sideBar from './components/sideBar'
//引用路由插件
import VueRouter from 'vue-router'
//使用路由插件
Vue.use( VueRouter )
// console.log( data );
//引入组件 
import myCourse from './components/myCourse'
import collect from './components/collect'
import allLesson from './components/allLesson'

const routes = [
    { path: '/', component: myCourse },
    { path: '/collect/', component: collect },
    { path: '/allLesson/', component: allLesson }
]

//使用路由规则
const router = new VueRouter( {
    routes
})
//加载路由规则
new Vue( {
    router,
    el: '#app1',
    render: h => h( sideBar )
})



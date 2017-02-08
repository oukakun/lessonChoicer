import Vue from 'vue';
import "./public/less/common.css";

import App from './App.vue';
//引用路由插件
import VueRouter from 'vue-router'
//使用路由插件
Vue.use( VueRouter )

//引入子组件 
import myCourse from './components/myCourse.vue'
import collect from './components/collect.vue'
import allLesson from './components/allLesson.vue'

const routes = [
    { path: '/', component: myCourse },
    { path: '/collect/', component: collect },
    { path: '/allLesson/', component: allLesson }
]

//使用路由规则
const router = new VueRouter( {
    routes
})

new Vue( {
    router,
    el: "#app",
    render: function ( create ) { return create( App ) }
});
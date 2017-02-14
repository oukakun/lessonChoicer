<template>
    <!--侧边导航栏部分-->-
    <div>
        <div class="sidebar">
            <img src="./public/images/logo.png" alt="">
            <h2 class="title">选课助手</h2>
            <ul class="nav">
                <li v-on:click="judgeHash">
                    <i class="fa fa-table fl" :class="{active:isIndex}"></i>
                    <router-link to="/" :class="{navName:true,active:isIndex}">我的课表</router-link>
                </li>
                <li v-on:click="judgeHash">
                    <i class="fa fa-star-o fl" :class="{active:isCollect}"></i>
                    <router-link to="/collect" class="{navName:true,active:isCollect}">收藏夹</router-link>
                </li>
                <li v-on:click="judgeHash">
                    <i class="fa fa-search fl"></i>
                    <a href="javascript:;" class="navName">搜索</a>
                </li>
                <li v-on:click="judgeHash">
                    <i class="fa fa-list-alt fl" :class="{active:isAllLesson}"></i>
                    <router-link to="/allLesson" class="{navName:true,active:isAllLesson}">所有课程</router-link>
                </li>
            </ul>
        </div>
        <router-view class="view" keep-alive transition transition-mode="out-in"> </router-view>
    </div>
</template>
<script>
    import vue from "./vue.js"
    console.log( app1.isShow );

    module.exports = {
        data: function () {
            return {
                course: COURSE_DATA,
                isIndex: true,
                isCollect: false,
                isAllLesson: false
            }
        },
        methods: {
            judgeHash: function () {
                if ( location.hash == '#/' ) {
                    this.isCollect = false;
                    this.isAllLesson = false;
                    this.isIndex = true;
                };
                if ( location.hash == '#/collect' ) {
                    this.isCollect = true;
                    this.isAllLesson = false;
                    this.isIndex = false;
                };
                if ( location.hash == '#/allLesson' ) {
                    this.isCollect = false;
                    this.isAllLesson = true;
                    this.isIndex = false;
                };

            },
            alertSearch: function () {

            }
        }

    }
</script>
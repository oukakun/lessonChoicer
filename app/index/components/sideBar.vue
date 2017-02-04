<template>
    <!--侧边导航栏部分-->
    <div>
        <div class="sidebar">
            <img src="public/images/logo.png" alt="">
            <h2 class="title">复旦选课助手</h2>
            <ul class="nav">
                <li class="active">
                    <i class="fa fa-table fl"></i>
                    <router-link to="/" class="navName active">我的课表</router-link>
                </li>
                <li>
                    <i class="fa fa-star-o fl"></i>
                    <router-link to="/collect" class="navName">收藏夹</router-link>
                </li>
                <li>
                    <i class="fa fa-search fl"></i>
                    <a href="javascript:;" class="navName">搜索</a>
                </li>
                <li>
                    <i class="fa fa-list-alt fl"></i>
                    <router-link to="/allLesson" class="navName">所有课程</router-link>
                </li>
            </ul>
        </div>
        <router-view class="view" keep-alive transition transition-mode="out-in"> </router-view>
    </div>
</template>
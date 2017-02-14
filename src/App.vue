<template>
    <!--侧边导航栏部分-->-
    <div>
        <div class="sidebar">
            <img src="./public/images/logo.png" alt="">
            <h2 class="title">选课助手</h2>
            <ul class="nav">
                <li v-on:click="judgeHash">
                    <i class="fa fa-table fl" :class="{active:isIndex}"></i>
                    <router-link to="/home" :class="{navName:true,active:isIndex}">我的课表</router-link>
                </li>
                <li v-on:click="judgeHash">
                    <i class="fa fa-star-o fl" :class="{active:isCollect}"></i>
                    <router-link to="/collect" :class="{navName:true,active:isCollect}">收藏夹</router-link>
                </li>
                <li v-on:click="alertSearch">
                    <i class="fa fa-search fl"></i>
                    <a href="javascript:;" :class="{navName:true}">搜索</a>
                </li>
                <li v-on:click="judgeHash">
                    <i class="fa fa-list-alt fl" :class="{active:isAllLesson}"></i>
                    <router-link to="/allLesson" :class="{navName:true,active:isAllLesson}">所有课程</router-link>
                </li>
            </ul>
        </div>
        <!--搜索部分-->
        <div class="search" :class="{animated:true,fadeInDownBig:isShow,fadeOutUpBig:!isShow,hidden:isShow}">
            <div class="search_icon fl">
                <i class="fa fa-search"></i>
            </div>
            <div class="search_more fr">
                <i class="fa fa-angle-down"></i>
                <a href="###">更多条件</a>
            </div>
            <div class="search_input">
                <input type="text" placeholder="课程名称/选课号/教师姓名">
            </div>
            <div class="search_content">
                <h3>限定类别</h3>
                <form id="lessonType">
                    <ul class="clearfix">
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">大学英语</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">二专课程</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">美术</label>
                        </li>
                        <li>
                            <i class="fa fa-square-o"></i>
                            <input type="checkbox" name="lessonType">
                            <label for="lessonType">计算机</label>
                        </li>
                    </ul>
                </form>
                <div class="search_lesson_time">
                    <h3>限定时间</h3>
                    <div class="lessonTime fromTime">
                        从
                        <select>
                            <option value="一">周一</option>
                            <option value="一">周二</option>
                            <option value="一">周三</option>
                            <option value="一">周四</option>
                            <option value="一">周五</option>
                            <option value="一">周六</option>
                        </select>
                        第
                        <input type="text"> 节课
                    </div>
                    <div class="lessonTime toTime">
                        到
                        <select>
                            <option value="一">周一</option>
                            <option value="一">周二</option>
                            <option value="一">周三</option>
                            <option value="一">周四</option>
                            <option value="一">周五</option>
                            <option value="一">周六</option>
                        </select>
                        第
                        <input type="text"> 节课
                    </div>
                </div>
                <div class="search_content_detailed clearfix">
                    <div class="lesson_list fl">
                        <ul>
                            <li>
                                <a href="###">
                                    <h4>英语论说文写作</h4>
                                    <span>杜方圆</span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <h4>英语论说文写作</h4>
                                    <span>杜方圆</span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <h4>英语论说文写作</h4>
                                    <span>杜方圆</span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <h4>英语论说文写作</h4>
                                    <span>杜方圆</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="lesson_detailed">
                        <h3>英语论说文写作</h3>
                        <div class="lesson_info">
                            <p class="lesson_code">ENGL110061.18</p>
                            <p class="lesson_teacher">杜方圆&nbsp;&nbsp;讲师
                            </p>
                            <p class="lesson_pleace">四 6-7&nbsp;&nbsp;H6102
                            </p>
                            <p class="lesson_student">人数
                                <span class="studentNum">20</span>
                            </p>
                        </div>
                        <div class="test_info">
                            考试日期:
                            <span class="test_date">2015-12-28</span>
                            开始时间:
                            <span class="test_time">15:30-16:30</span>
                        </div>
                        <div class="lesson_action">
                            <button class="plus_course">加入课表</button>
                            <button class="plus_collection">加入收藏夹</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="view" keep-alive transition transition-mode="out-in"> </router-view>
    </div>
</template>
<script>
    import "./public/less/sidebar.css";
    import "./public/less/index.css";
    import "./public/less/lessonAll.css";
    import "./public/less/collect.css";
    import "./public/less/search.css";


    export default {
        data: function () {
            return {
                course: COURSE_DATA,
                isIndex: true,
                isCollect: false,
                isAllLesson: false,
                isShow: false
            }
        },
        methods: {
            judgeHash: function () {
                if ( location.hash == '#/home' ) {
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
                if ( this.isShow == false ) {
                    this.isShow = true;

                } else {
                    this.isShow = false;
                }
            }
        }
    }
</script>
<style>
    .template {
        color: pink;
    }
</style>
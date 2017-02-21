<template>
    <div class="alllesson">
        <div :class="{animated:true,bounceOut:isHide,select:true,bounceIn:!isHide,hidden:hide}" v-bind:style="{left:left,top:top}">
            <p class="name">{{info['课程名称']}}</p>
            <p class="teacher">{{info['教师']}}</p>
            <button class="update" v-on:click='addLesson($event)' v-if="disabled()">加入课表</button>
            <button class="update gray" v-on:click='addLesson($event)' v-else disabled>加入课表</button>
            <button class="box" v-on:click='addCollect($event)' v-if="disable()">加入收藏夹</button>
            <button class="box gray" v-on:click='addCollect($event)' v-else disabled>加入收藏夹</button>
        </div>
        <div class="lessonInfo">
            <div class="table-name">理科课程</div>
            <table>
                <thead>
                    <td>选课序号</td>
                    <td>课程名称</td>
                    <td>学分</td>
                    <td>教师</td>
                    <td>职称</td>
                    <td>人数</td>
                    <td>教室</td>
                    <td>时间</td>
                    <td>备注</td>
                </thead>
                <tbody v-for="(value,key) in course">
                    <tr v-for="(value1,key1) in course[key]" v-on:click='alert($event)' v-bind:id=key1>
                        <span class="hidden">{{ value1 }}</span>
                        <td>{{ value1['选课序号'] }}</td>
                        <td>{{ value1['课程名称'] }}</td>
                        <td>{{ value1['学分'] }}</td>
                        <td>{{ value1['教师'] }}</td>
                        <td>{{ value1['职称'] }}</td>
                        <td>{{ value1['人数'] }}</td>
                        <td>{{ value1['教室'] }}</td>
                        <td>{{ value1['时间'] }}</td>
                        <td>{{ value1['备注'] || '无' }}</td>
                    </tr>
                </tbody>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                course: COURSE_DATA,
                isHide: true,
                left: 0,
                top: 0,
                hide: true,
                info: {}
            }
        },

        methods: {
            //alert,点击每一行时触发的方法 ,会弹出一个选择框,添加课程表或者添加到收藏夹
            alert: function ( $event ) {
                //变量声明，width(屏幕可视区域的宽度)，distance(弹出窗距离页面最右侧的距离)，current(当前被点击的dom对象)，children(当前对象的子dom元素)，data(我们需要的数据)
                var width, distance, current, children, i, data;
                width = document.body.clientWidth;
                distance = width - $event.clientX;
                if ( this.isHide ) {
                    var current = $event.currentTarget;
                    var children = current.children;
                    for ( i = 0; i < children.length; i++ ) {
                        if ( i == 0 ) {
                            data = children[ 0 ].innerText
                            //将json字符串转换成json对象，得到我们要的数据
                            data = JSON.parse( data );
                            this.info = data;
                        }
                    }
                }
                //当我们点击某行弹出弹出层的时候，我们才需要调动弹出层的位置，而我们关闭弹出层的时候不需要
                this.left = this.isHide ? ( distance > 200 ? $event.clientX + 'px' : ( width - 220 ) +
                    'px' ) : this.left;
                this.top = this.isHide ? $event.clientY + 'px' : this.top;
                //弹出框开始时是隐藏的，点击一次显示，点击第二次隐藏
                this.isHide = this.isHide ? false : true;
                this.hide = false;
            },
            //addLesson,点击添加到课程表页面中
            addLesson: function ( $event ) {
                var add = {
                    "type": "addLesson",
                    "info": ""
                };
                add.info = this.info;
                $.cookie( 'addLesson' + this.info[ '选课序号' ], JSON.stringify( add ) );
                console.log( this.info[ '选课序号' ] )
                this.isHide = true;
            },
            //addCollect,点击添加数据到收藏夹页面中
            addCollect: function ( $event ) {
                var add = {
                    "type": "addCollect",
                    "info": ""
                };
                add.info = this.info;
                $.cookie( 'addCollect' + this.info[ '选课序号' ], JSON.stringify( add ) );
                this.isHide = true;
            },
            disabled: function () {
                if ( $.cookie( 'addLesson' + this.info[ '选课序号' ] ) ) {
                    return false;
                } else {
                    return true;
                }
            },
            disable: function () {
                console.log( this.info[ '选课序号' ] );
                if ( $.cookie( 'addCollect' + this.info[ '选课序号' ] ) ) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
</script>
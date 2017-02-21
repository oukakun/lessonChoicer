<template>
    <!--收藏表单部分-->
    <div class="alllesson">
        <div class="lessonInfo">
            <table>
                <thead>
                    <td>选课序号</td>
                    <td>课程名称</td>
                    <td>教师</td>
                    <td>时间</td>
                    <td>教室</td>
                    <td>操作</td>
                </thead>
                <tbody v-for="(data,index) in collectDatas">
                    <tr>
                        <td>{{data['选课序号']}}</td>
                        <td>{{data['课程名称']}}</td>
                        <td>{{data['教师']}}</td>
                        <td>{{data['时间']}}</td>
                        <td>{{data['教室']}}</td>
                        <td>
                            <button class="update add" v-if="disabled(data['选课序号'])" v-on:click="addLesson($event)">加入课表</button>
                            <button class="update addAlready" v-else disabled>已加入课表</button>
                            <button class="update remove">
                                <i class="fa fa-trash-o"></i>
                                移除
                            </button>
                            <button class="update copy">复制序号</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                i: '0',
                collectDatas: [],
            }
        },
        created: function () {
            //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
            //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
            var resultArr = [];
            //获取cookie数据
            for ( var key in $.cookie() ) {
                resultArr.push( $.cookie( key ) );

            }

            //处理cookie数据为对象
            for ( var i = 1; i < resultArr.length; i++ ) {
                var obj = JSON.parse( resultArr[ i ] );
                if ( obj.type == "addCollect" ) {
                    this.collectDatas.push( obj.info );
                }

            }

        },
        methods: {
            //检测课程序号是否在课表cookie中
            disabled: function ( event ) {

                if ( $.cookie( 'addLesson' + event ) ) {
                    return false;
                } else {
                    return true;
                }
            },
            //添加课程序号到课表cookie
            addLesson: function ( event ) {
                var add = {
                    "type": "addLesson",
                    "info": ""
                };
                console.log( event );
                var addLessonNum = event.path[ 2 ].firstChild.innerText;
                var collectObj = JSON.parse( $.cookie( 'addCollect' + addLessonNum ) );
                add.info = collectObj.info;
                console.log( add );
                $.cookie( 'addLesson' + addLessonNum, JSON.stringify( add ) );
                location.reload();
            },
            delete: function () {

            }
        }
    }
</script>
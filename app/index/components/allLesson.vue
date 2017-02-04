<template>
    <div class="alllesson">
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
                    <tr v-for="(value1,key1) in course[key]">
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
    console.log( COURSE_DATA );
    module.exports = {
        data: function () {
            return {
                course: COURSE_DATA
            }
        }
    }
</script>
<template>
    <div>
        <el-text class="mx-1" type="primary">星座:</el-text>
        <br>
        <el-radio-group v-model="type">
            <el-radio :key="typekey" v-for="type, typekey in types" :value="type.type">{{ type.label }} </el-radio>
        </el-radio-group>
    </div>
    <div>
        <el-text class="mx-1" type="primary">时间:</el-text>
        <br>
        <el-radio-group v-model="time">
            <el-radio :key="timekey" v-for="time, timekey in times" :value="time.type">{{ time.label }} </el-radio>
        </el-radio-group>
    </div>
    <el-button @click="getdata" style="width: 100%;margin: 20px 0;" type="primary">查询</el-button>
    <div v-if="data.success == true">
        <el-card class="cards">
            <template #header>
                <div class="header" style="display: flex;">
                    <div class="icon">
                        <span class="iconfont" v-html="icons[data.data.title]"></span>
                    </div>
                    <div>
                        <div class="title">
                            <el-text>{{ data.data.title }}</el-text>
                        </div>
                        <div class="time">
                            <el-tag size="small" type="primary">{{ data.data.time }}</el-tag>
                        </div>
                    </div>
                    <div class="yiji">
                        <div class="yi">
                            <el-text type="success" class="title">宜: </el-text>
                            <el-text type="success">{{ data.data.todo.yi }}</el-text>
                        </div>
                        <div class="ji">
                            <el-text type="danger" class="title">忌: </el-text>
                            <el-text type="danger">{{ data.data.todo.ji }}</el-text>
                        </div>
                    </div>
                </div>
            </template>
            <div class="content">
                <el-card class="content_1">
                    <template #header>
                        <div style="display: flex;justify-content: space-between;">
                            <div>
                                <el-text class="title">综合运势 </el-text> <el-text type="success" :key="zhdf"
                                    v-for="zhdf in data.data.fortune.all" class="title">❤</el-text>
                                <el-text>&nbsp;</el-text>
                                <el-text class="title"> {{ data.data.index.all }}</el-text>
                            </div>

                            <el-text>{{ data.data.shortcomment }}</el-text>
                        </div>

                    </template>
                    <div style="text-align: center;display: flex;justify-content: space-between;">
                        <el-text type="primary">幸运色<br>{{ data.data.luckycolor }}</el-text><el-text>&nbsp;</el-text>
                        <el-text type="success">幸运数字<br>{{ data.data.luckynumber }}</el-text><el-text>&nbsp;</el-text>
                        <el-text type="warning">幸运星座<br>{{ data.data.luckyconstellation }}</el-text>
                    </div>
                    <br>
                    <el-text>&emsp;&emsp;{{ data.data.fortunetext.all }}</el-text>
                    <div>

                    </div>
                </el-card>
                <div class="content_2">
                    <el-card> <template #header>
                            <el-text class="title">爱情运势 </el-text><el-text type="success" :key="aqyx"
                                v-for="aqyx in data.data.fortune.love" class="title">❤</el-text>
                            <el-text>&nbsp;</el-text>
                            <el-text class="title"> {{ data.data.index.love }}</el-text>
                        </template>
                        <el-text>&emsp;&emsp;{{ data.data.fortunetext.love }}</el-text>
                    </el-card>
                    <el-card> <template #header>
                            <el-text class="title">工作运势 </el-text><el-text type="success" :key="gzys"
                                v-for="gzys in data.data.fortune.work" class="title">❤</el-text>
                            <el-text>&nbsp;</el-text>
                            <el-text class="title"> {{ data.data.index.work }}</el-text>
                        </template>
                        <el-text>&emsp;&emsp;{{ data.data.fortunetext.work }}</el-text>
                    </el-card>
                    <el-card> <template #header>
                            <el-text class="title">财运运势 </el-text><el-text type="success" :key="cwys"
                                v-for="cwys in data.data.fortune.money" class="title">❤</el-text>
                            <el-text>&nbsp;</el-text>
                            <el-text class="title"> {{ data.data.index.money }}</el-text>
                        </template>
                        <el-text>&emsp;&emsp;{{ data.data.fortunetext.money }}</el-text>
                    </el-card>
                    <el-card> <template #header>
                            <el-text class="title">健康运势 </el-text><el-text type="success" :key="jkys"
                                v-for="jkys in data.data.fortune.health" class="title">❤</el-text>
                            <el-text>&nbsp;</el-text>
                            <el-text class="title"> {{ data.data.index.health }}</el-text>
                        </template>
                        <el-text>&emsp;&emsp;{{ data.data.fortunetext.health }}</el-text>
                    </el-card>
                </div>
            </div>
        </el-card>
    </div>
    <div v-else>
        <p style="text-align: center;">暂无数据</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const types = ref([
    { type: "aries", label: "白羊座" },
    { type: "taurus", label: "金牛座" },
    { type: "gemini", label: "双子座" },
    { type: "cancer", label: "巨蟹座" },
    { type: "leo", label: "狮子座" },
    { type: "virgo", label: "处女座" },
    { type: "libra", label: "天秤座" },
    { type: "scorpio", label: "天蝎座" },
    { type: "sagittarius", label: "射手座" },
    { type: "capricorn", label: "摩羯座" },
    { type: "aquarius", label: "水瓶座" },
    { type: "pisces", label: "双鱼座" }
]);
const icons = ref({
    "白羊座": "&#xe60e;",
    "金牛座": "&#xe60d;",
    "双子座": "&#xe60c;",
    "巨蟹座": "&#xe608;",
    "狮子座": "&#xe607;",
    "处女座": "&#xe606;",
    "天秤座": "&#xe60b;",
    "天蝎座": "&#xe609;",
    "射手座": "&#xe60a;",
    "摩羯座": "&#xe605;",
    "水瓶座": "&#xe602;",
    "双鱼座": "&#xe604;"
});

const times = ref([
    { type: "today", icon: "", label: "今日运势" },
    { type: "nextday", icon: "", label: "明日运势" },
    { type: "week", icon: "", label: "本周运势" },
    { type: "month", icon: "", label: "本月运势" }
]);
const type = ref('aries')
const time = ref('today')
const data = ref([])


async function getdata() {
    const url = 'https://api.vvhan.com/api/horoscope?type=' + type.value + '&time=' + time.value
    const all = await api.getrequest(url)
    console.log(all)
    data.value = all;
}
</script>
<style lang=scss scoped>
.el-radio {
    margin-right: 20px;
}

.cards {
    .header {
        .icon {
            height: 50px;
            width: 50px;
            line-height: 50px;

            span {
                font-size: 30px;
            }
        }

        .title {
            text-align: center;
            height: 25px;
            line-height: 25px;
        }

        .time {
            height: 25px;
            line-height: 25px;
        }

        .yiji {
            margin-left: 10px;

            .yi {}

            .ji {}
        }
    }

    .content {

        // display: flex;
        .content_2 {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;

            .el-card {
                width: 24%;

            }
        }
    }

}
</style>

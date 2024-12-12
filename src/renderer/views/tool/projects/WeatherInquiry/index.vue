<template>
    <div>
        <el-input v-model="myinput" placeholder="请输入城市" clearable>
            <template #append>
                <el-button v-on:click="ipquery()" :icon="Search" />
            </template>
        </el-input>
        <br>
        <br>
        <el-card v-loading="loading">
            <template #header>
                <div class="card-header">
                    <span>{{ weather.province }} {{ weather.city }}</span>
                </div>
            </template>
            <div class="cards">
                <div class="card">
                    <el-text class="mx-1">天气状况:</el-text>
                    <el-text class="mx-2" type="primary">{{ weather.weather }}</el-text>
                </div>
                <div class="card">
                    <el-text class="mx-1">温度:</el-text>
                    <el-text class="mx-2" type="primary">
                        {{ weather.temperature }}
                        {{ weather.temperature != undefined ? '℃' : '' }}</el-text>
                </div>
            </div>
            <div class="cards">
                <div class="card">
                    <el-text class="mx-1">湿度:</el-text>
                    <el-text class="mx-2" type="primary">
                        {{ weather.humidity }}
                        {{ weather.humidity != undefined ? '%' : '' }}
                    </el-text>
                </div>
                <div class="card">
                    <el-text class="mx-1">风向:</el-text>
                    <el-text class="mx-2" type="primary">{{ weather.wind_direction }}</el-text>
                </div>
            </div>
            <div class="cards">
                <div class="card">
                    <el-text class="mx-1">风力:</el-text>
                    <el-text class="mx-2" type="primary">
                        {{ weather.wind_power }}
                        {{ weather.wind_power != undefined ? '级' : '' }}</el-text>
                </div>
            </div>
        </el-card>
        <br>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const loading = ref(false)
const myinput = ref('')
const mycity = ref('')
const weather = ref({})
onMounted(() => {
    ipquery()
})

async function ipquery() {
    loading.value = true
    mycity.value = ''
    if (myinput.value == '' || myinput.value == undefined || myinput.value == null) {
        let url = 'https://api.vvhan.com/api/ipInfo'
        if (myinput.value == '' || myinput.value == undefined || myinput.value == null) {
            url = 'https://api.vvhan.com/api/ipInfo'
        } else {
            url = 'https://api.vvhan.com/api/ipInfo?ip=' + myinput.value
        }
        const all = await api.getrequest(url)
        console.log(all)
        if (await all.success == true) {
            mycity.value = await all.info.city

        } else {
            mycity.value = '获取失败'
        }
        myinput.value = await all.info.city
    }
    if (myinput.value != '') {
        const url1 = 'https://uapis.cn/api/weather?name=' + myinput.value
        const all1 = await api.getrequest(url1)
        console.log(all1)
        if (all1 != undefined) {
            if (all1.code == 200) {
                weather.value = all1
                loading.value = false
            } else {
                weather.value.province = "获取失败"
                loading.value = false
            }
        } else {
            weather.value = {}
            weather.value.province = "获取失败,请输入正确的城市名称,需要带有(县,省,市)"
            loading.value = false
        }


    }


}
</script>
<style lang="scss" scoped>
.cards {
    display: flex;
    justify-content: space-between;

    .card {
        min-width: 45%;
        margin: 2px;
        border-radius: 5px;
        display: flex;
        border: 1px solid;

        .mx-1 {
            display: block;
            min-width: 100px;
            border-right: 1px solid;
            background-color: #77777722;
        }

        .mx-2 {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
}
</style>

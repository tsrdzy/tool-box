<template>
    <div>
        <el-input v-on:change="ipquery()" v-model="input" placeholder="请输入IP地址 (如不填默认获取本机IP)" clearable>
            <template #append>
                <el-button v-on:click="ipquery()" :icon="Search" />
            </template>
        </el-input>
        <br>
        <br>
        <el-text class="mx-1">国家: </el-text><el-text class="mx-1" type="primary">{{ content.country }}</el-text>
        <br>
        <el-text class="mx-1">省市: </el-text><el-text class="mx-1" type="primary">{{ content.prov }}</el-text>
        <br>
        <el-text class="mx-1">城市: </el-text><el-text class="mx-1" type="primary">{{ content.city }}</el-text>
        <br>
        <el-text class="mx-1">服务运营商: </el-text><el-text class="mx-1" type="primary">{{ content.isp }}</el-text>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
const input = ref('')
const content = ref({
    country: '-',
    prov: '-',
    city: '-',
    isp: '-'
})

async function ipquery() {
    content.value = {}
    let url = 'https://api.vvhan.com/api/ipInfo'
    if (input.value == '' || input.value == undefined || input.value == null) {
        url = 'https://api.vvhan.com/api/ipInfo'
    } else {
        url = 'https://api.vvhan.com/api/ipInfo?ip=' + input.value
    }
    console.log(url)
    const all = await api.getrequest(url)
    console.log(all.success)
    if (await all.success == true) {
        content.value = await all.info
    } else {
        content.value = {
            country: '获取失败',
            prov: '获取失败',
            city: '获取失败',
            isp: '获取失败'
        }
    }
    console.log(content.value)

}
</script>
<style lang=scss scoped></style>

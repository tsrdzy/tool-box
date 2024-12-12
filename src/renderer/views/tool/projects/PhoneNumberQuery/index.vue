<template>
    <div>
        <el-input v-on:change="ipquery()" v-model="input" placeholder="请输入手机号码" clearable>
            <template #append>
                <el-button v-on:click="ipquery()" :icon="Search" />
            </template>
        </el-input>
        <br>
        <br>
        <el-text class="mx-1">运营商: </el-text><el-text class="mx-1" type="primary">{{ content.op }}</el-text>
        <br>
        <el-text class="mx-1">省份: </el-text><el-text class="mx-1" type="primary">{{ content.province }}</el-text>
        <br>
        <el-text class="mx-1">城市: </el-text><el-text class="mx-1" type="primary">{{ content.city }}</el-text>
        <br>
        <el-text class="mx-1">邮政编码: </el-text><el-text class="mx-1" type="primary">{{ content.zipcode }}</el-text>
        <br>
        <el-text class="mx-1">区号: </el-text><el-text class="mx-1" type="primary">{{ content.areacode }}</el-text>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const content = ref({
    op: '-',
    province: '-',
    city: '-',
    zipcode: '-',
    areacode: '-'
})

async function ipquery() {
    content.value = {}
    let url = ''
    if (input.value == '' || input.value == undefined || input.value == null) {
        ElNotification.error({
            title: '错误',
            message: '请先输入手机号号码',
            position: 'bottom-right',
            showClose: false,
            duration: 2000
        })
    } else {
        url = 'https://api.vvhan.com/api/phone/' + input.value
        const all = await api.getrequest(url)
        if (await all.success == true) {
            content.value = await all.info
        } else {
            content.value = {
                op: '获取失败',
                province: '获取失败',
                city: '获取失败',
                zipcode: '获取失败',
                areacode: '获取失败'
            }
        }
        console.log(content.value)
    }


}
</script>
<style lang=scss scoped></style>

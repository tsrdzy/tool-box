<template>
    <div>
        <el-input v-model="input" placeholder="请输入域名(速率限制,10s一次)" clearable>
            <template #append>
                <el-button v-on:click="ipquery()" :icon="Search" />
            </template>
        </el-input>
        <el-radio-group v-model="type">
            <el-radio value="1" size="large">网站</el-radio>
            <el-radio value="6" size="large">APP</el-radio>
        </el-radio-group>
        <br>
        <br>
        <!-- <el-text class="mx-1">共查询到: </el-text><el-text class="mx-1" type="primary">{{ content.op }}</el-text>
        <el-text class="mx-1">条</el-text>
        <br>
        <el-text class="mx-1">省份: </el-text><el-text class="mx-1" type="primary">{{ content.province }}</el-text>
        <br>
        <el-text class="mx-1">城市: </el-text><el-text class="mx-1" type="primary">{{ content.city }}</el-text>
        <br>
        <el-text class="mx-1">邮政编码: </el-text><el-text class="mx-1" type="primary">{{ content.zipcode }}</el-text>
        <br>
        <el-text class="mx-1">区号: </el-text><el-text class="mx-1" type="primary">{{ content.areacode }}</el-text> -->
        <el-text class="mx-1">共找到: {{ content.count }} 条记录</el-text>
        <br>
        <br>
        <el-card :key="ct" v-for="ct in content.list">
            <template #header>域名:{{ ct.domain }}</template>
            <el-text class="mx-1">服务许可证:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.serviceLicence }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">主要许可证:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.mainLicence }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">单位名称:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.unitName }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">性质名称:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.natureName }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">内容类型名称:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.contentTypeName }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">是否限制访问:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.limitAccess }}</el-text>
            <br>
            <br>
            <el-text class="mx-1">更新记录时间:</el-text>
            <el-text class="mx-2" type="primary">{{ ct.updateRecordTime }}</el-text>
            <br>
            <br>
        </el-card>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const type = ref('1')
const content = ref([])

async function ipquery() {
    content.value = {}
    let url = ''
    if (input.value == '' || input.value == undefined || input.value == null) {
        ElNotification.error({
            title: '错误',
            message: '请先输入网站地址',
            position: 'bottom-right',
            showClose: false,
            duration: 2000
        })
    } else {
        if (type.value == 6) {
            url = 'https://api.leafone.cn/api/icp?name=' + input.value + '&type=' + type.value
        } else {
            url = 'https://api.leafone.cn/api/icp?name=' + input.value
        }
        console.log(url)
        const all = await api.getrequest(url)
        console.log(all)
        if (all != undefined) {
            if (await all.code == 200) {
                content.value = await all.data
            } else {
                content.value = {
                    count: 0,
                    list: []
                }
            }
        }

        console.log(content.value)
    }


}
</script>
<style lang=scss scoped></style>

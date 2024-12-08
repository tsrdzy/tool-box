<template>
    <div style="display: flex;justify-content: space-between;">
        <div style="width: 48%;">
            <el-text  size="large" class="mx-1" type="primary">文本</el-text>
            <el-input resize="none" :autosize="{ minRows: 10, }" :show-word-limit="true" v-on:change="jsoninput"
                v-model="inputvalue" style="width: 100%;" type="textarea" placeholder="输入字符串或者拷贝字符串到此处" />
        </div>
        <div style="width: 48%;">
            <el-text  size="large" class="mx-1" type="primary">JSON格式化</el-text>
            <json-viewer theme="vue-json-viewer-dark" style="width: 100%;"
                :copyable="{ copyText: '复制', copiedText: '已复制' }" :value="jsonData" :expand-depth=5 sort></json-viewer>
        </div>

    </div>

</template>
<script setup>
import JsonViewer from 'vue-json-viewer'
import { onMounted, ref, watch } from 'vue'
const inputvalue = ref('')
const jsonData = ref('')
function jsoninput() {
    try {
        jsonData.value = JSON.parse(inputvalue.value)
    } catch (e) {
        jsonData.value = e + ''
    }
}
onMounted(jsoninput)
watch(inputvalue, jsoninput)
</script>
<style lang=scss scoped>
.vue-json-viewer-dark {
    border: 1px solid var(--el-border-color);
    border-radius: 5px;
}
</style>

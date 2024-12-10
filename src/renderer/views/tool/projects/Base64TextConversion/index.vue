<template>
    <el-input :autosize="{ minRows: 1, maxRows: 10 }" v-on:input="base64conversion" v-model="textarea" resize="none"
        type="textarea" placeholder="请输入内容" />

    <el-radio-group v-on:change="base64conversion" v-model="radio">
        <el-radio value="1" size="large">文本 转 base64</el-radio>
        <el-radio value="2" size="large">base64 转 文本</el-radio>
    </el-radio-group>

    <el-input autosize :readonly="true" v-model="textarea1" resize="none" type="textarea" placeholder="待转换内容" />
</template>
<script setup>
import { ref } from 'vue'
const textarea = ref('')
const textarea1 = ref('')
const radio = ref('1')
import { ElNotification } from 'element-plus'
import { Base64 } from 'js-base64';

import { useStore } from 'vuex'
const store = useStore()

function base64conversion() {
    try {
        if (radio.value == 1) {
            console.log(Base64.encode(textarea.value))
            textarea1.value = Base64.encode(textarea.value);
        } else if (radio.value == 2) {
            console.log(Base64.decode(textarea.value))
            textarea1.value = Base64.decode(textarea.value);
        }
    } catch {
        if (store.state.setting.config.audio) {
            const audio = new Audio("../assets/audios/hint.wav")
            audio.play();
        }
        ElNotification.error({
            title: '错误',
            message: '输入的base64编码内容错误，请尝试重新输入',
            position: 'bottom-right',
            showClose: false,
            duration: 2000
        })
    }

}
</script>
<style lang=scss scoped></style>

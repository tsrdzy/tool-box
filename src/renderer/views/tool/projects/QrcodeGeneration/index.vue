<template>

    <el-input v-on:input="generateQrcode" resize="none" v-model="textarea" :autosize="{ minRows: 1, maxRows: 5 }"
        type="textarea" placeholder="请输入待转换的文本或网址">
    </el-input>
    <div class="set">
        <el-input v-on:input="generateQrcode" v-model="size"> <template #prepend>二维码的大小</template></el-input>
        <el-input v-on:input="generateQrcode" v-model="margin"> <template #prepend>二维码的边距</template></el-input>

        <el-input v-model="color1">
            <template #prepend>二维码的颜色</template>
            <template #suffix>
                <input v-on:input="generateQrcode" class="color" v-model="color1" type="color">
            </template>
        </el-input>
        <el-input v-model="color2">
            <template #prepend>二维码的背景</template>
            <template #suffix>
                <input v-on:input="generateQrcode" class="color" v-model="color2" type="color">
            </template>
        </el-input>
    </div>

    <canvas id="qrcodeCanvas" style="margin: 10px auto;"></canvas>
    <div style="width: 100%;">
        <el-button style="display: block;;margin: 5px auto;width: 500px;" v-on:click="ks">下载</el-button>
    </div>


</template>
<script setup>
import { ref } from 'vue'
import QRCode from 'qrcode'
const textarea = ref('')
const size = ref(100)
const margin = ref(2)
const color1 = ref('#000000')
const color2 = ref('#ffffff')
import { ElNotification } from 'element-plus'
import { saveAs } from 'file-saver';

import { useStore } from 'vuex'
const store = useStore()

function generateQrcode() {
    const canvas = document.getElementById('qrcodeCanvas')
    QRCode.toCanvas(canvas, textarea.value, {
        width: size.value,
        margin: margin.value,
        color: {
            dark: color1.value,  // 黑色部分的颜色
            light: color2.value  // 白色部分的颜色
        }
    }, (error) => {
        if (error) console.error(error)
        console.log('QR code generated!')
    })
}
function ks() {
    if (!textarea.value) {
        if (store.state.setting.config.audio) {
            const audio = new Audio("../assets/audios/hint.wav")
            audio.play();
        }
        ElNotification.error({
            title: '错误',
            message: '请先输入待转换的文本',
            position: 'bottom-right',
            showClose: false,
            duration: 2000
        })
        return
    }
    const canvas = document.getElementById('qrcodeCanvas')
    canvas.toBlob(function (blob) {
        console.log(blob);
        saveAs(blob, "ToolBoxTextQrcode.png");
    });
}
</script>
<style lang=scss scoped>
.set {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-input {
        margin: 5px 0;
        width: 45%;
    }

    .el-input__wrapper {
        padding-right: 0;
    }
}

canvas {
    display: block;
    height: 100px;
    width: 100px;
    max-height: 400px;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid;
}


input[type="color"] {
    appearance: none;
    padding: 0;
    margin: 1px;
    margin-right: -9px;
    border-radius: 3px;
    width: 60px;
    border-left: 1px solid #77777777;
    height: 28px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
}

input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
    border: none;
    border-radius: 3px;
}

input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 3px;
}
</style>

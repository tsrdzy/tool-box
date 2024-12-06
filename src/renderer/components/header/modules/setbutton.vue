<template>
    <div class="setbuttons">


        <div class="setbutton iconfont" @click="openset">&#xea8a;</div>
        <div class="setbutton iconfont" @click="minimize">&#xe629;</div>
        <div class="setbutton iconfont" v-if="!ismax" @click="maximize">&#xe651;</div>
        <div class="setbutton iconfont" v-else @click="unmaximize">&#xe614;</div>
        <div class="setbutton iconfont" @click="close">&#xe603;</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const ismax = ref();
//监听最大化状态
window.onload = () => {
    setbutton.getmax((event, str) => {
        ismax.value = str
    })
}
//控制按钮
function minimize() {
    setbutton.minimize()
}
function maximize() {
    setbutton.maximize()
}
function unmaximize() {
    setbutton.unmaximize()
}
function close() {
    setbutton.close()
}
//跳转到设置页面
function openset() {
    router.push('/setting')
}
</script>

<style lang="scss" scoped>
.setbuttons {
    display: flex;

    .setbutton {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 15px 5px;
        text-align: center;
        border-radius: 5px;
        -webkit-app-region: no-drag;
        transition: background-color 0.3s;
        transition: font-size 0;

        &:hover {
            background-color: #77777777;
        }

        &:active {
            font-size: 14px;
        }

    }
}
</style>
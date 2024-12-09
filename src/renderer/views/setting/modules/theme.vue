<template>
    <div class="themes">
        <div class="theme theme1" v-on:click="toggleDark('dark')">A</div>
        <div class="theme theme2" v-on:click="toggleDark('light')">A</div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()

// 切换主题
const toggleDark = (theme) => {
    store.commit('setting/setConfigTheme', theme)
}
</script>
<style lang=scss scoped>
.themes {
    display: flex;

    .theme {
        width: 40px;
        height: 40px;
        border: 1px solid #77777777;
        margin: 5px;
        border-radius: 5px;
        text-align: center;
        line-height: 40PX;
    }

    .theme1 {
        background-color: #121212;
        color: rgb(102.2, 177.4, 255);
    }

    .theme2 {
        background-color: #fff;
        color: rgb(102.2, 177.4, 255);
    }
}
</style>

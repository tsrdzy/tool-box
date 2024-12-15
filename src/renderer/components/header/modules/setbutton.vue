<template>
    <div class="setbuttons">

        <div v-if="store.state.setting.config.showset.audio" class="setbutton iconfont">&#xea6e;</div>
        <el-dropdown @command="clickfont" v-if="store.state.setting.config.showset.font" max-height="400px">
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :command="font" :key="font" v-for="font in fonts">
                        <span :style="'font-family: ' + font + ';'">{{ font }}</span></el-dropdown-item>
                </el-dropdown-menu>
            </template>
            <div class="setbutton iconfont">&#xea49;</div>
        </el-dropdown>
        <el-dropdown @command="clicktheme" v-if="store.state.setting.config.showset.theme" max-height="400px">
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :command="theme" :key="theme" v-for="theme in themes">{{ theme
                        }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            <div class="setbutton iconfont">&#xea73;</div>
        </el-dropdown>
        <el-dropdown @command="clicklanguage" v-if="store.state.setting.config.showset.language" max-height="400px">
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :command="language.value" :key="language" v-for="language in languages">{{
                        language.label
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            <div class="setbutton iconfont">&#xea8d;</div>
        </el-dropdown>
        <div class="setbutton iconfont" @click="openset">&#xea8a;</div>
        <div class="setbutton iconfont" @click="minimize">&#xe629;</div>
        <div class="setbutton iconfont" v-if="!ismax" @click="maximize">&#xe651;</div>
        <div class="setbutton iconfont" v-else @click="unmaximize">&#xe614;</div>
        <div class="setbutton iconfont" @click="close">&#xe603;</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const ismax = ref();
import { useStore } from 'vuex'
const store = useStore()

const fonts = ref([])
const languages = ref([])
const themes = ref([])
onMounted(() => {
    fonts.value = store.state.setting.configs.fonts
    languages.value = store.state.setting.configs.languages
    themes.value = store.state.setting.configs.themes
})

function clickfont(command) {
    store.commit('setting/setConfigFont', command)
}
function clicktheme(command) {
    store.commit('setting/setConfigTheme', command)
}
function clicklanguage(command) {
    store.commit('setting/setConfigLanguage', command)
}



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
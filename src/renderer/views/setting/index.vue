<template>
    <div class="setting">
        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>语言</span>
                    <el-switch v-on:change="showset" v-model="langguageshow" class="ml-2" inline-prompt
                        active-text="快捷按钮" inactive-text="快捷按钮" />
                </div>
            </template>
            <Tlanguage></Tlanguage>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>字体</span>
                    <el-switch v-on:change="showset" v-model="fontshow" class="ml-2" inline-prompt active-text="快捷按钮"
                        inactive-text="快捷按钮" />
                </div>
            </template>
            <Tfont></Tfont>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>主题</span>
                    <el-switch v-on:change="showset" v-model="themeshow" class="ml-2" inline-prompt active-text="快捷按钮"
                        inactive-text="快捷按钮" />
                </div>
            </template>
            <Ttheme></Ttheme>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>音效</span>
                    <el-switch v-on:change="showset" v-model="audioshow" class="ml-2" inline-prompt active-text="快捷按钮"
                        inactive-text="快捷按钮" />
                </div>
            </template>
            <Taudio></Taudio>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>背景</span>
                    <el-switch v-on:change="showset" v-model="bgshow" class="ml-2" inline-prompt active-text="快捷按钮"
                        inactive-text="快捷按钮" />
                </div>
            </template>
            <Tbackground></Tbackground>
        </el-card>
        <br>
    </div>
</template>
<script setup>
// import { ref } from "vue";
import Tlanguage from "@/views/setting/modules/language.vue"
import Tfont from "@/views/setting/modules/font.vue"
import Ttheme from "@/views/setting/modules/theme.vue"
import Taudio from "@/views/setting/modules/audio.vue";
import Tbackground from "@/views/setting/modules/background.vue";

import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const langguageshow = ref(false);
const fontshow = ref(false);
const themeshow = ref(false);
const audioshow = ref(false);
const bgshow = ref(false);
function showset() {
    store.commit("setting/setConfigShowset",
        {
            language: langguageshow.value,
            font: fontshow.value,
            theme: themeshow.value,
            audio: audioshow.value,
            background: bgshow.value
        }
    );
}
onMounted(() => {
    langguageshow.value = store.state.setting.config.showset.language
    fontshow.value = store.state.setting.config.showset.font
    themeshow.value = store.state.setting.config.showset.theme
    audioshow.value = store.state.setting.config.showset.audio
    bgshow.value = store.state.setting.config.showset.background
});
</script>
<style lang=scss scoped>
.setting {
    .el-card {
        margin: 20px;

        .card-header {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

<template>
    <div class="setting">
        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>语言</span>
                </div>
            </template>
            <Tlanguage></Tlanguage>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>字体</span>
                </div>
            </template>
            <Tfont></Tfont>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>主题</span>
                </div>
            </template>
            <Ttheme></Ttheme>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>音效</span>
                </div>
            </template>
            <Taudio></Taudio>
        </el-card>

        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>背景</span>
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
</script>
<style lang=scss scoped>
.setting {
    .el-card {
        margin: 20px;
    }
}
</style>

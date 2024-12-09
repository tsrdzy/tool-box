<template>
    <div>
        <el-switch size="large" v-on:change="isaudio" v-model="audio" inline-prompt active-text="开启"
            inactive-text="关闭" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const audio = ref(store.state.setting.config.audio)
// 切换主题
const isaudio = () => {
    store.commit('setting/setConfigAudio', audio.value)
}
</script>

<style></style>
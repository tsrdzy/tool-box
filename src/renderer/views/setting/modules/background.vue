<template>
    <div>
        <el-switch size="large" v-on:change="isbackground" v-model="background" inline-prompt active-text="开启"
            inactive-text="关闭" />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const background = ref(store.state.setting.config.showbg)
// 切换主题
const isbackground = () => {
    store.commit('setting/setConfigShowBg', background.value)
}
</script>
<style lang=scss scoped></style>

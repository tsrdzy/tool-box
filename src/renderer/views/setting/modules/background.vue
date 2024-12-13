<template>
    <div>
        <el-switch size="large" v-on:change="isbackground" v-model="background" inline-prompt active-text="开启"
            inactive-text="关闭" />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const background = ref(false)
// 切换主题
onMounted(() => {
    background.value = store.state.setting.config.showbg
})
const isbackground = () => {
    console.log(background.value)
    store.commit('setting/setConfigShowBg', background.value)
}
</script>
<style lang=scss scoped></style>

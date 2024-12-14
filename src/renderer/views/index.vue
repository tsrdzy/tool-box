<template>
    <div id="bg" style="background-image:linear-gradient(to top, rgba(128, 128, 128, 0), var(--el-bg-color)),url()"
        class="bg" v-if="store.state.setting.config.showbg"></div>
    <Theader></Theader>
    <TBreadcrumb></TBreadcrumb>
    <el-backtop target=".el-scrollbar__wrap" :visibility-height="50" :right="30" :bottom="30" />
    <el-scrollbar class="main">
        <router-view />
    </el-scrollbar>
</template>

<script setup>
import Theader from '@/components/header/index.vue'
import TBreadcrumb from '@/components/breadcrumb/index.vue'
import { onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => {
    randombg(store.state.setting.config.showbg)

})
async function randombg(data) {
    if (data == true) {
        console.log(1)
        const url = 'https://api.vvhan.com/api/wallpaper/acg?type=json'
        const bg = await api.getrequest(url)
        const bghtml = document.getElementById('bg')
        bghtml.style.backgroundImage = `linear-gradient(to top, rgba(128, 128, 128, 0), var(--el-bg-color)),url(${bg.url})`
    }



}
const isbg = computed(() => { return store.state.setting.config.showbg })
watch(isbg, (val) => {
    randombg(val)
})


</script>

<style lang="scss" scoped>
.bg {
    display: block;
    position: fixed;
    width: calc(100%);
    height: calc(100%);
    object-fit: cover;
    z-index: -100;
    background-size: cover;
    background-position: center;
    // background-image:
    //     linear-gradient(to top, rgba(128, 128, 128, 0), var(--el-bg-color)),
    //     url('@/assets/images/home/bg2.jpg');
}

.main {
    height: calc(100% - 90px);
    // .el-scrollbar__view{
    //     height: 100%;
    // }
}
</style>
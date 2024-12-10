<template>
    <div class="bg" v-if="store.state.setting.config.showbg"></div>
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
import { useStore } from 'vuex'
const store = useStore()

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

    background-image:
        linear-gradient(to top, rgba(128, 128, 128, 0), var(--el-bg-color)),
        url('@/assets/images/home/bg2.jpg');
}

.main {
    height: calc(100% - 90px);
    // .el-scrollbar__view{
    //     height: 100%;
    // }
}
</style>
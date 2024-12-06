<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/" style="cursor: pointer;  display:inline-block; ">
            <el-breadcrumb-item to="/home">{{ $t("toolbox.title") }}</el-breadcrumb-item>
            <el-breadcrumb-item :to="item.path" v-for="item in breadList" :key="item.id">
                {{ $t(item.meta.title) }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>


</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const breadList = ref()
const getCurrentPath = () => {
    breadList.value = route.matched.filter(item => item.meta && item.meta.title);
}
onMounted(() => {
    getCurrentPath();
})
watch(route, (to, from) => {
    breadList.value = to.matched.filter(item => item.meta && item.meta.title);
}, { immediate: true });
</script>

<style lang="scss" scoped>
.breadcrumb {
    // position: absolute;
    z-index: 100;
    height: 30px;
    width: calc(100% - 40px);
    padding: 0 20px;
    // box-shadow: 1px 1px 1px #77777777;
    line-height: 30px;
    background-color: #77777700;
    opacity: 0.8;
    transition: all 0.1s;
    backdrop-filter: blur(10px);

    &:hover {
        opacity: 1;
        background-color: #77777700;
    }
}
</style>
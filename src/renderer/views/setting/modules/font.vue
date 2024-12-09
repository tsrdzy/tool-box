<template>
    <div class="language">
        <el-select v-on:change="handleCommand" v-model="font" size="large">
            <el-option :style="'font-family: ' + item + ';'" v-for="item in fonts" :key="item" :label="item"
                :value="item" />
        </el-select>
    </div>
</template>
<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const font = ref('')
const fonts = ref([])

onMounted(() => {
    fonts.value = store.state.setting.configs.fonts
    font.value = store.state.setting.config.font
});
function handleCommand() {
    store.commit('setting/setConfigFont', font.value)
}

font.value = computed(() => store.state.setting.config.font)
watch(font.value, (newValue, oldValue) => {
    font.value = newValue
})

const com_fonts = computed(() => store.state.setting.configs.fonts)
watch(com_fonts, (newValue, oldValue) => {
    // console.log(newValue)
    fonts.value = newValue
})
</script>
<style lang=scss scoped></style>

<template>
    <div class="language">
        <el-select v-on:change="handleCommand" v-model="language" size="large">
            <el-option v-for="item in languages" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>
<script setup>
import { onMounted, ref,watch,computed } from "vue";
import { useI18n } from 'vue-i18n';
import { useStore } from "vuex";
const store = useStore();
const i18n = useI18n();
const language = ref('')
const languages = ref([])

onMounted(() => {
    language.value = store.state.setting.config.language
    languages.value = store.state.setting.configs.languages
});
function handleCommand() {
    store.commit('setting/setConfigLanguage', language.value)
    // i18n.locale.value = language.value
    // console.log(language.value)
}

const com_i18n = computed(() => i18n.locale.value)// 计算属性获取i18n的值
watch(com_i18n, (newValue, oldValue) => {
    language.value = newValue
})
</script>
<style lang=scss scoped></style>

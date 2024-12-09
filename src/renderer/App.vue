<template>
  <!-- <el-button @click="ass1">1</el-button> -->
  <router-view />
</template>
<script setup>
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue';
const store = useStore();
const i18n = useI18n();
onMounted(() => {
  getLanguage()
  getFont()
  theme()
  getConfig()
});
// function ass1() {
//   console.log(store.state.setting.config)
// }
//获取语言
function getLanguage() {
  const languages = []
  for (let key in i18n.messages.value) {
    languages.push({ value: key, label: i18n.messages.value[key].language })
  }
  store.commit('setting/setConfigsLanguages', languages)
}
//获取系统字体列表
async function getFont() {
  const fontlist = await api.getsystemfont()
  fontlist.push('opposans')//添加默认字体
  store.commit('setting/setConfigsFonts', fontlist)
}
//主题列表
function theme() {
  const themes = ['dark', 'light']
  store.commit('setting/setConfigsThemes', themes)
}
//获取配置文件
async function getConfig() {
  const config = await api.getconfig()
  if (
    config.font == undefined ||
    config.theme == undefined ||
    config.language == undefined || 
    config.audio == undefined) {
    const nowconfig = { font: 'opposans', theme: 'dark', language: 'zhCn',audio:true }
    api.setconfig(nowconfig)
    store.commit('setting/setConfig', nowconfig)
  } else {
    store.commit('setting/setConfig', config)
  }
}
</script>
<style lang=scss scoped></style>

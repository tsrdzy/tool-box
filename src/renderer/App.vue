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
  const font = await api.getconfig('font')
  if (!font) {

    api.setconfig('font', 'opposans')
    store.commit('setting/setConfigFont', 'opposans')
  } else {
    store.commit('setting/setConfigFont', font)
  }

  const theme = await api.getconfig('theme')
  if (!theme) {
    api.setconfig('theme', 'dark')
    store.commit('setting/setConfigTheme', 'dark')
  } else {
    store.commit('setting/setConfigTheme', theme)
  }

  const audio = await api.getconfig('audio')
  if (audio == undefined) {
    api.setconfig('audio', true)
    store.commit('setting/setConfigAudio', true)
  }

  const showbg = await api.getconfig('showbg')
  if (showbg == undefined) {
    api.setconfig('showbg', true)
    store.commit('setting/setConfigShowBg', false)
  } else {
    store.commit('setting/setConfigShowBg', showbg)
  }

  const bg = await api.getconfig('bg')
  if (bg == undefined) {
    api.setconfig('bg', '')
    store.commit('setting/setConfigBg', '')
  } else {
    store.commit('setting/setConfigBg', bg)
  }

  const language = await api.getconfig('language')
  if (language == undefined) {
    api.setconfig('language', 'zhCn')
    store.commit('setting/setConfigLanguage', 'zhCn')
  } else {
    store.commit('setting/setConfigLanguage', language)
  }

  const collect = await api.getconfig('collect')
  if (collect == undefined) {
    api.setconfig('collect', [])
    store.commit('setting/setConfigCollect', [])
  } else {
    store.commit('setting/setConfigCollect', collect)
  }
}
</script>
<style lang=scss scoped></style>

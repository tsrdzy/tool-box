import i18n from '@/locals/index.js';
const html = document.querySelector('html')
const _i18n = i18n.global
const state = {
    config: {
        font: "",
        language: "",
        theme: "",
        audio: true,
        showbg: false,
        bg: "",
        collect: []
    },
    configs: {
        fonts: [],
        languages: [],
        themes: [],
    }
}
const mutations = {
    // setConfig(state, config) {
    //     state.config = config
    //     const a = Object.assign({}, state.config);
    //     _i18n.locale.value = config.language;
    //     html.style.fontFamily = config.font
    //     html.classList = [];
    //     html.classList.add(config.theme);
    // },
    setConfigsFonts(state, fonts) {
        if (fonts.length == 0) return
        state.configs.fonts = fonts
    },
    setConfigsLanguages(state, languages) {
        if (languages.length == 0) return
        state.configs.languages = languages
    },
    setConfigsThemes(state, themes) {
        state.configs.themes = themes

    },
    setConfigFont(state, font) {
        state.config.font = font
        html.style.fontFamily = font
        api.setconfig("font", font)
    },
    setConfigLanguage(state, language) {
        state.config.language = language
        _i18n.locale.value = language
        api.setconfig("language", language)
    },
    setConfigTheme(state, theme) {
        state.config.theme = theme
        html.classList = [];
        html.classList.add(theme);
        api.setconfig("theme", theme)
    },
    setConfigAudio(state, audio) {
        state.config.audio = audio
        api.setconfig("audio", audio)
    },
    setConfigShowBg(state, showbg) {
        state.config.showbg = showbg
        api.setconfig("showbg", showbg)
    },
    setConfigBg(state, bg) {
        state.config.bg = bg
        api.setconfig("bg", bg)
    },
    setConfigCollect(state, collect) {
        state.config.collect = collect
        api.setconfig("collect", collect)
    }


}
const getters = {

}
const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}

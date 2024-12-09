import i18n from '@/locals/index.js';
const html = document.querySelector('html')
const _i18n = i18n.global
const state = {
    config: {
        font: "",
        language: "",
        theme: "",
        audio: true
    },
    configs: {
        fonts: [],
        languages: [],
        themes: [],
    }
}
const mutations = {
    setConfig(state, config) {
        state.config = config
        const a = Object.assign({}, state.config);
        _i18n.locale.value = config.language;
        html.style.fontFamily = config.font
        html.classList = [];
        html.classList.add(config.theme);
        console.log(5)
        api.setconfig(a);
    },
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
        const a = Object.assign({}, state.config);
        api.setconfig(a);
    },
    setConfigLanguage(state, language) {
        state.config.language = language
        _i18n.locale.value = language
        const a = Object.assign({}, state.config);
        api.setconfig(a);
    },
    setConfigTheme(state, theme) {
        state.config.theme = theme
        html.classList = [];
        html.classList.add(theme);
        const a = Object.assign({}, state.config);
        api.setconfig(a);
    },
    setConfigAudio(state, audio) {
        state.config.audio = audio
        const a = Object.assign({}, state.config);
        api.setconfig(a);
    },
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

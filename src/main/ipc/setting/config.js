const Store = require('electron-store');
import { ipcMain } from 'electron'
// 初始化一个新的 store 实例，你可以指定设置
const settings = new Store({
    name: 'config', // 可选：自定义存储文件名，默认为 'store'
});

function getconfig() {
    ipcMain.handle('getconfig', async () => {
        try {
            const theme = settings.get('theme')
            const font = settings.get('font')
            const language = settings.get('language')
            const audio = settings.get('audio')
            const config = { 'theme': theme, 'font': font, 'language': language, 'audio': audio }
            return config;
        } catch (err) {
            console.log(err);
        }
    })
}

function setconfig() {
    ipcMain.on('setconfig', (event, data) => {
        try {
            settings.set('theme', data.theme);
            settings.set('font', data.font);
            settings.set('language', data.language);
            settings.set('audio', data.audio)
        } catch (err) {
            console.log(err);
        }
    });
}


export { getconfig, setconfig };
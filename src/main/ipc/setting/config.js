const Store = require('electron-store');
import { ipcMain } from 'electron'
// 初始化一个新的 store 实例，你可以指定设置
const settings = new Store({
    name: 'config', // 可选：自定义存储文件名，默认为 'store'
});

function config() {
    ipcMain.on('setconfig', (event, key, data) => {
        try {
            settings.set(key, data);
        } catch (err) {
            console.log(err);
        }
    });
    ipcMain.handle('getconfig', async (event, key) => {
        try {
            return settings.get(key);
        } catch (err) {
            console.log(err);
        }
    })
}

export default config;
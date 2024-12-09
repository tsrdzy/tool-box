import { ipcMain } from 'electron'
const fontList = require('font-list')

//获取系统字体列表
function getsystemfont() {
    ipcMain.handle('getsystemfont', async () => {
        try {
            const fonts = await fontList.getFonts();
            return fonts;
        } catch (err) {
            console.log(err);
            // throw err;
        }
    })
}

export default getsystemfont;

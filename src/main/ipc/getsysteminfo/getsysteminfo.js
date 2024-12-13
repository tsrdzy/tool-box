import { ipcMain } from 'electron'
const si = require('systeminformation');
function getallsysteminfo() {
    ipcMain.handle('getallsysteminfo', async (event) => {
        console.log('getsysteminfo')
        // await si.getStaticData().then(data => {
        //     console.log(data);
        //     return data;
        // })
        try {
            // 使用 await 正确地等待异步操作完成，并获取返回结果
            const data = await si.getStaticData();
            console.log(data);
            return data;
        } catch (error) {
            console.log('error', error);
            // 如果出现错误，可以考虑返回一个错误提示信息给渲染进程，这里返回 null
            return null;
        }
    })
}
function getsysteminfo() {
    getallsysteminfo()
}
export default getsysteminfo;
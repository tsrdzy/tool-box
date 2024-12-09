import getsystemfont from "./ipc/setting/getsystemfont";
import { getconfig, setconfig } from "./ipc/setting/config.js";
function ipcs() {
    getsystemfont()// 获取本机字体列表 
    getconfig()// 获取配置文件
    setconfig()// 设置配置文件
}

export default ipcs

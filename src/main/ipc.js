import getsystemfont from "./ipc/setting/getsystemfont";
import config from "./ipc/setting/config.js";
function ipcs() {
    getsystemfont()// 获取本机字体列表 
    config()// 获取配置文件
}

export default ipcs

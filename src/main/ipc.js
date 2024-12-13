import getsystemfont from "./ipc/setting/getsystemfont";
import config from "./ipc/setting/config.js";
import getrequest from "./ipc/request/getrequest.js";
import getsysteminfo from "./ipc/getsysteminfo/getsysteminfo.js";
function ipcs() {
    getsystemfont()// 获取本机字体列表 
    config()// 获取配置文件
    getrequest()// GET请求
    getsysteminfo()// 获取系统信息
}

export default ipcs

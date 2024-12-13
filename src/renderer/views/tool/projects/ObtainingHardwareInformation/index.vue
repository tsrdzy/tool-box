<template>
    <div style="min-height: 200px;" v-loading="loading" element-loading-text="正在读取中,请稍后...">
        <el-button @click="getsysteminfoclick" style="width: 100%;">点击获取系统信息</el-button>
        <div class="all">
            <el-card class="cards_main" :key="sif" v-for="sif, sifkey in systeminfo">
                <template #header>{{ keyToChineseMapName[sifkey] }}</template>
                <div class="cards">
                    <div class="card" v-if="!(Array.isArray(sif)) && typeof sif === 'object'">
                        <div style="width: 45%" :key="sifinfo" v-for="sifinfo, sifinfokey in sif">
                            <div v-if="String(sifinfo)[0] != '['">
                                <el-input class="elinput" :readonly="true" :value="(sifinfo == '') ? '-' : sifinfo"
                                    style="max-width: 600px" placeholder="null">
                                    <template #prepend>
                                        <span style="width: 120px;">{{ keyToChineseMap[sifkey][sifinfokey] }}</span>
                                    </template>
                                </el-input>
                            </div>
                            <div v-else>
                                <el-card :key="sifinfo2" v-for="sifinfo2, sifinfo2key in sifinfo">
                                    <div v-if="String(sifinfo2)[0] == '{'">
                                        <el-input class="elinput" :readonly="true"
                                            :value="(sifinfo2X == '') ? '-' : sifinfo2X" :key="sifinfo2X"
                                            v-for="sifinfo2X, sifinfo2Xkey in sifinfo2">
                                            <template #prepend>
                                                <span style="width: 120px;">{{ keyToChineseMap[sifkey][sifinfo2Xkey]
                                                    }}</span>
                                            </template>
                                        </el-input>
                                    </div>
                                    <div v-if="String(sifinfo2)[0] == '['">
                                        <el-input class="elinput" :readonly="true"
                                            :value="(sifinfo2X == '') ? '-' : sifinfo2X" :key="sifinfo2X"
                                            v-for="sifinfo2X, sifinfo2Xkey in sifinfo2">
                                            <template #prepend>
                                                <span style="width: 120px;">{{ keyToChineseMap[sifkey][sifinfo2Xkey]
                                                    }}</span>
                                            </template>
                                            {{ sifinfo2X }}
                                        </el-input>
                                    </div>
                                    <div v-else>
                                        <el-input class="elinput" :readonly="true"
                                            :value="sifinfo2 == '' ? '-' : sifinfo2">
                                            <template #prepend>
                                                <span style="width: 120px;">{{ keyToChineseMap[sifkey][sifinfo2key]
                                                    }}</span>
                                            </template>
                                        </el-input>
                                    </div>
                                </el-card>
                            </div>

                        </div>
                    </div>
                    <div class="card" v-if="!(Array.isArray(sif)) && !(typeof sif === 'object')">
                        <div style="width: 45%">
                            <el-input class="elinput" :readonly="true" :value="(sif == '') ? '-' : sif"
                                placeholder="null">
                                <template #prepend>
                                    <span style="width: 120px;">{{ keyToChineseMap[sifkey] }}</span>
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <div class="card" v-if="Array.isArray(sif) && String(sif)[0] == '['">
                        <div style="width: 45%" :key="sifinfo" v-for="sifinfo in sif">
                            <el-card>
                                <el-input class="elinput" :readonly="true" :value="(sifinfo1 == '') ? '-' : sifinfo1"
                                    v-for="sifinfo1, sifinfo1key in sifinfo" :key="sifinfo1key"
                                    placeholder="null">
                                    <template #prepend>
                                        <span style="width: 120px;">{{ keyToChineseMap[sifkey][0][sifinfo1key] }}</span>
                                    </template>
                                </el-input>
                            </el-card>
                        </div>
                    </div>
                </div>

            </el-card>
        </div>
    </div>

</template>
<script setup>
import { ref } from "vue"

const systeminfo = ref([])
const loading = ref(false)
const keyToChineseMapName = ref({
    "version": "版本",
    "system": "系统信息",
    "bios": "BIOS信息",
    "baseboard": "主板信息",
    "chassis": "机箱信息",
    "os": "操作系统信息",
    "uuid": "通用唯一识别码",
    "cpu": "CPU信息",
    "versions": "软件版本信息",
    "graphics": "显卡信息",
    "displays": "显示器信息",
    "net": "网络接口信息",
    "memLayout": "内存信息",
    "diskLayout": "磁盘布局"


})
const keyToChineseMap = ref({
    "version": "版本",
    "system": {
        "manufacturer": "制造商",
        "model": "型号",
        "version": "版本号",
        "serial": "序列号",
        "uuid": "通用唯一识别码",
        "sku": "库存保有单位",
        "virtual": "是否为虚拟"
    },
    "bios": {
        "vendor": "供应商",
        "version": "版本",
        "releaseDate": "发布日期",
        "revision": "修订版本",
        "serial": "序列号"
    },
    "baseboard": {
        "manufacturer": "制造商",
        "model": "型号",
        "version": "版本号",
        "serial": "序列号",
        "assetTag": "资产标签",
        "memMax": "最大内存",
        "memSlots": "内存插槽数量"
    },
    "chassis": {
        "manufacturer": "制造商",
        "model": "型号",
        "type": "类型",
        "version": "版本号",
        "serial": "序列号",
        "assetTag": "资产标签",
        "sku": "库存保有单位"
    },
    "os": {
        "platform": "平台",
        "distro": "发行版本",
        "release": "发布版本",
        "codename": "代号",
        "kernel": "内核",
        "arch": "架构",
        "hostname": "主机名",
        "fqdn": "完全限定域名",
        "codepage": "代码页",
        "logofile": "徽标文件",
        "serial": "序列号",
        "build": "构建版本",
        "servicepack": "服务包",
        "uefi": "是否支持UEFI",
        "hypervisor": "是否有管理程序",
        "remoteSession": "是否为远程会话"
    },
    "uuid": {
        "os": "通用唯一识别码",
        "hardware": "硬件通用唯一识别码",
        "macs": "MAC地址列表"
    },
    "versions": {
        "kernel": "内核版本",
        "openssl": "OpenSSL版本",
        "systemOpenssl": "系统OpenSSL",
        "systemOpensslLib": "系统OpenSSL库",
        "node": "Node.js版本",
        "v8": "V8版本",
        "npm": "NPM版本",
        "yarn": "Yarn版本",
        "pm2": "PM2版本",
        "gulp": "Gulp版本",
        "grunt": "Grunt版本",
        "git": "Git版本",
        "tsc": "TypeScript编译器版本",
        "mysql": "MySQL版本",
        "redis": "Redis版本",
        "mongodb": "MongoDB版本",
        "apache": "Apache版本",
        "nginx": "Nginx版本",
        "php": "PHP版本",
        "docker": "Docker版本",
        "postfix": "Postfix版本",
        "postgresql": "PostgreSQL版本",
        "perl": "Perl版本",
        "python": "Python版本",
        "python3": "Python 3版本",
        "pip": "pip版本",
        "pip3": "pip3版本",
        "java": "Java版本",
        "gcc": "GCC版本",
        "virtualbox": "VirtualBox版本",
        "bash": "Bash版本",
        "zsh": "Zsh版本",
        "fish": "Fish版本",
        "powershell": "PowerShell版本",
        "dotnet": ".NET版本"
    },
    "cpu": {
        "manufacturer": "制造商",
        "brand": "品牌",
        "vendor": "供应商",
        "family": "系列",
        "model": "型号",
        "stepping": "步进",
        "revision": "修订版本",
        "voltage": "电压",
        "speed": "主频",
        "speedMin": "最小频率",
        "speedMax": "最大频率",
        "governor": "调速器",
        "cores": "核心数",
        "physicalCores": "物理核心数",
        "performanceCores": "性能核心数",
        "efficiencyCores": "能效核心数",
        "processors": "处理器数量",
        "socket": "插槽类型",
        "flags": "特性标志",
        "virtualization": "是否支持虚拟化",
        "l1d": "一级数据缓存",
        "l1i": "一级指令缓存",
        "l2": "二级缓存",
        "l3": "三级缓存"
    },
    "graphics": {

        "vendor": "供应商",
        "model": "型号",
        "bus": "总线类型",
        "vram": "显存容量",
        "vramDynamic": "显存是否动态",
        "subDeviceId": "子设备ID",
        "driverVersion": "驱动版本",
        "name": "名称",
        "pciBus": "PCI总线",
        "memoryTotal": "总内存",
        "memoryUsed": "已用内存",
        "memoryFree": "可用内存",
        "utilizationGpu": "GPU利用率",
        "utilizationMemory": "内存利用率",
        "temperatureGpu": "GPU温度",
        "powerLimit": "功率限制",
        "clockCore": "核心时钟频率",
        "clockMemory": "内存时钟频率",
        "deviceName": "设备名称",
        "main": "是否为主显示器",
        "builtin": "是否内置",
        "connection": "连接方式",
        "resolutionX": "水平分辨率",
        "resolutionY": "垂直分辨率",
        "sizeX": "尺寸（水平）",
        "sizeY": "尺寸（垂直）",
        "pixelDepth": "像素深度",
        "currentResX": "当前水平分辨率",
        "currentResY": "当前垂直分辨率",
        "positionX": "位置（水平）",
        "positionY": "位置（垂直）",
        "currentRefreshRate": "当前刷新率"
    },
    "net": [
        {
            "iface": "接口",
            "ifaceName": "接口名称",
            "default": "是否为默认",
            "ip4": "IPv4地址",
            "ip4subnet": "IPv4子网掩码",
            "ip6": "IPv6地址",
            "ip6subnet": "IPv6子网掩码",
            "mac": "MAC地址",
            "internal": "是否为内部",
            "virtual": "是否为虚拟",
            "operstate": "运行状态",
            "type": "类型",
            "duplex": "双工模式",
            "mtu": "最大传输单元",
            "speed": "速度",
            "dhcp": "是否启用DHCP",
            "dnsSuffix": "DNS后缀",
            "ieee8021xAuth": "IEEE 802.1X认证",
            "ieee8021xState": "IEEE 802.1X状态",
            "carrierChanges": "载波变化次数"
        }
    ],
    "memLayout": [
        {
            "size": "容量",
            "bank": "内存组",
            "type": "类型",
            "ecc": "是否支持纠错码",
            "clockSpeed": "时钟频率",
            "formFactor": "外形规格",
            "manufacturer": "制造商",
            "partNum": "部件编号",
            "serialNum": "序列号",
            "voltageConfigured": "配置电压",
            "voltageMin": "最小电压",
            "voltageMax": "最大电压"
        }
    ],
    "diskLayout": [
        {
            "device": "设备",
            "type": "类型",
            "name": "名称",
            "vendor": "供应商",
            "size": "容量",
            "bytesPerSector": "每扇区字节数",
            "totalCylinders": "总柱面数",
            "totalHeads": "总磁头数",
            "totalSectors": "总扇区数",
            "totalTracks": "总磁道数",
            "tracksPerCylinder": "每柱面磁道数",
            "sectorsPerTrack": "每磁道扇区数",
            "firmwareRevision": "固件版本",
            "serialNum": "序列号",
            "interfaceType": "接口类型",
            "smartStatus": "智能状态",
            "temperature": "温度"
        }
    ]
});
async function getsysteminfoclick() {
    loading.value = true;
    systeminfo.value = []
    systeminfo.value = await getsysteminfo.getallsysteminfo();
    console.log(systeminfo.value)
    loading.value = false
}

</script>
<style lang="scss" scoped>
.elinput {
    --el-input-text-color: var(--el-color-primary);
}

.all {
    --el-input-text-color: #000 !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cards_main {
        width: 100%;
        margin: 10px;

        .cards {


            .card {

                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .mx-1 {
                    width: 150px;
                    min-width: 150px;
                    max-width: 150px;
                }
            }
        }
    }
}
</style>

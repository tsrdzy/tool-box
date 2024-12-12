<template>
    <div class="tool">
        <el-backtop target=".content_main" :visibility-height="50" :right="30" :bottom="30" />
        <el-scrollbar wrap-class="content_main" class="content">
            <div v-show="route.meta.tier == 2" style="width: 100%;">
                <div class="search">
                    <el-input size="large" placeholder="请输入工具名或关键字" :suffix-icon="Search" />
                </div>
                <div class="cards">
                    <el-card v-on:click="openurl(item)" :key="item.title" v-for="item in typelists">
                        <div class="card">
                            <div class="card_logo iconfont" v-html="item.logo"></div>
                            <div>
                                <div class="card_header">{{ item.title }}</div>
                                <div class="card_tag">
                                    <!-- <el-tag size="small" type="primary">{{ 1 }}</el-tag> -->
                                    <el-tag size="small" type="primary" :key="tag" v-for="tag in item.tag">{{
                                        tag
                                    }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-show="route.meta.tier == 3" style="width: 100%;">
                <el-card class="detailedclosure">
                    <div class="top">
                        <div class="logo iconfont" v-html="nowlist.logo"></div>
                        <div class="content">
                            <div class="title">{{ nowlist.title }}</div>
                            <div class="tag">
                                <el-tag :key="tag" v-for="tag in nowlist.tag" type="success">{{ tag }}</el-tag>
                            </div>
                            <div class="intro">{{ nowlist.intro }}</div>
                        </div>
                    </div>

                    <div class="footer">
                        <div class="collect" v-if="!iscollect(nowlist)" v-on:click="collect(nowlist, true)"><span
                                class="iconfont">&#xea51;</span>加入收藏
                        </div>
                        <div class="collect" style="color: var(--el-color-primary);" v-else
                            v-on:click="collect(nowlist, false)">
                            <span class="iconfont">&#xea40;</span>取消收藏
                        </div>
                        <div class="times">
                            发布日期:
                            <span class="time">{{ nowlist.time }}</span>
                        </div>
                    </div>
                </el-card>
                <el-card style="margin: 20px;">
                    <template #header>
                        <div class="card-header">
                            工具
                        </div>
                    </template>
                    <router-view></router-view>
                </el-card>
            </div>
        </el-scrollbar>


    </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { ElNotification } from 'element-plus'
const store = useStore()
const route = useRoute();
const router = useRouter()
let nowtypelist = ref('all');
let nowlist = ref([])

//获取检测主页跳转过来后的标题栏内容
const com_tool = computed(() => store.state.tool.nowtool)
watch(com_tool, (newValue, oldValue) => {
    nowlist.value = newValue
    openurl(newValue)
})
onMounted(() => {
    nowlist.value = store.state.tool.nowtool
})

function now_typelist(data) {
    router.push('/tool')
    nowtypelist.value = data
}
function openurl(data) {
    nowlist.value = data
    router.push('/tool/' + data.url)
}
function iscollect(data) {
    const collects = store.state.setting.config.collect
    let obj = collects.find(item => item.url == data.url);
    return obj

}
function collect(data, bool) {
    const obj = iscollect(data)
    const collects = store.state.setting.config.collect
    if (bool) {
        if (obj == undefined && data != undefined && data.url != "") {
            collects.push(data)
            store.commit('setting/setConfigCollect', JSON.parse(JSON.stringify(collects)))
            if (store.state.setting.config.audio) {
                const audio = new Audio("../assets/audios/hint.wav")
                audio.play();
            }
            ElNotification.success({
                title: '提示',
                message: '已加入收藏',
                position: 'bottom-right',
                showClose: false,
                duration: 3000
            })
        } else {
            if (store.state.setting.config.audio) {
                const audio = new Audio("../assets/audios/hint.wav")
                audio.play();
            }
            ElNotification.error({
                title: '错误',
                message: '没有找到该收藏',
                position: 'bottom-right',
                showClose: false,
                duration: 3000
            })
        }
    } else {
        // 取消收藏逻辑
        const index = collects.findIndex(item => item.url === data.url);
        if (index !== -1) {
            collects.splice(index, 1);
            store.commit('setting/setConfigCollect', JSON.parse(JSON.stringify(collects)));
            if (store.state.setting.config.audio) {
                const audio = new Audio("../assets/audios/hint.wav");
                audio.play();
            }
            ElNotification.success({
                title: '提示',
                message: '已取消收藏',
                position: 'bottom-right',
                showClose: false,
                duration: 3000
            });
        } else {
            if (store.state.setting.config.audio) {
                const audio = new Audio("../assets/audios/hint.wav");
                audio.play();
            }
            ElNotification.error({
                title: '错误',
                message: '未找到对应的收藏项，无法取消收藏',
                position: 'bottom-right',
                showClose: false,
                duration: 3000
            });
        }
    }


}
const typelists = ref([
    {
        title: "base64编码&文本转换",
        url: "base64textconversion",
        logo: "&#xe80e;",
        tag: ["文本", "文档", "转换", "编码", "base64"],
        intro: "这是一款base64编码转换工具，支持文本、图片、文件等格式的转换。",
        time: "2024-11-20"
    }, {
        title: "文字 & 网址转二维码",
        url: "qrcodegeneration",
        logo: "&#xe63e;",
        tag: ["文本", "文档", "转换", "二维码", "生成"],
        intro: "这是一款文字转二维码工具，支持自定义设置二维码尺寸、颜色等参数，还可选择保存图片或分享给好友。,也可以输入网址,生成二维码。网址格式为http://或https://开头。",
        time: "2024-11-20"
    },

    {
        title: "JSON转表格",
        url: "JsonTransferTable",
        logo: "&#xe7b6;",
        tag: ["文本", "文档", "转换", "表格", "生成", "JSON"],
        intro: "这是一款JSON和表格相互转换的工具，支持上传JSON或直接输入JSON代码，可自定义输出。",
        time: "2024-12-9"
    },
    {
        title: "图片转base64编码",
        url: "picturetextconversion",
        logo: "&#xe647;",
        tag: ["图像", "编码", "转换", "base64", "图片"],
        intro: "这是一款图片转base64编码工具，支持选择图片、上传图片或直接输入链接，还可自定义设置输出格式。",
        time: "2024-12-7"
    }, {
        title: "图片压缩",
        url: "photocompression",
        logo: "&#xe610;",
        tag: ["图像", "压缩", "图片"],
        intro: "这是一款图片压缩工具，支持选择图片、上传图片，可自定义压缩大小。",
        time: "2024-12-7"
    },
    {
        title: "音频变速(仅预览)",
        url: "audiospeedchange",
        logo: "&#xe625;",
        tag: ["音频", "变速", "处理", "音效"],
        intro: "这是一款音频变速工具，支持选择音频、上传音频，可自定义设置倍数。只可预览,暂时不可下载",
        time: "2024-12-7"
    },
    {
        title: "JSON 格式化",
        url: "jsonformatting",
        logo: "&#xe65e;",
        tag: ["开发", "JSON", "格式化", "美化"],
        intro: "这是一款JSON格式化工具，支持选择JSON、上传JSON或直接输入JSON代码。",
        time: "2024-12-8"
    },
    {
        title: "元素周期表",
        url: "periodictableofelements",
        logo: "&#xe63a;",
        tag: ["学术", "元素", "周期表", "查询"],
        intro: "这是一款元素周期表工具，可查询元素、查询属性等参数。",
        time: "2024-12-9"
    },
    {
        title: "小学数学题生成",
        url: "esmathproblemcreating",
        logo: "&#xe639;",
        tag: ["计算", "随机", "生成", "数学", "生成"],
        intro: "这是一款小学算术题生成工具，能自主选定运算符，灵活设置小数、数字范围等参数，按需求生成题目，可选择显示答案，还支持打印输出。",
        time: "2024-11-20"
    },
    {
        title: "进制转换",
        url: "baseconversion",
        logo: "&#xe876;",
        tag: ["计算", "数学", "转换", "进制"],
        intro: "这是一款进制转换工具，可自主选择进制，灵活设置数字范围等参数，支持自定义进制转换。",
        time: "2024-12-6"
    }
    ,
    {
        title: "随机数生成",
        url: "randomnumbergeneration",
        logo: "&#xe748;",
        tag: ["计算", "数字", "随机", "生成", "数值"],
        intro: "这是一款随机数生成工具，可自主选择生成方式、数字范围等参数，支持自定义设置个数和位数。",
        time: "2024-12-7"
    },
    {
        title: "键盘测试工具",
        url: "keyboardtext",
        logo: "&#xe706;",
        tag: ["检测", "测试", "键盘", "输入"],
        intro: "这是一款键盘测试工具，可检测当前键盘是否有坏键。Fn键目前无法检测",
        time: "2023-10-20"
    }, {
        title: "我的世界成就生成器",
        url: "minecraftachievement",
        logo: "&#xef4d;",
        tag: ["成就", "生成", "我的世界", "图片", "图像"],
        intro: "这是一款我的世界成就生成工具，可自定义设置成就名称、描述和图标。",
        time: "2023-10-20"
    }, {
        title: "MarkDown编辑器",
        url: "markdowneditor",
        logo: "",
        tag: ["MarkDown", "编辑", "开发", "md", " 文本", "文档", "转换"],
        intro: "这是一款MarkDown编辑器工具，支持实时预览、一键复制等功能。",
        time: "2024-12-10"
    },
    {
        title: "汉字转拼音",
        url: "ChineseCharactersToPinyin",
        logo: "",
        tag: ["转换", "汉字", "拼音", "文本", " 文档", "教育", "益智", "学习"],
        intro: "这是一款汉字转拼音工具，支持输入中文或直接输出拼音。",
        time: "2024-12-11"
    }, {
        title: "IP查询",
        url: "IPAddressQuery",
        logo: "",
        tag: ["查询", "IP", "地址", "位置"],

        intro: "这是一款IP查询工具，支持输入IP地址或直接相关信息。",
        time: "2024-12-11"
    }, {
        title: "手机号归属地查询",
        url: "PhoneNumberQuery",
        logo: "",
        tag: ["查询", "手机", "地址", "位置", "手机号", "归属地", "信息"],
        intro: "这是一款手机号归属地查询工具，支持输入手机号码获得相关信息。",
        time: "2024-12-11"
    }, {
        title: "天气查询",
        url: "WeatherInquiry",
        logo: "",
        tag: ["查询", "天气", "地址", "位置", "信息"],
        intro: "这是一款天气查询工具，支持输入地址或直接查询相关信息。",
        time: "2024-12-11"
    }, {
        title: "ICP备案查询",
        url: "ICPRecordInquiry",
        logo: "",
        tag: ["查询", "备案", "地址", "域名", "信息", "ICP","网站"],
        intro: "这是一款ICP备案查询工具，支持输入域名或直接查询相关注册信息。",
        time: "2024-12-11"
    }
]

)
const isCollapse = ref(true);

//移入
function navsmouseenter() {
    // isCollapse.value = false;
}
//移出
function navsmouseleave() {
    // isCollapse.value = true;
}
function isunfold() {
    isCollapse.value = !isCollapse.value;
}

</script>
<style lang=scss scoped>
.tool {
    height: 100%;
    width: 100%;
    display: flex;
    position: fixed;

    .sidebar {
        height: calc(100% - 90px);
        border-right: 1px solid #77777777;
        position: relative;

        &:hover {
            .isunfold {
                transition: all 0.3s;
                width: 20px;
                font-size: 16px;
            }
        }

        .isunfold {
            transition: all 0.3s;
            position: absolute;
            top: calc(50% - 40px);
            left: 100%;
            height: 80px;
            width: 5px;
            font-size: 5px;
            background-color: #77777711;
            color: #77777755;
            border-radius: 0 5px 5px 0;
            text-align: center;
            line-height: 80px;
            // font-size: 20px;
            z-index: 1000;

            &:hover {
                background-color: #77777766;
                color: #77777799;
            }
        }

        .el-menu-vertical {
            height: 100%;
        }

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 120px;
        }

        .icon-set {
            font-size: 20px;
        }

        .el-menu {
            border-right: 0;
        }
    }

    .search {
        width: 50%;
        margin: 20px auto;
    }

    .content {
        height: calc(100% - 90px);
        width: 100%;

        .el-scrollbar__view {
            height: 100%;
            background-color: #fff;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, 230px);
        grid-gap: 5px;
        justify-content: space-between;
        margin: 20px;

        .el-card {
            --el-card-padding: 5px;
            width: 230px;
            height: 60px;

            &:hover {
                box-shadow: 0 0 2px;
            }
        }

        .card {

            display: flex;
            overflow: hidden;

            .card_logo {
                min-width: 50px;
                width: 50px;
                height: 50px;
                min-height: 50px;
                font-size: 30px;
                line-height: 50px;
                text-align: center;
            }

            .card_header {
                height: 25px;
                line-height: 25px;
            }

            .card_tag {
                display: flex;
                height: 25px;
                line-height: 25px;
                // width: calc(100% - 50px);
                text-overflow: ellipsis;

                .el-tag {
                    margin-right: 3px;
                }
            }
        }

    }

    .detailedclosure {
        margin: 20px;
        // padding: 30px;
        // height: 120px;
        border: 1px solid #77777777;
        border-radius: 10px;

        .top {
            display: flex;
            height: 100px;
            min-width: 100px;

            .logo {
                min-height: 100px;
                min-width: 100px;
                height: 100px;
                width: 100px;
                line-height: 100px;
                text-align: center;
                font-size: 90px;
                margin-right: 20px;
            }

            .content {

                .title {
                    font-size: 24px;
                }

                .tag {
                    display: flex;

                    .el-tag {
                        margin-right: 3px;
                    }
                }

                .intro {
                    font-size: 14px;
                }
            }
        }

        .footer {
            margin: 2px 0;
            border-top: 1px solid;
            height: 15px;
            line-height: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #777777d5;

            .collect {
                &:hover {
                    text-shadow: 0 0 2px;
                }
            }
        }

    }

}
</style>

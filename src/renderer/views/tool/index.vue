<template>

    <div class="tool">
        <div class="sidebar">
            <div style="height: 100%">
                <el-scrollbar view-style="height:100%;" height="100%" style="height:100%">
                    <el-menu default-active="all" @mouseenter="navsmouseenter" @mouseleave="navsmouseleave"
                        class="el-menu-vertical" :collapse="isCollapse">
                        <el-menu-item v-on:click="now_typelist('all')" index="all">
                            <el-icon><span class="iconfont icon-set">&#xea35;</span></el-icon>
                            <template #title>全部</template>
                        </el-menu-item>
                        <el-menu-item v-on:click="now_typelist(typelist.label)" :index="typelist.label"
                            :key="typelist.type" v-for="typelist in typelists">
                            <el-icon><span class="iconfont icon-set" v-html="typelist.icon"></span></el-icon>
                            <template #title>{{ typelist.type }}</template>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </div>
            <div v-on:click="isunfold" class="isunfold iconfont">{{ isCollapse ? '&#xe648;' : '&#xe613;' }}</div>
        </div>

        <el-backtop target=".content_main" :visibility-height="50" :right="30" :bottom="30" />
        <el-scrollbar wrap-class="content_main" class="content">
            <div v-show="route.meta.tier == 2" style="width: 100%;">
                <div class="search">
                    <el-input size="large" placeholder="请输入工具名或关键字" :suffix-icon="Search" />
                </div>
                <div :id="typelist.label" v-show="nowtypelist == 'all' ? 'true' : typelist.label == nowtypelist"
                    :key="typelist.type" v-for="typelist in typelists">
                    <el-card style="margin: 0 20px;">
                        <template #header>
                            <div class="card-header">
                                <span class="iconfont" v-html="typelist.icon"></span> <span> {{ typelist.type }}</span>
                            </div>
                        </template>
                        <div class="cards">
                            <el-empty description="暂无工具，敬请期待！" :image-size="50" v-if="typelist.lists.length == 0" />
                            <div class="cards_1" v-else>
                                <el-card v-on:click="openurl(item)" :key="item.title" v-for="item in typelist.lists">
                                    <div class="card">
                                        <div class="card_logo iconfont" v-html="item.logo"></div>
                                        <div>
                                            <div class="card_header">{{ item.title }}</div>
                                            <div class="card_tag">
                                                <el-tag size="small" type="primary">{{ typelist.type }}</el-tag>
                                                <el-tag size="small" type="success" :key="tag"
                                                    v-for="tag in item.tag">{{
                                                        tag
                                                    }}</el-tag>
                                            </div>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </el-card>
                    <br>
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
                        <div class="collect"><span class="iconfont">&#xea51;</span>加入收藏</div>
                        <div class="times">
                            完成时间:
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
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter()
let nowtypelist = ref('all');
let nowlist = ref([])
function now_typelist(data) {
    router.push('/tool')
    nowtypelist.value = data
}
function openurl(data) {
    nowlist.value = data
    router.push('/tool/' + data.url)
}
const typelists = ref([
    {
        type: '文本',
        label: "text", icon: '&#xea26;',
        lists: [
            {
                title: "base64编码&文本转换",
                url: "base64textconversion",
                logo: "&#xe80e;",
                tag: ["转换", "编码", "base64"],
                intro: "这是一款base64编码转换工具，支持文本、图片、文件等格式的转换。",
                time: "2024-11-20"
            }, {
                title: "文字 & 网址转二维码",
                url: "qrcodegeneration",
                logo: "&#xe63e;",
                tag: ["转换", "二维码", "生成"],
                intro: "这是一款文字转二维码工具，支持自定义设置二维码尺寸、颜色等参数，还可选择保存图片或分享给好友。,也可以输入网址,生成二维码。网址格式为http://或https://开头。",
                time: "2024-11-20"
            },
        ]
    },
    {
        type: '文档',
        label: "document", icon: '&#xea27;',
        lists: [
            {
                title: "JSON转表格",
                url: "JsonTransferTable",
                logo: "",
                tag: ["转换", "表格", "生成", "JSON"],
                intro: "这是一款JSON和表格相互转换的工具，支持上传JSON或直接输入JSON代码，可自定义输出。",
                time: "2024-12-9"
            },
        ]
    },
    {
        type: '图像',
        label: "graphics", icon: '&#xea28;',
        lists: [
            {
                title: "图片转base64编码",
                url: "picturetextconversion",
                logo: "",
                tag: ["转换", "base64", "图片"],
                intro: "这是一款图片转base64编码工具，支持选择图片、上传图片或直接输入链接，还可自定义设置输出格式。",
                time: "2024-12-7"
            }, {
                title: "图片压缩",
                url: "photocompression",
                logo: "",
                tag: ["压缩", "图片"],
                intro: "这是一款图片压缩工具，支持选择图片、上传图片，可自定义压缩大小。",
                time: "2024-12-7"
            },
        ]
    }, {
        type: '音频',
        label: "audio", icon: '&#xea6d;',
        lists: [
            {
                title: "音频变速(仅预览)",
                url: "audiospeedchange",
                logo: "",
                tag: ["变速", "处理", "音效"],
                intro: "这是一款音频变速工具，支持选择音频、上传音频，可自定义设置倍数。只可预览,暂时不可下载",
                time: "2024-12-7"
            },
        ]
    }, {
        type: '视频',
        label: "video", icon: '&#xea29;',
        lists: []
    }, {
        type: '开发',
        label: "exploit", icon: '&#xea25;', lists: [
            {
                title: "JSON 格式化",
                url: "jsonformatting",
                logo: "",
                tag: ["JSON", "格式化", "美化"],
                intro: "这是一款JSON格式化工具，支持选择JSON、上传JSON或直接输入JSON代码。",
                time: "2024-12-8"
            },
        ]
    }, {
        type: '运维',
        label: "ops", icon: '&#xeaec;', lists: []
    }, {
        type: '设计',
        label: "design", icon: '&#xea1f;', lists: []
    }, {
        type: '学术',
        label: "science", icon: '&#xea24;', lists: [
            {
                title: "元素周期表",
                url: "periodictableofelements",
                logo: "",
                tag: ["元素", "周期表", "查询"],
                intro: "这是一款元素周期表工具，可查询元素、查询属性等参数。",
                time: "2024-12-9"
            },
        ]
    }, {
        type: '计算',
        label: "compute", icon: '&#xea34;', lists: [
            {
                title: "小学数学题生成",
                url: "esmathproblemcreating",
                logo: "&#xe639;",
                tag: ["随机", "生成", "数学", "生成"],
                intro: "这是一款小学算术题生成工具，能自主选定运算符，灵活设置小数、数字范围等参数，按需求生成题目，可选择显示答案，还支持打印输出。",
                time: "2024-11-20"
            },
            {
                title: "进制转换",
                url: "baseconversion",
                logo: "&#xe876;",
                tag: ["转换", "进制"],
                intro: "这是一款进制转换工具，可自主选择进制，灵活设置数字范围等参数，支持自定义进制转换。",
                time: "2024-12-6"
            }
            ,
            {
                title: "随机数生成",
                url: "randomnumbergeneration",
                logo: "&#xe748;",
                tag: ["随机", "生成", "数值"],
                intro: "这是一款随机数生成工具，可自主选择生成方式、数字范围等参数，支持自定义设置个数和位数。",
                time: "2024-12-7"
            }
        ]
    }, {
        type: '查询',
        label: "inquire",
        icon: '&#xea39;',
        lists: []
    }, {
        type: '其他',
        label: "other",
        icon: '&#xea8c;',
        lists: [
            {
                title: "键盘测试工具",
                url: "keyboardtext",
                logo: "&#xe706;",
                tag: ["测试", "键盘", "输入"],
                intro: "这是一款键盘测试工具，可检测当前键盘是否有坏键。Fn键目前无法检测",
                time: "2023-10-20"
            }, {
                title: "我的世界成就生成器",
                url: "minecraftachievement",
                logo: "",
                tag: ["成就", "生成", "我的世界"],
                intro: "这是一款我的世界成就生成工具，可自定义设置成就名称、描述和图标。",
                time: "2023-10-20"
            },
        ]
    }
])
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

        .el-card {
            --el-card-padding: 5px;
            width: 230px;
            height: 60px;

            &:hover {
                box-shadow: 0 0 2px;
            }
        }

        .cards_1 {
            display: grid;
            grid-template-columns: repeat(auto-fill, 230px);
            justify-content: space-between;
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
        }

    }

}
</style>

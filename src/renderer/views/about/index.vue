<template>
    <div class="about">
        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>{{ $t('toolbox.about.statistics') }}</span>
                </div>
            </template>
            <el-row>
                <el-col :span="6">
                    <el-statistic :title="$t('toolbox.about.accumulatedcode')" :value="268500" />
                </el-col>
                <el-col :span="6">
                    <el-statistic :title="$t('toolbox.about.cumulativeuse')" :value="0" />
                </el-col>
                <el-col :span="6">
                    <el-statistic :title="$t('toolbox.about.toolcount')" :value="1" />
                </el-col>
                <el-col :span="6">
                    <el-statistic title="GitHubStar" :value="1" />
                </el-col>
            </el-row>
        </el-card>
        <br>
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>{{ $t('toolbox.about.aboutsotfware') }}</span>
                </div>
            </template>
            <div class="cards">
                <el-card style="width: 140px;margin: 5px;">
                    <img class="logo" src="@/assets/images/about/dzy.jpg" alt="">
                    <div class="content">dzy</div>
                    <hr>
                    <div class="content">{{ $t('toolbox.about.author') }}</div>
                </el-card>
                <el-card style="width: 140px;margin: 5px;">
                    <div class="iconfont logo">&#xe652;</div>
                    <div class="content">GitHub</div>
                    <hr>
                    <div class="content">{{ $t('toolbox.about.githuburl') }}</div>
                </el-card>
                <el-card style="width: 140px;margin: 5px;">
                    <div class="iconfont-color logo">&#xe62e;</div>
                    <div class="content">MIT</div>
                    <hr>
                    <div class="content">{{ $t('toolbox.about.opensourceprotocol') }}</div>
                </el-card>
            </div>
        </el-card>
        <br>
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>{{ $t('toolbox.about.specialthanks') }}</span>
                </div>
            </template>
            <div class="cards cards_1">
                <a :key="specialthank" v-for="specialthank in specialthanks" target="_blank" :href="specialthank.url"
                    style="margin: 5px;width: 140px;">
                    <el-card>
                        <div v-if="specialthank.icon != ''" class="iconfont-color logo_1" v-html="specialthank.icon">
                        </div>
                        <img :src="specialthank.logo" v-if="specialthank.logo != ''" class="logo_1" />
                        <div class="logo_1" v-if="specialthank.logo == '' && specialthank.icon == ''">HAN</div>
                    </el-card>
                </a>
            </div>
        </el-card>
        <br>
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>{{ $t('toolbox.about.correlationtechnique') }}</span>
                </div>
            </template>
            <div class="cards">
                <el-card style="width: 140px;margin: 5px;" :key="ct.name" v-for="ct in correlationTechnique">
                    <div>
                        <div v-if="ct.icon != ''" class="iconfont-color logo" v-html="ct.icon"></div>
                        <div v-else class="iconfont-color logo">&#xe62e;</div>
                        <div class="content">{{ ct.name }}</div>
                        <hr>
                        <div class="content">{{ ct.version }}</div>
                        <!-- <div class="urls">
                            <a v-if="ct.web != ''" class="url iconfont" target="_blank" :href="ct.web"
                                alt="官网">&#xe601;</a>
                            <a v-else class="nourl iconfont">&#xe601;</a>
                            <a v-if="ct.github != ''" class="url iconfont" target="_blank" :href="ct.github"
                                alt="github">&#xe652;</a>
                            <a v-else class="nourl iconfont">&#xe652;</a>

                            <a v-if="ct.wiki != ''" class="url iconfont" target="_blank" :href="ct.wiki"
                                alt="文档">&#xe616;</a>
                            <a v-else class="nourl iconfont">&#xe616;</a>

                            <a v-if="ct.npmurl != ''" class="url iconfont" target="_blank" :href="ct.npmurl"
                                alt="npm">&#xe6de;</a>
                            <a v-else class="nourl iconfont">&#xe6de;</a>
                        </div> -->
                    </div>
                </el-card>
            </div>


        </el-card>
    </div>
</template>
<script setup>
import { ref } from "vue";
const correlationTechnique = ref([
    {
        "name": "node.js",
        "icon": "&#xe71d;",
        "img": "",
        "version": ""
    },
    {
        "name": "electron",
        "icon": "&#xe7d7;",
        "img": "",
        "version": "31.0.2"
    },
    {
        "name": "vue3",
        "icon": "&#xe799;",
        "img": "",
        "version": "3.4.30"
    },
    {
        "name": "element-plus",
        "icon": "&#xe690;",
        "img": "",
        "version": "2.9.0"
    },
    {
        "name": "vuex",
        "icon": "",
        "img": "",
        "version": "4.1.0"
    },
    {
        "name": "vue-router",
        "icon": "",
        "img": "",
        "version": "4.5.0"
    },
    {
        "name": "vue-i18n",
        "icon": "",
        "img": "",
        "version": "10.0.5"
    },
    {
        "name": "font-list.js",
        "icon": "",
        "img": "",
        "version": "1.5.1"
    },
    {
        "name": "systeminformation.js",
        "icon": "",
        "img": "",
        "version": ""
    },
    {
        "name": "sass",
        "icon": "&#xe6d0;",
        "img": "",
        "version": "1.82.0"
    },
    {
        "name": "sortable",
        "icon": "",
        "img": "",
        "version": ""
    },
    {
        "name": "@electron-toolkit/preload",
        "icon": "",
        "img": "",
        "version": "3.0.1"
    },
    {
        "name": "@electron-toolkit/utils",
        "icon": "",
        "img": "",
        "version": "3.0.0"
    },
    {
        "name": "compressorjs",
        "icon": "",
        "img": "",
        "version": "1.2.1"
    },
    {
        "name": "electron-store",
        "icon": "",
        "img": "",
        "version": "8.2.0"
    },
    {
        "name": "electron-updater",
        "icon": "",
        "img": "",
        "version": "6.1.7"
    },
    {
        "name": "file-saver",
        "icon": "",
        "img": "",
        "version": "2.0.5"
    },
    {
        "name": "howler",
        "icon": "",
        "img": "",
        "version": "2.2.4"
    },
    {
        "name": "html2canvas",
        "icon": "",
        "img": "",
        "version": "1.4.1"
    },
    {
        "name": "jimp",
        "icon": "",
        "img": "",
        "version": "1.6.0"
    },
    {
        "name": "js-base64",
        "icon": "",
        "img": "",
        "version": "3.7.7"
    },
    {
        "name": "jszip",
        "icon": "",
        "img": "",
        "version": "3.10.1"
    },
    {
        "name": "mathjs",
        "icon": "",
        "img": "",
        "version": "14.0.0"
    },
    {
        "name": "print-js",
        "icon": "",
        "img": "",
        "version": "1.6.0"
    },
    {
        "name": "qrcode",
        "icon": "",
        "img": "",
        "version": "1.5.4"
    },
    {
        "name": "vue-json-viewer",
        "icon": "",
        "img": "",
        "version": "3.0.4"
    },
    {
        "name": "xlsx",
        "icon": "",
        "img": "",
        "version": "0.18.5"
    },
    {
        "name": "@electron-toolkit/eslint-config",
        "icon": "",
        "img": "",
        "version": "1.0.2"
    },
    {
        "name": "@rushstack/eslint-patch",
        "icon": "",
        "img": "",
        "version": "1.10.3"
    },
    {
        "name": "@vitejs/plugin-vue",
        "icon": "",
        "img": "",
        "version": "5.0.5"
    },
    {
        "name": "@vue/eslint-config-prettier",
        "icon": "",
        "img": "",
        "version": "9.0.0"
    },
    {
        "name": "electron-builder",
        "icon": "",
        "img": "",
        "version": "24.13.3"
    },
    {
        "name": "electron-vite",
        "icon": "",
        "img": "",
        "version": "2.3.0"
    },
    {
        "name": "eslint",
        "icon": "",
        "img": "",
        "version": "8.57.0"
    },
    {
        "name": "eslint-plugin-vue",
        "icon": "",
        "img": "",
        "version": "9.26.0"
    },
    {
        "name": "prettier",
        "icon": "",
        "img": "",
        "version": "3.3.2"
    },
    {
        "name": "sass-loader",
        "icon": "",
        "img": "",
        "version": "16.0.4"
    },
    {
        "name": "vite",
        "icon": "",
        "img": "",
        "version": "5.3.1"
    }
]);

const specialthanks = ref([
    { url: "https://pixabay.com/", logo: "", icon: "&#xe60d;" },
    { url: "https://github.com/", logo: "", icon: "&#xe60e;" },
    { url: "https://api.vvhan.com/", logo: "", icon: "" },
    { url: "https://www.iconfont.cn/", logo: "../../assets/images/about/iconfont.svg", icon: "" },

    { url: "https://iconpark.oceanengine.com/", logo: "../../assets/images/about/iconpark.svg", icon: "" },
])
</script>
<style lang=scss scoped>
.about {
    .el-card {
        backdrop-filter: blur(2px);
    }

    margin: 20px;

    .head {
        width: 100%;

        .el-col {
            text-align: center;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 10px;

        .el-card {
            margin-bottom: 20px;
            padding: 2px;

            .logo {
                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                box-shadow: 0 0 2px;
                border-radius: 50%;
                text-align: center;
                line-height: 50px;
                font-size: 28px;
            }

            .content {
                text-align: center;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .urls {
                display: flex;
                justify-content: space-around;

                .url {
                    border: 1px solid;
                    padding: 2px;
                    border-radius: 4px;
                    margin: 2px;

                    &:hover {
                        background-color: #77777777;
                    }
                }

                .nourl {
                    background-color: #777777bb;
                    border: 1px solid;
                    padding: 2px;
                    border-radius: 4px;
                    margin: 2px;
                }
            }

            &:hover {
                box-shadow: 0 0 5px;
            }
        }
    }

    .cards_1 {
        .el-card {
            --el-card-padding: 5px;

            &:hover {
                box-shadow: 0 0 5px;
            }
        }

        .logo_1 {
            width: 100%;
            max-height: 24px;
            min-height: 24px;
            line-height: 24px;
            text-align: center;
        }
    }
}
</style>

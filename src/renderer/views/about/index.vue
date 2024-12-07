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
                <a target="_blank" href="https://pixabay.com/" style="margin: 5px;width: 140px;">
                    <el-card>
                        <div class="iconfont-color logo_1">&#xe60d;</div>
                    </el-card>
                </a><a target="_blank" href="https://pixabay.com/" style="margin: 5px;width: 140px;">
                    <el-card>
                        <div class="iconfont-color logo_1">&#xe60e;</div>
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
                        <div class="urls">
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
                        </div>
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
        name: "node.js",
        icon: "&#xe71d;",
        img: "",
        github: "https://github.com/nodejs/node",
        wiki: "https://nodejs.org/docs/latest/api/",
        web: "&#xe71d;",
        npmurl: "https://www.npmjs.com/"
    },
    {
        name: "electron",
        icon: "&#xe7d7;",
        img: "",
        github: "https://github.com/electron/electron",
        wiki: "https://www.electronjs.org/docs",
        web: "https://www.electronjs.org",
        npmurl: "https://www.npmjs.com/package/electron"
    },
    {
        name: "vue3",
        icon: "&#xe799;",
        img: "",
        github: "https://github.com/vuejs/vue-next",
        wiki: "https://v3.vuejs.org/guide/introduction.html",
        web: "https://v3.vuejs.org/",
        npmurl: "https://www.npmjs.com/package/@vue/runtime-core"
    },
    {
        name: "iconfont",
        icon: "&#xe60c;",
        img: "",
        github: "",
        wiki: "",
        web: "https://www.iconfont.cn/",
        npmurl: ""
    }, {
        name: "element-plus",
        icon: "&#xe690;",
        img: "",
        github: "https://github.com/element-plus/element-plus",
        wiki: "https://element-plus.org/zh-CN/component/overview.html",
        web: "https://element-plus.org/",
        npmurl: "https://www.npmjs.com/package/element-plus"
    }, {
        name: "vuex",
        icon: "",
        img: "",
        github: "https://github.com/vuejs/vuex",
        wiki: "https://vuex.vuejs.org/zh/guide",
        web: "https://vuex.vuejs.org/zh/",
        npmurl: "https://www.npmjs.com/package/@vue/composition-api"
    }, {
        name: "vue-router",
        icon: "",
        img: "",
        github: "https://github.com/vuejs/vue-router",
        wiki: "https://next.router.vuejs.org/zh/",
        web: "https://next.router.vuejs.org/zh/",
        npmurl: "https://www.npmjs.com/package/@vue/composition-api"
    }, {
        name: "vue-i18n",
        icon: "",
        img: "",
        github: "https://github.com/vuejs/vue-i18n",
        wiki: "https://vue-i18n.intlify.dev/guide/",
        web: "https://vue-i18n.intlify.dev/",
        npmurl: "https://www.npmjs.com/package/@vue/composition-api"
    }, {
        name: "font-list.js",
        icon: "",
        img: "",
        github: "github.com/oldj/node-font-list",
        wiki: "",
        web: "",
        npmurl: "https://www.npmjs.com/package/font-list"
    }, {
        name: "systeminformation.js",
        icon: "",
        img: "",
        github: "https://github.com/sebhildebrandt/systeminformation",
        wiki: "https://systeminformation.io/examples.html",
        web: "https://systeminformation.io/",
        npmurl: "https://www.npmjs.com/package/systeminformation"
    }, {
        name: "sass",
        icon: "&#xe6d0;",
        img: "",
        github: "https://github.com/sass/dart-sass",
        wiki: "https://sass.bootcss.com/documentation",
        web: "https://sass.bootcss.com/",
        npmurl: "https://www.npmjs.com/package/sass"
    }, {
        name: "sortable",
        icon: "",
        img: "",
        github: "https://github.com/SortableJS/sortable",
        wiki: "https://sortablejs.github.io/Sortable/",
        web: "https://sortablejs.github.io/Sortable/",
        npmurl: "https://www.npmjs.com/package/@types/sortablejs"
    }

]);
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
            height: 24px;
            line-height: 24px;
            text-align: center;
        }
    }
}
</style>

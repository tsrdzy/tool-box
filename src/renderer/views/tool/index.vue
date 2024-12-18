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
                        <el-text class="networking iconfont" type="info" v-if="item.networking">&#xec7f;</el-text>
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
import { useStore } from 'vuex';
import { ElNotification } from 'element-plus';
import typelist from '@/assets/scripts/tools.js'
const store = useStore()
const route = useRoute();
const router = useRouter()
let nowtypelist = ref('all');
let nowlist = ref([])
const typelists = ref([])
//获取检测主页跳转过来后的标题栏内容
const com_tool = computed(() => store.state.tool.nowtool)
watch(com_tool, (newValue, oldValue) => {
    nowlist.value = newValue
    openurl(newValue)
})
onMounted(() => {
    typelists.value = typelist
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
<style lang="scss" scoped>
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
            position: relative;

            &:hover {
                box-shadow: 0 0 2px;
            }
        }

        .networking {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 15px;
            height: 15px;
            padding: 1px;
            background-color: #77777733;
            border-bottom-right-radius: 100%;
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

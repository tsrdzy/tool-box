import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: "home",
        component: () => import('@/views/index.vue'),
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: { title: "toolbox.navs.home", tier: 2 },
            },
            {
                path: 'tool',
                component: () => import('@/views/tool/index.vue'),
                meta: { title: "toolbox.navs.tool", tier: 2 },
                children: [
                    {
                        path: 'esmathproblemcreating',
                        component: () => import('@/views/tool/projects/ESMathProblemCreating/index.vue'),
                        meta: { title: "toolbox.navs.esmathproblemcreating", tier: 3 },
                    },
                    {
                        path: 'baseconversion',
                        component: () => import('@/views/tool/projects/BaseConversion/index.vue'),
                        meta: { title: "toolbox.navs.baseconversion", tier: 3 },
                    },
                    {
                        path: 'base64textconversion',
                        component: () => import('@/views/tool/projects/Base64TextConversion/index.vue'),
                        meta: { title: "toolbox.navs.base64textconversion", tier: 3 },
                    },
                    {
                        path: 'qrcodegeneration',
                        component: () => import('@/views/tool/projects/QrcodeGeneration/index.vue'),
                        meta: { title: "toolbox.navs.qrcodegeneration", tier: 3 },
                    },
                    {
                        path: 'randomnumbergeneration',
                        component: () => import('@/views/tool/projects/RandomNumberGeneration/index.vue'),
                        meta: { title: "toolbox.navs.randomnumbergeneration", tier: 3 },
                    },
                    {
                        path: 'keyboardtext',
                        component: () => import('@/views/tool/projects/KeyboardText/index.vue'),
                        meta: { title: "toolbox.navs.keyboardtext", tier: 3 },
                    }, {
                        path: 'picturetextconversion',
                        component: () => import('@/views/tool/projects/PictureTextConversion/index.vue'),
                        meta: { title: "toolbox.navs.picturetextconversion", tier: 3 },
                    }, {
                        path: 'photocompression',
                        component: () => import('@/views/tool/projects/PhotoCompression/index.vue'),
                        meta: { title: "toolbox.navs.photocompression", tier: 3 },
                    }, {
                        path: 'audiospeedchange',
                        component: () => import('@/views/tool/projects/AudioSpeedChange/index.vue'),
                        meta: { title: "toolbox.navs.audiospeedchange", tier: 3 },
                    }, {
                        path: 'jsonformatting',
                        component: () => import('@/views/tool/projects/JsonFormatting/index.vue'),
                        meta: { title: "toolbox.navs.jsonformatting", tier: 3 },
                    }, {
                        path: 'minecraftachievement',
                        component: () => import('@/views/tool/projects/MineCraftAchievement/index.vue'),
                        meta: { title: "toolbox.navs.minecraftachievement", tier: 3 },
                    }, {
                        path: 'periodictableofelements',
                        component: () => import('@/views/tool/projects/PeriodicTableOfElements/index.vue'),
                        meta: { title: "toolbox.navs.periodictableofelements", tier: 3 },
                    }, {
                        path: 'jsontransfertable',
                        component: () => import('@/views/tool/projects/JsonTransferTable/index.vue'),
                        meta: { title: "toolbox.navs.jsontransfertable", tier: 3 },
                    },

                ]
            },
            {
                path: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: { title: "toolbox.navs.about", tier: 2 },
            },
            {
                path: 'setting',
                component: () => import('@/views/setting/index.vue'),
                meta: { title: "toolbox.navs.setting", tier: 2 },
            }
        ]
    }
]
const router = createRouter({
    //  hash 模式。
    history: createWebHashHistory(),
    routes
})
export default router
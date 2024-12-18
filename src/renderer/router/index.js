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
                    }, {
                        path: 'markdowneditor',
                        component: () => import('@/views/tool/projects/MarkDownEditor/index.vue'),
                        meta: { title: "toolbox.navs.markdowneditor", tier: 3 },
                    },
                    {
                        path: 'chinesecharacterstopinyin',
                        component: () => import('@/views/tool/projects/ChineseCharactersToPinyin/index.vue'),
                        meta: { title: "toolbox.navs.chinesecharacterstopinyin", tier: 3 },
                    }, {
                        path: 'ipaddressquery',
                        component: () => import('@/views/tool/projects/IPAddressQuery/index.vue'),
                        meta: { title: "toolbox.navs.ipaddressquery", tier: 3 },
                    }, {
                        path: 'phonenumberquery',
                        component: () => import('@/views/tool/projects/PhoneNumberQuery/index.vue'),
                        meta: { title: "toolbox.navs.phonenumberquery", tier: 3 },
                    }, {
                        path: 'weatherinquiry',
                        component: () => import('@/views/tool/projects/WeatherInquiry/index.vue'),
                        meta: { title: "toolbox.navs.weatherinquiry", tier: 3 },
                    }, {
                        path: 'icprecordinquiry',
                        component: () => import('@/views/tool/projects/ICPRecordInquiry/index.vue'),
                        meta: { title: "toolbox.navs.icprecordinquiry", tier: 3 },
                    }, {
                        path: 'obtaininghardwareinformation',
                        component: () => import('@/views/tool/projects/ObtainingHardwareInformation/index.vue'),
                        meta: { title: "toolbox.navs.obtaininghardwareinformation", tier: 3 },
                    }, {
                        path: 'horoscope',
                        component: () => import('@/views/tool/projects/Horoscope/index.vue'),
                        meta: { title: "toolbox.navs.horoscope", tier: 3 },
                    }, {
                        path: 'whatshottoday',
                        component: () => import('@/views/tool/projects/WhatsHotToday/index.vue'),
                        meta: { title: "toolbox.navs.whatshottoday", tier: 3 },
                    }, {
                        path: 'imageformatconversion',
                        component: () => import('@/views/tool/projects/ImageFormatConversion/index.vue'),
                        meta: { title: "toolbox.navs.imageformatconversion", tier: 3 },
                    }, {
                        path: 'icoimageformatconversion',
                        component: () => import('@/views/tool/projects/ICOImageFormatConversion/index.vue'),
                        meta: { title: "toolbox.navs.icoimageformatconversion", tier: 3 },
                    }, {
                        path: 'jsontoxml',
                        component: () => import('@/views/tool/projects/JsonToXml/index.vue'),
                        meta: { title: "toolbox.navs.jsontoxml", tier: 3 },
                    }, {
                        path: 'drawingboard',
                        component: () => import('@/views/tool/projects/DrawingBoard/index.vue'),
                        meta: { title: "toolbox.navs.drawingboard", tier: 3 },
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
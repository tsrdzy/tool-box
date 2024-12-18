const typelist = [
    {
        title: "base64编码&文本转换",
        url: "base64textconversion",
        logo: "&#xe80e;",
        tag: ["文本", "文档", "转换", "编码", "base64"],
        intro: "这是一款base64编码转换工具，支持文本、图片、文件等格式的转换。",
        networking: false, time: "2024-11-20"
    }, {
        title: "文字 & 网址转二维码",
        url: "qrcodegeneration",
        logo: "&#xe63e;",
        tag: ["文本", "文档", "转换", "二维码", "生成"],
        intro: "这是一款文字转二维码工具，支持自定义设置二维码尺寸、颜色等参数，还可选择保存图片或分享给好友。,也可以输入网址,生成二维码。网址格式为http://或https://开头。",
        networking: false, time: "2024-11-20"
    },

    {
        title: "JSON转表格",
        url: "JsonTransferTable",
        logo: "&#xe7b6;",
        tag: ["文本", "文档", "转换", "表格", "生成", "JSON"],
        intro: "这是一款JSON和表格相互转换的工具，支持上传JSON或直接输入JSON代码，可自定义输出。",
        networking: false, time: "2024-12-9"
    },
    {
        title: "图片转base64编码",
        url: "picturetextconversion",
        logo: "&#xe647;",
        tag: ["图像", "编码", "转换", "base64", "图片"],
        intro: "这是一款图片转base64编码工具，支持选择图片、上传图片或直接输入链接，还可自定义设置输出格式。",
        networking: false, time: "2024-12-7"
    }, {
        title: "图片压缩",
        url: "photocompression",
        logo: "&#xe610;",
        tag: ["图像", "压缩", "图片"],
        intro: "这是一款图片压缩工具，支持选择图片、上传图片，可自定义压缩大小。",
        networking: false, time: "2024-12-7"
    },
    {
        title: "音频变速(仅预览)",
        url: "audiospeedchange",
        logo: "&#xe625;",
        tag: ["音频", "变速", "处理", "音效"],
        intro: "这是一款音频变速工具，支持选择音频、上传音频，可自定义设置倍数。只可预览,暂时不可下载",
        networking: false, time: "2024-12-7"
    },
    {
        title: "JSON 格式化",
        url: "jsonformatting",
        logo: "&#xe65e;",
        tag: ["开发", "JSON", "格式化", "美化"],
        intro: "这是一款JSON格式化工具，支持选择JSON、上传JSON或直接输入JSON代码。",
        networking: false, time: "2024-12-8"
    },
    {
        title: "元素周期表",
        url: "periodictableofelements",
        logo: "&#xe63a;",
        tag: ["学术", "元素", "周期表", "查询"],
        intro: "这是一款元素周期表工具，可查询元素、查询属性等参数。",
        networking: false, time: "2024-12-9"
    },
    {
        title: "小学数学题生成",
        url: "esmathproblemcreating",
        logo: "&#xe639;",
        tag: ["计算", "随机", "生成", "数学", "生成"],
        intro: "这是一款小学算术题生成工具，能自主选定运算符，灵活设置小数、数字范围等参数，按需求生成题目，可选择显示答案，还支持打印输出。",
        networking: false, time: "2024-11-20"
    },
    {
        title: "进制转换",
        url: "baseconversion",
        logo: "&#xe876;",
        tag: ["计算", "数学", "转换", "进制"],
        intro: "这是一款进制转换工具，可自主选择进制，灵活设置数字范围等参数，支持自定义进制转换。",
        networking: false, time: "2024-12-6"
    }
    ,
    {
        title: "随机数生成",
        url: "randomnumbergeneration",
        logo: "&#xe748;",
        tag: ["计算", "数字", "随机", "生成", "数值"],
        intro: "这是一款随机数生成工具，可自主选择生成方式、数字范围等参数，支持自定义设置个数和位数。",
        networking: false, time: "2024-12-7"
    },
    {
        title: "键盘测试工具",
        url: "keyboardtext",
        logo: "&#xe706;",
        tag: ["检测", "测试", "键盘", "输入"],
        intro: "这是一款键盘测试工具，可检测当前键盘是否有坏键。Fn键目前无法检测",
        networking: false, time: "2023-10-20"
    }, {
        title: "我的世界成就生成器",
        url: "minecraftachievement",
        logo: "&#xef4d;",
        tag: ["成就", "生成", "我的世界", "图片", "图像"],
        intro: "这是一款我的世界成就生成工具，可自定义设置成就名称、描述和图标。",
        networking: false, time: "2023-10-20"
    }, {
        title: "MarkDown编辑器",
        url: "markdowneditor",
        logo: "&#xe8bc;",
        tag: ["MarkDown", "编辑", "开发", "md", " 文本", "文档", "转换"],
        intro: "这是一款MarkDown编辑器工具，支持实时预览、一键复制等功能。",
        networking: false, time: "2024-12-10"
    },
    {
        title: "汉字转拼音",
        url: "ChineseCharactersToPinyin",
        logo: "&#xe64e;",
        tag: ["转换", "汉字", "拼音", "文本", " 文档", "教育", "益智", "学习"],
        intro: "这是一款汉字转拼音工具，支持输入中文或直接输出拼音。",
        networking: true, time: "2024-12-11"


    }, {
        title: "IP查询",
        url: "IPAddressQuery",
        logo: "&#xe622;",
        tag: ["查询", "IP", "地址", "位置"],

        intro: "这是一款IP查询工具，支持输入IP地址或直接相关信息。",
        networking: true, time: "2024-12-11"
    }, {
        title: "手机号归属地查询",
        url: "PhoneNumberQuery",
        logo: "&#xe63b;",
        tag: ["查询", "手机", "地址", "位置", "手机号", "归属地", "信息"],
        intro: "这是一款手机号归属地查询工具，支持输入手机号码获得相关信息。",
        networking: true, time: "2024-12-11"
    }, {
        title: "天气查询",
        url: "WeatherInquiry",
        logo: "&#xe642;",
        tag: ["查询", "天气", "地址", "位置", "信息"],
        intro: "这是一款天气查询工具，支持输入地址或直接查询相关信息。",
        networking: true, time: "2024-12-12"
    }, {
        title: "ICP备案查询",
        url: "ICPRecordInquiry",
        logo: "&#xe7f2;",
        tag: ["查询", "备案", "地址", "域名", "信息", "ICP", "网站"],
        intro: "这是一款ICP备案查询工具，支持输入域名或直接查询相关注册信息。",
        networking: true, time: "2024-12-12"
    }, {
        title: "获取硬件信息",
        url: "ObtainingHardwareInformation",
        logo: "&#xe6e6;",
        tag: ["查询", "硬件", "信息", "电脑", "操作系统"],
        intro: "这是一款获取硬件信息工具，可查询型号、系统、硬件等参数。",
        networking: false, time: "2024-12-13"
    }, {
        title: "星座运势",
        url: "Horoscope",
        logo: "&#xe69e;",
        tag: ["查询", "星座", "运势", "运势", "日期", "运气"],
        intro: "这是一款可以获取每日星座运势的工具,可以获得运势,益忌,详细说明等信息",
        networking: true, time: "2024-12-14"
    }, {
        title: "今日热点",
        url: "whatshottoday",
        logo: "&#xe704;",
        tag: ["查询", "热点", "新闻", "时事", "时效", "搜索", "热搜"],
        intro: "这是一款可以获取今日热点新闻的工具,可以获得各个平台的热点信息,以及相关新闻",
        networking: true, time: "2024-12-14"
    }, {
        title: "图片格式转换",
        url: "imageformatconversion",
        logo: "",
        tag: ["图片", "格式", "转换", "图像", "编码"],
        intro: "这是一款图片格式转换工具,可以转换图片格式为jpg,png,gif等格式",
        networking: false, time: "2024-12-17"
    }
    , {
        title: "ICO图标转换",
        url: "icoimageformatconversion",
        logo: "",
        tag: ["图片", "格式", "转换", "图像", "编码"],
        intro: "这是一款ICO图标格式转换工具,可以转换图片格式为ico格式",
        networking: false, time: "2024-12-17"
    }
]
export default typelist
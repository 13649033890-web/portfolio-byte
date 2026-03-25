/**
 * ========================================
 * 主脚本 - main.js
 * 八秒土豆丝个人网站
 * ========================================
 */

// ========================================
// 数据配置
// ========================================

// 案例数据
const casesData = [
    {
        id: 1,
        company: '美团',
        title: '广告商业化策略产品',
        shortDesc: '围绕欧洲杯热点设计“智选展位消耗返”活动，完成目标测算、激励策略与流量分发设计，提升广告收入与商户ROI',
        fullDesc: {
            background: '在美团到综娱乐推荐广告场景中，酒吧商户对热点赛事流量高度敏感。欧洲杯期间，平台希望借助赛事热度放大酒吧行业需求，通过“加热—种草—转化”链路提升商户投放意愿，同时带动智选展位广告收入增长。',
            problem: '何在保证商户参与率的同时提升广告收入，并让商户ROI保持成立。为此需要回答三个问题：活动门槛如何设定、给商户什么激励最有效、平台侧如何通过出价和流量分发把热点流量转成稳定收入',
            thinking: '我先从收入来源拆解入手，结合自然流量增长、广告出价提升和活动新增消耗三部分做目标预测，再倒推活动门槛、奖励档位和关键指标。基于测算结果，将方案收束为“消耗返券 + Top资源位激励 + 平台流量扶持”三层机制，既保证商户有参与动力，也保证平台广告收入和商户ROI同步提升。',
            action: '<br>（1）前期分析：围绕欧洲杯场景完成收入来源拆解与目标预测，测算自然流量、ACP、CTR、CVR和ROI变化，确定活动门槛与权益档位。<br>（2）. 策略设计：参与设计“智选展位消耗返”活动，设置5折抵扣券、频道页banner和搜索页sug置顶等激励，并制定智能出价逻辑、晚间流量扶持和Top1/Top10资源位分发规则。<br>（3）. 二期优化：针对运营难以及时判断商户投放状态的问题，进一步搭建投放行为评估模型，用连续投放天数、预算达成率、MoM等指标支持精准触达与后续资源分发。',
            result: '<br>(1)整体广告消耗较活动前增长40%，ROI从2.82提升至2.97；<br>(2)赠送资源位额外带来约10%的订单增长;<br>(3)二期投放行为评估机制上线后，运营触达命中率由43%提升至61%，日均广告收入提升7008元。',
            review: '商业化策略产品的工作方式：不是直接做活动页，而是先拆收入逻辑、做数据预测，再把目标翻译成门槛、激励、出价和流量分发规则，最后通过数据闭环验证效果。相比单点功能设计，更学会了如何把热点事件沉淀成可复用的商业化模板。'
        },
        stats: [
            { value: '+40%', label: '广告消耗增长' },
            { value: '2.97', label: 'ROI 提升' },
            { value: '+7008', label: '日均广告收入' }
        ]
    },
    {
        id: 2,
        company: '阿里巴巴集团-高德地图',
        title: '广告商业化策略产品',
        shortDesc: '围绕“打车到店”创新凭证，先完成需求分析与能力调研，再设计企业打车方案，验证到店客资与广告收入增长',
        fullDesc: {
            background: '在高德本地生活商业化场景中，广告产品的核心难点在于证明转化价值。项目从“出行—客资—交易”这条链路出发，发现到店用户中约23.2%的出行方式为打车，因此团队希望把“打车补贴”设计成一种新的到店凭证：既降低用户到店门槛，又增强商家对到店结果的感知，从而提升客资广告收入，并带动后续交易转化。',
            problem: '用核心问题不是单纯进行打车补贴，而是如何把“出行行为”真正转化成商家可认可、平台可计费的客资。要实现这一点，需要先回答三个问题：<br>第一，高德内部是否具备支撑该项目的打车能力；<br>第二，在企业打车和C端聚合打车之间该如何选型；<br>第三，方案上线后如何保证商家能确认订单、用户能顺畅领取权益、同时整体风险和成本可控。',
            thinking: '（1）重构到店获客链路，优化POI详情页，设计到店激励方案，建立效果追踪体系。<br>（2）与C2打车团队做能力调研，对比企业打车与C端聚合打车在订单归属、商家感知、核销确认、财务结算和能力支持上的差异。<br>（3）最终选择企业打车方案，并通过C端交互优化去弥补其入口不如聚合打车便捷的问题。',
            action: '（1）. 项目初期：协助完成需求分析与收入测算，并独立完成企业打车能力调研、方案对比和 C 端竞品分析。<br>（2）. 方案阶段：参与确认企业打车主子账号模式，推动子账号生成、订单查询和权限限定落地；同时完成打车补贴、留资、订单查看、到店确认等核心链路设计，并补充风控限制规则。<br>（3）. 上线阶段：负责多方协同、试点门店推进、宣讲与客服预案，以及上线后数据复盘，推动项目按“先 B 端、再 C 端”灰度上线。',
            result: '项目在300个试点门店上线后，组件点击率达到5.12%，客资计费率56.38%，日均广告收入2w+，C3 ROI达到30.31，验证了“打车到店”作为创新到店凭证的商业可行性。',
            review: '这段经历让我真正建立了商业化广告产品的完整思考方式：不是先想功能，而是先判断机会是否成立、收益天花板是否足够、选型是否服务于业务本质，再进入产品设计和跨部门推进。相比单纯做页面，我更系统地学会了如何用数据挖掘需求、如何基于“商家可感知/可确认/结果可查验”做方案选型，以及如何在复杂协同里把一个从0到1的创新项目落地。'
        },
        stats: [
            { value: '30.31%', label: 'ROI' },
            { value: '5.12%', label: '组件点击率' },
            { value: '2w+', label: '日均广告收入' }
        ]
    },
    {
        id: 3,
        company: '网易云音乐',
        title: '功能策略产品',
        shortDesc: '围绕内容消费链路优化召回信息栏、播放页与内容分层机制，提升分发效率、消费时长与付费转化。',
        fullDesc: {
            background: '网易云音乐内容生态持续扩张后，用户在“发现内容—判断是否点击—进入播放—产生持续消费或付费”这条链路上的决策成本逐渐升高。尤其在播客等内容场景中，用户往往需要更多信息判断内容质量，平台也需要更高效地把合适内容分发给合适用户。',
            problem: '核心问题不是单点点击率，而是整条内容消费链路存在损耗：<br>一方面，召回阶段信息不足，用户难以快速判断是否值得点击.另一方面，平台已有内容规模和分类复杂度提升，但召回界面与信息呈现方式还不足以支撑用户高效完成判断、播放和后续付费转化。',
            thinking: '我先按照原始需求目标做前置拆解，从需求分析、数据分析、用户分析、行业分析、竞品调研和产品自研几个维度系统梳理问题，再通过定性与定量调研验证真实需求。基于这些分析，我把优化方向收束为三类：<br>第一，在召回阶段补充更高价值的信息，降低用户判断成本；<br>第二，用多级信息界面承接不同内容层级，帮助用户逐步完成选择；<br>第三，优化播放页和商业化承接，提升后续消费与付费效率。',
            action: '（1）项目初期，我先参与前置分析，结合产品链路数据、用户操作数据和业务沟通记录判断问题来源，并通过CID弹窗、运营沟通、短信和内嵌弹窗等方式完成用户调研，累计覆盖317人次，用于确认需求点和问卷方向。<br>（2）随后，我参与竞品调研与需求拆解，围绕召回信息栏、信息界面和收藏等模块梳理功能list，并推动播客召回内容分级展示方案落地，搭建一级、二级、三级信息界面，补充标题、标签、评分、榜单、播放量、评论、发布人等信息，帮助用户在搜索与召回链路中更快完成决策。<br>（3）同时，我也参与播放页商业化版本的信息结构设计，并配合推进字段确认、埋点方案和ABTest验证，保证方案不是停留在体验层，而是能被持续监测和验证。',
            result: '项目上线后，发现-播客DAU提升7.7%，搜索链路中的单集独立展示用户数由14655提升至18273，同时对付费转化也形成了正向拉动，促付费转化率提升 14%。此外，播放器互动率达到 79.02%，人均播放时长拉增989秒，说明召回信息补充与后续承接优化对内容消费效率产生了实际价值。',
            review: '这段经历让我真正建立起“先研究、再设计、再验证”的产品工作方法。相比直接提出优化方案，我更意识到前置分析的重要性：只有先通过数据、用户调研、竞品和业务目标把问题讲清楚，后续的信息栏设计、多级界面搭建和播放页优化才是有依据的。它也让我更系统地理解了内容产品增长不是做一个单点功能，而是围绕用户判断成本、信息承载效率和商业转化路径做完整链路优化。'
        },
        stats: [
            { value: '+7.7%', label: '播客 DAU 提升' },
            { value: '+14%', label: '付费转化率' },
            { value: '989s', label: '人均播放时长' }
        ]
    },
        {
id: 4,
        company: '携程 / 去哪儿',
        title: '搜索策略产品',
        shortDesc: '通过接入C微服务，去哪儿优化了搜索结果的召回和排序策略，大幅提升了搜索点击率和订单转化率，同时解决了长尾意图召回的问题。',
        fullDesc: {
            background: '去哪儿面临着搜索结果精准度和排序算法的瓶颈，尤其在长尾意图的召回和排序上存在较大问题，影响了用户的搜索体验和平台的转化率。。',
            problem: '搜索引擎的分词工具不够准确，导致用户难以精准找到想要的结果。<br>排序机制存在问题，未能根据用户真实需求进行优先排序。<br>长尾意图的召回不准确，导致了大量低质量的数据和用户体验不佳。',
            thinking: '通过接入C微服务，将城市、经纬度、查询词等信息作为核心数据传递给微服务，利用其强大的分词和排序能力，优化搜索召回策略和结果排序，进一步提升转化率和用户体验。',
            action: '（1）微服务接入：引入C微服务，将核心数据城市+经纬度+query传递给微服务，进行精准排序和搜索。<br>（2）优化数据映射：改进数据映射和信息回填于相似度信息过滤等，剔除低质量数据，提升搜索结果的相关性。<br>（3）前端增强：加强了前段渲染层优化，帮助用户在搜索结果中做出决策，从而提升整体的用户体验。',
            result: '点击率提升4.43%，订单转化率提升7.02%，日均订单增长4393单。',
            review: '（1）成功解决了搜索召回和排序的问题，显著提升了用户参与度和订单转化率。<br>（2）在不同业务线，不同页面以及不同意图上，数据情况有所不同，需要精准定位问题根源并给出明确的策略方向。<br>（3）微服务接入后的数据映射优化解决了低质量数据（badcase）问题，进一步提升了搜索精准度和用户体验。'
        },
        stats: [
            { value: '+7.02%', label: '订单转化率' },
            { value: '+4.43%', label: '点击率' },
            { value: '+4393单', label: '日均订单增长' }
        ]
    }
];

// 个人技能数据（多分类框）
const skillsSectionData = {
    title: '个人技能',
    categories: [
        {
            icon: 'fa-file-word',
            label: '办公软件',
            items: 'Word / PPT / Excel'
        },
        {
            icon: 'fa-database',
            label: '数据分析',
            items: 'R / SQL / Stata / SPSS / Python'
        },
        {
            icon: 'fa-pencil-ruler',
            label: '产品设计',
            items: 'Axure / 墨刀 / Sketch'
        },
        {
            icon: 'fa-chart-bar',
            label: '数据可视化',
            items: 'Tableau / Power BI'
        },
        {
            icon: 'fa-award',
            label: '语言证书',
            items: 'CET-6 / 普通话二甲'
        }
    ]
};

// 时间线数据
const timelineData = [
    // ===== 按真实时间顺序，左右交错 =====
    {
        date: '2020.9 — 2024.6',
        title: '西南石油大学 · 经济学',
        desc: '本科期间包揽优秀学生干部、三好学生、优秀毕业生等10余项奖学金与荣誉，在学生工作、体育与文艺活动中全面发展。',
        type: 'major',
        column: 'left'
    },
    {
        date: '2021',
        title: '加入篮球队',
        desc: '开始系统性运动训练，提升身体素质与运动技能，在对抗和协作中收获挚友。',
        type: 'minor',
        column: 'right'
    },
    {
        date: '2022',
        title: '学习街舞',
        desc: '拓展技能与兴趣边界，用节奏与肢体表达自我，发现生活里更自由的表达方式。',
        type: 'minor',
        column: 'right'
    },
    {
        date: '2024.5 — 2024.8',
        title: '美团（北京） · 产品实习',
        desc: '第一次大厂实习，深入互联网业务一线，开启对产品工作的系统认知。',
        type: 'minor',
        column: 'left'
    },
    {
        date: '2024.6',
        title: '第一次徒步',
        desc: '完成人生第一次徒步旅行，在行走中与自然对话，感受到久违的内心宁静与幸福感。',
        type: 'minor',
        column: 'right'
    },
    {
        date: '2024.9 — 2026.6',
        title: '中国人民大学 · 农业经济管理',
        desc: '攻读硕士研究生，获三好学生、优秀学生干部及多项学业奖学金，在更大舞台上持续成长。',
        type: 'major',
        column: 'right'
    },
    {
        date: '2024.9 — 2025.1',
        title: '高德地图（北京） · 产品实习',
        desc: '地图场景下的产品实践，理解LBS业务逻辑与用户出行决策链条。',
        type: 'minor',
        column: 'left'
    },
    {
        date: '2025.3 — 2025.6',
        title: '网易云音乐（杭州） · 产品实习',
        desc: '内容产品领域的深度参与，理解内容生态构建与用户消费心理。',
        type: 'minor',
        column: 'left'
    },
    {
        date: '2025.9',
        title: '独立承担学生工作',
        desc: '开始独立负责多项学生工作，在协调与推进中锻炼组织能力与责任感。',
        type: 'minor',
        column: 'right'
    },
    {
        date: '2025.10 — 2026.1',
        title: '去哪儿旅行（北京） · 搜索策略产品',
        desc: '聚焦搜索策略优化，以数据驱动决策，持续探索用户需求与业务增长的最优路径。',
        type: 'minor',
        column: 'left'
    }
];

// Beyond 数据
const beyondData = [
    {
        icon: 'fa-person-booth',
        title: '街舞',
        subtitle: '节奏 · 表达',
        desc: '用身体说话，在节奏里找到自我。',
        img: 'assets/beyond-dance.jpg'
    },
    {
        icon: 'fa-basketball-ball',
        title: '篮球',
        subtitle: '对抗 · 协作',
        desc: '在对抗中判断，在协作中取胜。',
        img: 'assets/beyond-basketball.jpg'
    },
    {
        icon: 'fa-music',
        title: '音乐',
        subtitle: '情绪 · 陪伴',
        desc: '情绪的出口，孤独时的陪伴。',
        img: 'assets/beyond-music.jpg'
    },
    {
        icon: 'fa-hiking',
        title: '徒步',
        subtitle: '自然 · 探索',
        desc: '走向山野，在行走中整理自己。',
        img: 'assets/beyond-hiking.jpg'
    },
    {
        icon: 'fa-paint-brush',
        title: '画画',
        subtitle: '观察 · 记录',
        desc: '用线条和颜色，留住眼前的瞬间。',
        img: 'assets/beyond-drawing.jpg'
    },
    {
        icon: 'fa-guitar',
        title: '吉他',
        subtitle: '创作 · 弹唱',
        desc: '从分解和弦开始，写自己的歌。',
        img: 'assets/beyond-guitar.jpg'
    },
    {
        icon: 'fa-users',
        title: '学生工作',
        subtitle: '推进 · 协调',
        desc: '持续组织与协同<br>组织过多场校级活动晚会<br>参与人数超千人<br>在实践中沉淀领导力<br>也在变化中学会判断与推进',
        resume: [
            '2020-2022 西南石油大学艺术团骨干',
            '2020-2023 西南石油大学青志协部长',
            '2020-2024 西南石油大学辩论协会理事',
            '2024-2025 中国人民大学党建促进会会长',
            '2024-2026 中国人民大学研究生主席'
        ]
    }
];

// 音乐数据
// 歌曲数据
const playlistData = [
    {
        title: '葡萄成熟时',
        artist: '陈奕迅',
        duration: '4:23',
        audioSrc: 'assets/music/葡萄成熟时.mp3',
    }
];

// ========================================
// DOM 元素引用
// ========================================

const elements = {
    // 导航
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    hamburger: document.getElementById('hamburger'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    
    // 主题（导航栏右上角 浅色/深色）
    navThemeTrack: document.getElementById('navThemeTrack'),
    bgLayer: document.getElementById('bgLayer'),

    // 首页
    scrollHint: document.getElementById('scrollHint'),
    avatarImg: document.getElementById('avatarImg'),
    avatarPlaceholder: document.getElementById('avatarPlaceholder'),
    
    // Work
    casesGrid: document.getElementById('casesGrid'),
    skillsGrid: document.getElementById('skillsGrid'),
    
    // Journey
    timeline: document.getElementById('timeline'),
    
    // Beyond
    beyondGrid: document.getElementById('beyondGrid'),
    
    // Contact
    openContactEmailBtn: document.getElementById('openContactEmailBtn'),
    openContactPhoneBtn: document.getElementById('openContactPhoneBtn'),
    openContactWechatBtn: document.getElementById('openContactWechatBtn'),
    contactEmailModal: document.getElementById('contactEmailModal'),
    contactPhoneModal: document.getElementById('contactPhoneModal'),
    contactWechatModal: document.getElementById('contactWechatModal'),
    modalEmailValue: document.getElementById('modalEmailValue'),
    modalPhoneValue: document.getElementById('modalPhoneValue'),
    modalCopyEmailBtn: document.getElementById('modalCopyEmailBtn'),
    modalCopyPhoneBtn: document.getElementById('modalCopyPhoneBtn'),
    modalCopyWechatBtn: document.getElementById('modalCopyWechatBtn'),
    downloadResumeBtn: document.getElementById('downloadResumeBtn'),
    
    // Music
    audioPlayer: document.getElementById('audioPlayer'),
    playBtn: document.getElementById('playBtn'),
    playIcon: document.getElementById('playIcon'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    progressBar: document.getElementById('progressBar'),
    progress: document.getElementById('progress'),
    progressHandle: document.getElementById('progressHandle'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    trackNameMain: document.getElementById('trackNameMain'),
    artistNameMain: document.getElementById('artistNameMain'),
    vinylDisc: document.getElementById('vinylDisc'),
    stageProgress: document.getElementById('stageProgress'),
    
    // Mode
    dayModeCard: document.getElementById('dayModeCard'),
    nightModeCard: document.getElementById('nightModeCard'),
    dayStatus: document.getElementById('dayStatus'),
    nightStatus: document.getElementById('nightStatus'),
    musicToggle: document.getElementById('musicToggle'),
    motionToggle: document.getElementById('motionToggle'),
    styleBtns: document.querySelectorAll('.style-btn'),
    
    // Modals
    caseModal: document.getElementById('caseModal'),
    caseModalClose: document.getElementById('caseModalClose'),
    caseModalContent: document.getElementById('caseModalContent'),
    prevCaseBtn: document.getElementById('prevCaseBtn'),
    nextCaseBtn: document.getElementById('nextCaseBtn'),
    
    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    
    // Sections
    sections: document.querySelectorAll('.section')
};

// ========================================
// 状态管理
// ========================================

const state = {
    currentTheme: localStorage.getItem('theme') || 'night',
    motionEnabled: localStorage.getItem('motion') !== 'false',
    musicEnabled: localStorage.getItem('music') !== 'false',
    bgStyle: localStorage.getItem('bgStyle') || 'soft',
    currentCaseIndex: 0,
    currentMusicIndex: 0,
    isPlaying: false,
};

// ========================================
// 初始化函数
// ========================================

function init() {
    initTheme();
    initMotion();
    initBgStyle();
    initNavigation();
    initCases();
    initSkills();
    initTimeline();
    initBeyond();
    initContact();
    initMusic();
    initMode();
    initScrollAnimations();
    initAvatar();

    console.log('🌱 八秒土豆丝的网站已就绪');
}

// ========================================
// 主题管理
// ========================================

function initTheme() {
    applyTheme(state.currentTheme);
    initNavThemeSwitch();
}

function setTheme(theme) {
    state.currentTheme = theme;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // 更新 Mode 页面状态
    updateModeCards();

    // 更新导航栏外观切换器
    updateNavThemeSwitch(theme);
}

function initNavThemeSwitch() {
    const track = elements.navThemeTrack;
    if (!track) return;

    track.addEventListener('click', (e) => {
        const rect = track.getBoundingClientRect();
        const mid = rect.left + rect.width / 2;
        const next = e.clientX < mid ? 'day' : 'night';
        if (next !== state.currentTheme) {
            setTheme(next);
        }
    });

    track.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setTheme(state.currentTheme === 'day' ? 'night' : 'day');
            return;
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (state.currentTheme !== 'day') setTheme('day');
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (state.currentTheme !== 'night') setTheme('night');
        }
    });
}

function updateNavThemeSwitch(theme) {
    const track = elements.navThemeTrack;
    if (!track) return;

    track.dataset.theme = theme;
    track.setAttribute('aria-checked', theme === 'night' ? 'true' : 'false');
}

// ========================================
// 动效管理
// ========================================

function initMotion() {
    if (!state.motionEnabled) {
        document.documentElement.classList.add('reduce-motion');
    }
    
    if (elements.motionToggle) {
        elements.motionToggle.checked = state.motionEnabled;
        elements.motionToggle.addEventListener('change', (e) => {
            state.motionEnabled = e.target.checked;
            localStorage.setItem('motion', state.motionEnabled);
            
            if (state.motionEnabled) {
                document.documentElement.classList.remove('reduce-motion');
            } else {
                document.documentElement.classList.add('reduce-motion');
            }
        });
    }
}

// ========================================
// 背景风格管理
// ========================================

function initBgStyle() {
    applyBgStyle(state.bgStyle);
    
    elements.styleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const style = btn.dataset.style;
            state.bgStyle = style;
            applyBgStyle(style);
            localStorage.setItem('bgStyle', style);
            
            // 更新按钮状态
            elements.styleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function applyBgStyle(style) {
    document.body.classList.remove('bg-style-soft', 'bg-style-clean', 'bg-style-minimal');
    document.body.classList.add(`bg-style-${style}`);
}

// ========================================
// 导航管理
// ========================================

function initNavigation() {
    // 滚动时更新导航样式
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 汉堡菜单
    elements.hamburger.addEventListener('click', toggleMobileMenu);
    
    // 移动端导航链接
    elements.mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu(false);
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动提示
    if (elements.scrollHint) {
        elements.scrollHint.addEventListener('click', () => {
            const workSection = document.getElementById('work');
            if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function handleScroll() {
    const scrollY = window.pageYOffset;
    
    // 导航栏滚动效果
    if (elements.navbar) {
        if (scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    }
    
    // 更新导航高亮
    updateActiveNav(scrollY);
}

function updateActiveNav(scrollY) {
    const sections = elements.sections;
    const navLinks = elements.navLinks;
    const mobileLinks = elements.mobileNavLinks;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === currentSection) {
            link.classList.add('active');
        }
    });
    
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function toggleMobileMenu(forceState) {
    const isActive = typeof forceState === 'boolean' ? forceState : !elements.hamburger.classList.contains('active');
    
    elements.hamburger.classList.toggle('active', isActive);
    elements.mobileMenu.classList.toggle('active', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
}

// ========================================
// 案例展示
// ========================================

function initCases() {
    renderCases();
    initCaseModal();
}

function renderCases() {
    if (!elements.casesGrid) return;
    
    elements.casesGrid.innerHTML = casesData.map((item, index) => `
        <div class="case-card" data-case-index="${index}">
            <div class="case-company">
                <i class="fas fa-building"></i>
                <span>${item.company}</span>
            </div>
            <h4 class="case-title">${item.title}</h4>
            <p class="case-description">${item.shortDesc}</p>
            <div class="case-btn">
                <span>查看案例</span>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
    
    // 添加点击事件
    document.querySelectorAll('.case-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.caseIndex);
            openCaseModal(index);
        });
    });
}

function initCaseModal() {
    if (!elements.caseModal) return;
    
    elements.caseModalClose.addEventListener('click', closeCaseModal);
    elements.caseModal.querySelector('.modal-overlay').addEventListener('click', closeCaseModal);
    
    elements.prevCaseBtn.addEventListener('click', () => navigateCase(-1));
    elements.nextCaseBtn.addEventListener('click', () => navigateCase(1));
    
    // ESC 关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.caseModal.classList.contains('active')) {
            closeCaseModal();
        }
    });
}

function openCaseModal(index) {
    state.currentCaseIndex = index;
    renderCaseDetail(casesData[index]);
    elements.caseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCaseModal() {
    elements.caseModal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateCase(direction) {
    let newIndex = state.currentCaseIndex + direction;
    
    if (newIndex < 0) newIndex = casesData.length - 1;
    if (newIndex >= casesData.length) newIndex = 0;
    
    state.currentCaseIndex = newIndex;
    renderCaseDetail(casesData[newIndex]);
}

function renderCaseDetail(data) {
    if (!elements.caseModalContent) return;
    
    elements.caseModalContent.innerHTML = `
        <div class="case-detail">
            <div class="case-detail-header">
                <div class="case-detail-company">${data.company}</div>
                <h3 class="case-detail-title">${data.title}</h3>
            </div>
            
            <div class="case-detail-section">
                <h5>项目背景</h5>
                <p>${data.fullDesc.background}</p>
            </div>
            
            <div class="case-detail-section">
                <h5>核心问题</h5>
                <p>${data.fullDesc.problem}</p>
            </div>
            
            <div class="case-detail-section">
                <h5>我的思考</h5>
                <p>${data.fullDesc.thinking}</p>
            </div>
            
            <div class="case-detail-section">
                <h5>我的动作</h5>
                <p>${data.fullDesc.action}</p>
            </div>
            
            <div class="case-result">
                <h5>项目结果</h5>
                <div class="result-stats">
                    ${data.stats.map(stat => `
                        <div class="result-stat">
                            <span class="stat-value">${stat.value}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="case-detail-section">
                <h5>我的复盘</h5>
                <p>${data.fullDesc.review}</p>
            </div>
        </div>
    `;
}

// ========================================
// 技能展示
// ========================================

function initSkills() {
    const titleEl = document.getElementById('skillsTitle');
    const container = document.getElementById('skillsCategories');
    if (!titleEl || !container) return;

    titleEl.textContent = skillsSectionData.title + '：';
    container.innerHTML = skillsSectionData.categories.map(cat => `
        <div class="skill-cat-card">
            <div class="skill-cat-icon"><i class="fas ${cat.icon}"></i></div>
            <div class="skill-cat-body">
                <div class="skill-cat-label">${cat.label}</div>
                <div class="skill-cat-items">${cat.items}</div>
            </div>
        </div>
    `).join('');
}

// ========================================
// 时间线
// ========================================

function initTimeline() {
    if (!elements.timeline) return;

    elements.timeline.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-item ${item.type === 'major' ? 'timeline-item--major' : 'timeline-item--minor'} timeline-item--${item.column} animate-on-scroll" data-index="${index}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${item.date}</span>
                </div>
                <h4 class="timeline-title">${item.title}</h4>
                <p class="timeline-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// ========================================
// Beyond 页面
// ========================================

function initBeyond() {
    if (!elements.beyondGrid) return;
    
    const regularItems = beyondData.slice(0, 6);
    const studentWorkItem = beyondData[6];
    
    const regularCards = regularItems.map(item => `
        <div class="beyond-card beyond-card--img animate-on-scroll">
            <div class="beyond-img-wrap">
                <img src="${item.img}" alt="${item.title}" class="beyond-img" loading="lazy">
                <div class="beyond-img-overlay">
                    <div class="beyond-img-icon">
                        <i class="fas ${item.icon}"></i>
                    </div>
                </div>
            </div>
            <div class="beyond-body">
                <h4 class="beyond-title">${item.title}</h4>
                <p class="beyond-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
    
    const studentCard = `
        <div class="beyond-card beyond-card--student animate-on-scroll">
            <div class="beyond-student-body">
                <div class="beyond-student-left">
                    <div class="beyond-student-icon">
                        <i class="fas ${studentWorkItem.icon}"></i>
                    </div>
                    <h4 class="beyond-title">${studentWorkItem.title}</h4>
                    <p class="beyond-desc">${studentWorkItem.desc}</p>
                </div>
                <div class="beyond-student-right">
                    <ul class="beyond-resume-list">
                        ${studentWorkItem.resume.map(item => `<li class="beyond-resume-item">${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    elements.beyondGrid.innerHTML = `
        <div class="beyond-grid-top">${regularCards}</div>
        <div class="beyond-student-row">${studentCard}</div>
    `;
}

// ========================================
// 联系页面
// ========================================

function initContact() {
    const contactModals = [
        elements.contactEmailModal,
        elements.contactPhoneModal,
        elements.contactWechatModal
    ].filter(Boolean);
    
    function openContactModal(modal) {
        if (!modal) return;
        contactModals.forEach(m => {
            if (m !== modal) m.classList.remove('active');
        });
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function closeContactModals() {
        contactModals.forEach(m => {
            m.classList.remove('active');
            m.setAttribute('aria-hidden', 'true');
        });
        document.body.style.overflow = '';
    }
    
    function copyText(text, okMsg) {
        if (!text) return;
        navigator.clipboard.writeText(text.trim()).then(() => {
            showToast(okMsg);
        }).catch(() => {
            showToast('复制失败，请手动复制');
        });
    }
    
    elements.openContactEmailBtn?.addEventListener('click', () => {
        openContactModal(elements.contactEmailModal);
    });
    elements.openContactPhoneBtn?.addEventListener('click', () => {
        openContactModal(elements.contactPhoneModal);
    });
    elements.openContactWechatBtn?.addEventListener('click', () => {
        openContactModal(elements.contactWechatModal);
    });
    
    elements.modalCopyEmailBtn?.addEventListener('click', () => {
        copyText(elements.modalEmailValue?.textContent, '邮箱已复制到剪贴板');
    });
    elements.modalCopyPhoneBtn?.addEventListener('click', () => {
        copyText(elements.modalPhoneValue?.textContent, '电话号码已复制到剪贴板');
    });
    elements.modalCopyWechatBtn?.addEventListener('click', () => {
        copyText(elements.modalPhoneValue?.textContent, '手机号已复制到剪贴板');
    });
    
    contactModals.forEach(modal => {
        modal.querySelectorAll('[data-close-contact-modal]').forEach(el => {
            el.addEventListener('click', closeContactModals);
        });
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeContactModals);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const anyOpen = contactModals.some(m => m.classList.contains('active'));
        if (anyOpen) closeContactModals();
    });
    
    if (elements.downloadResumeBtn) {
        elements.downloadResumeBtn.addEventListener('click', () => {
            showToast('正在下载简历...');
        });
    }
}

// ========================================
// 音乐播放器
// ========================================

function initMusic() {
    initPlayerControls();

    // 音乐开关（Mode 页面）
    if (elements.musicToggle) {
        elements.musicToggle.checked = state.musicEnabled;
        elements.musicToggle.addEventListener('change', (e) => {
            state.musicEnabled = e.target.checked;
            localStorage.setItem('music', state.musicEnabled);
            if (!state.musicEnabled && state.isPlaying) {
                pauseMusic();
            }
        });
    }
}

function initPlayerControls() {
    // 播放/暂停
    elements.playBtn?.addEventListener('click', togglePlay);

    // 重新播放（上一首/下一首都归零重播）
    elements.prevBtn?.addEventListener('click', () => {
        seekTo(0);
    });
    elements.nextBtn?.addEventListener('click', () => {
        seekTo(0);
    });

    // 进度条拖动
    elements.progressBar?.addEventListener('click', (e) => {
        if (!state.musicEnabled) return;
        const rect = elements.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        seekTo(percent);
    });

    // 音频事件
    if (elements.audioPlayer) {
        elements.audioPlayer.addEventListener('timeupdate', updateProgressFromAudio);
        elements.audioPlayer.addEventListener('loadedmetadata', () => {
            if (elements.duration) {
                elements.duration.textContent = formatTime(Math.floor(elements.audioPlayer.duration));
            }
        });
        elements.audioPlayer.addEventListener('ended', () => {
            pauseMusic();
            seekTo(0);
        });
    }
}

function togglePlay() {
    if (!state.musicEnabled) {
        showToast('请先开启音乐功能');
        return;
    }

    if (state.isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    if (!state.musicEnabled) {
        showToast('请先开启音乐功能');
        return;
    }

    const song = playlistData[0];
    if (!song) return;

    // 唱片开始旋转
    if (elements.vinylDisc) {
        elements.vinylDisc.classList.add('spinning');
        elements.vinylDisc.classList.remove('paused');
    }

    if (song.audioSrc && elements.audioPlayer) {
        elements.audioPlayer.src = song.audioSrc;
        elements.audioPlayer.play().catch(() => {
            showToast('音频加载失败，请检查文件');
        });
    }

    state.isPlaying = true;
    state.currentMusicIndex = 0;
    updatePlayerUI(true);
}

function pauseMusic() {
    state.isPlaying = false;

    if (elements.vinylDisc) {
        elements.vinylDisc.classList.add('paused');
        elements.vinylDisc.classList.remove('spinning');
    }

    if (elements.audioPlayer) {
        elements.audioPlayer.pause();
    }

    updatePlayerUI(false);
}

function seekTo(percent) {
    if (elements.audioPlayer && elements.audioPlayer.duration) {
        elements.audioPlayer.currentTime = percent * elements.audioPlayer.duration;
    }
    const pct = Math.max(0, Math.min(1, percent)) * 100;
    updateProgress(pct);
}

function updateProgress(percent) {
    if (elements.progress) {
        elements.progress.style.width = `${percent}%`;
    }
    if (elements.progressHandle) {
        elements.progressHandle.style.left = `${percent}%`;
    }
}

function updateProgressFromAudio() {
    if (!elements.audioPlayer || !elements.audioPlayer.duration) return;

    const percent = (elements.audioPlayer.currentTime / elements.audioPlayer.duration) * 100;
    updateProgress(percent);

    if (elements.currentTime) {
        elements.currentTime.textContent = formatTime(Math.floor(elements.audioPlayer.currentTime));
    }
}

function updatePlayerUI(playing) {
    const song = playlistData[0];
    if (!song) return;

    // 更新歌曲信息
    if (elements.trackNameMain) {
        elements.trackNameMain.textContent = song.title;
    }
    if (elements.artistNameMain) {
        elements.artistNameMain.textContent = song.artist;
    }
    if (elements.duration) {
        elements.duration.textContent = song.duration;
    }

    // 更新播放按钮图标
    if (elements.playIcon) {
        elements.playIcon.className = playing ? 'fas fa-pause' : 'fas fa-play';
    }

    // 更新播放键提示
    if (elements.playBtn) {
        elements.playBtn.title = playing ? '暂停' : '播放';
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ========================================
// Mode 页面
// ========================================

function initMode() {
    // 主题卡片点击
    elements.dayModeCard?.addEventListener('click', () => {
        state.currentTheme = 'day';
        applyTheme('day');
        localStorage.setItem('theme', 'day');
    });
    
    elements.nightModeCard?.addEventListener('click', () => {
        state.currentTheme = 'night';
        applyTheme('night');
        localStorage.setItem('theme', 'night');
    });
    
    // 初始化状态显示
    updateModeCards();
    
    // 初始化样式按钮
    elements.styleBtns.forEach(btn => {
        if (btn.dataset.style === state.bgStyle) {
            btn.classList.add('active');
        }
    });
}

function updateModeCards() {
    const isDay = state.currentTheme === 'day';
    
    elements.dayModeCard?.classList.toggle('active', isDay);
    elements.nightModeCard?.classList.toggle('active', !isDay);
    
    // 更新状态指示器
    const dayIndicator = elements.dayStatus?.querySelector('.status-indicator');
    const nightIndicator = elements.nightStatus?.querySelector('.status-indicator');
    const dayText = elements.dayStatus?.querySelector('.status-text');
    const nightText = elements.nightStatus?.querySelector('.status-text');
    
    if (dayIndicator) dayIndicator.classList.toggle('active', isDay);
    if (nightIndicator) nightIndicator.classList.toggle('active', !isDay);
    if (dayText) dayText.textContent = isDay ? '当前使用' : '点击切换';
    if (nightText) nightText.textContent = !isDay ? '当前使用' : '点击切换';
}

// ========================================
// 滚动动画
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// 头像加载
// ========================================

function initAvatar() {
    document.querySelectorAll('img.avatar-img').forEach((avatarImg) => {
        const placeholder = avatarImg.closest('.avatar-wrapper')?.querySelector('.avatar-placeholder');
        avatarImg.addEventListener('load', () => {
            avatarImg.classList.add('loaded');
            if (placeholder) placeholder.style.display = 'none';
        });
        avatarImg.addEventListener('error', () => {
            if (placeholder) placeholder.style.display = 'flex';
        });
        if (!avatarImg.src || avatarImg.src.endsWith('placeholder.jpg')) {
            if (placeholder) placeholder.style.display = 'flex';
        }
    });
}

// ========================================
// 工具函数
// ========================================

function showToast(message) {
    if (!elements.toast || !elements.toastMessage) return;
    
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('active');
    
    setTimeout(() => {
        elements.toast.classList.remove('active');
    }, 3000);
}

// ========================================
// 启动
// ========================================

document.addEventListener('DOMContentLoaded', init);

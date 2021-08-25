/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: '首页',
        DESIGNER: '船舶设计师',
        CALCULATOR: '> 计算器',
        SHIP_CALCULATOR: '普通船舶',
        CAPT_CALCULATOR: '主力舰',
        MAP: '地图',
        MORE: '更多',
        YOLOL: 'Yolol',
        CONTACT: '联系',
        OPTIONS: '选项',
        OPTIONS_LANGUAGE: '> 更改语言',
        OPTIONS_EXTRA_TITLE: '> 其他',
        OPTIONS_CHANGELOG: '更新日志'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: '社区网页工具',
        HEADLINE_SUB: '( 非官方的 )',
        HEADLINE_DESCRIPTION: '在Starbase中生存所需的一切!',

        DEVELOPER_NOTE: '工具制作 ',
        DEVELOPER_NOTE_BY: ' 来自 ',
        DEVELOPER_NOTE_LIKE: '喜欢我的作品?',
        DEVELOPER_NOTE_COFFEE: '给我买杯咖啡'
    },

    // ---------------------------
    // PAGE: Spaceship-Calculator
    SHIP_CALC: {
        WARNING: {
            HEADLINE: '警告: ',
            SUBLINE: '一切都可能发生变化. ',
            VERSION: '当前版本: '
        },
        
        CARD: {
            TRUSTER_TITLE: '推进器',
            PROP_FUEL_ENERGY_TITLE: '燃料和能源',
            WEIGHT_MISC_TITLE: '重量和货物',
            TOOLS_TITLE: '工具',
            WEAPON_TITLE: '武器',
            CALCULATION_TITLE: '推算结果'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: '你的船舶推算结果链接准备就绪.',
            SHIP_CALC_COPY_CLIPBOARD: '复制到剪贴板',
            SAVE_BUTTON: '保存数据',
            RESET_BUTTON: '重置'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: '效率',
            EFFICIENCY_THRUSTER: '推进器效率',
            EFFICIENCY_TOOLTIP: '100%的效率只有在你的船完全对称的情况下才能达到，这几乎是不可能的。',
            FORWARD_THRUSTER: '前进推进器',
            BACKWARD_THRUSTER: '后退推进器',
            MANEUVER_THRUSTER: '机动推进器',
            BOX_T1: '箱式推进器 T1',
            BOX_T2: '箱式推进器 T2',
            BOX_T3: '箱式推进器 T3',
            TRIANGLE_T1: '三角推进器 T1',
            TRIANGLE_T2: '三角推进器 T2',
            TRIANGLE_T3: '三角推进器 T3',
            MANEUVER_T1: '机动推进器 T1',
            MANEUVER_T2: '机动推进器 T2',
            MANEUVER_T3: '机动推进器 T3',
            PLASMA_BODY: '等离子体推进器 主体',
            PLASMA_RING: '等离子体推进器 环'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: '推进剂罐',
            PROPELLANT_T1: '小型推进剂罐',
            PROPELLANT_T2: '中型推进剂罐',
            PROPELLANT_T3: '大型推进剂罐'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: '燃烧室',
            FUEL_CHAMBER_T1: '燃烧室 T1',
            FUEL_CHAMBER_T2: '燃烧室 T2',
            FUEL_CHAMBER_T3: '燃烧室 T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: '发电机',
            GENERATOR_T1: '发电机 T1',
            GENERATOR_T2: '发电机 T2',
            GENERATOR_T3: '发电机 T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: '电池',
            BATTERY_T1: '小型电池'
        },

        COOLING: {
            COOLING_HEADLINE: '冷却',
            RADIATOR_BASE: '冷却器基础',
            RADIATOR_EXTENSION: '冷却器拓展',
            COOLING_RACK: '冷却架'
        },

        WEIGHT_CARGO: {
            WEIGHT: '总重量（吨）',
            WEIGHT_TOOLTIP: '你可以尝试用[P]拾取你的船舶，它会提示你船舶的重量(tons=kg/1000)',
            CRATES: '矿箱的数量'
        },

        TOOLS: {
            MINING_LASER: '矿用激光器',
            MINING_BATTERY_TIME: '电池供应时间（秒）',
            ORE_COLLECTOR: '矿石收集器',
            MATERIAL_SCANNER: '材料点扫描仪',
            LASER_DESIGNATOR: '激光指示器',
            RANGEFINDER: '测距仪'
        },

        WEAPON: {
            AUTO_CANNON: '自动加农炮',
            LASER_CANNON: '激光炮',
            PLASMA_CANNON: '离子炮',
            RAIL_CANNON: '轨道炮'
        },

        CALCULATION: {
            SPEED: '速度',
            FORWARD_SPEED: '前进速度',
            BACKWARD_SPEED: '后退速度',
            FORWARD_SPEED_HALF: '前进速度（半箱）',
            FORWARD_SPEED_FULL: '前进速度（满箱）',

            FORWARD_SPEED_HALF_TOOLTIP: '半箱按矿石粗平均重量（15t/stack）计算',
            FORWARD_SPEED_FULL_TOOLTIP: '满箱按矿石的最高重量计算（26t/stack-Lukium）',

            FLIGHT_TIME_HEAD: '飞行时长',
            FLIGHT_TIME: '飞行时长',
            FLIGHT_TIME_FUEL: '燃料',
            FLIGHT_TIME_PROP: '推进剂',
            FLIGHT_TIME_TOOLTIP: '飞行时间以全向前推力和半机动推力计算.',

            FLIGHT_LENGTH: '飞行距离',
            FLIGHT_LENGTH_HALF: '飞行距离（半箱）',
            FLIGHT_LENGTH_FULL: '飞行距离 (满箱)',

            THRUST: '推力',
            FORWARD_THRUST: '总前进推力',
            BACKWARD_THRUST: '总后退推力',
            MANEUVER_THRUST: '总机动推力',

            FUEL_ENERGY: '能源/燃料',
            TOTAL_PROPELLANT: '总推进剂',
            TOTAL_FUEL: '总燃料',

            TOTAL_HEAT_HEAD: '发热',
            TOTAL_HEAT_SUB: '(估计)',
            TOTAL_HEAT_TOOLTIP: '热量是在一台发电机与另一台发电机相邻的情况下计算的。基本上每个发电机增加25的热量.',
            TOTAL_COOLING: '散热',

            ENERGY_GEN: '能量生成',
            ENERGY_DRAIN_IDLE: '能量消耗 (空闲)',
            ENERGY_DRAIN_THRUSTER: '能量消耗 (推进器)',
            ENERGY_DRAIN_TOOLS: '能量消耗 (工具)',
            ENERGY_DRAIN_WEAPONS: '能量消耗 (武器)',

            MINING_BATTERYS: '矿用激光最小电池数'
        }
    },
    
    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: '主力舰计算器',
        HEADLINE_SUB: '是的...与普通船舶计算相同，但适用于主力舰',
        WIP: '对不起！还没有完成 :)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Yolol 代码',
        HEADLINE_SUB: '有用的 yolol 代码和调试/开发工具集合',
        WIP: '对不起！还没有完成 :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: '交互式地图',
        HEADLINE_SUB: 'Starbase完整详细的银河地图',
        WIP: '对不起！还没有完成 :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: '联系方式',
        HEADLINE_SUB: '没错，就是我...',
        ABOUT_TITLE: '关于我',
        ABOUT_TEXT: '嘿，我是PoLLi。我做了这个有点功能的网站..',
        CONTACT_TEXT: '如果您想与我联系，您可以通过下面列出的方式.',
        CHANNELS: '频道',
        PERSONAL_DISCORD: '个人Discord: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: '个人 Github: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: '社交',
        PERSONAL_SOCIAL: '个人: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: '更新日志',
        HEADLINE_SUB: '嗯……是的，这就是你所期望的'
    }
};

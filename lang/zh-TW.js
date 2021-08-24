/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: '首頁',
        DESIGNER: '船舶設計師',
        CALCULATOR: '> 計算器',
        SHIP_CALCULATOR: '普通船舶',
        CAPT_CALCULATOR: '主力艦',
        MAP: '地圖',
        MORE: '更多',
        YOLOL: 'Yolol',
        CONTACT: '聯絡',
        OPTIONS: '選項',
        OPTIONS_LANGUAGE: '> 更改語言',
        OPTIONS_EXTRA_TITLE: '> 其他',
        OPTIONS_CHANGELOG: '更新日誌'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: '社區網頁工具',
        HEADLINE_SUB: '( 非官方的 )',
        HEADLINE_DESCRIPTION: '在Starbase中生存所需的一切!',

        DEVELOPER_NOTE: '工具製作 ',
        DEVELOPER_NOTE_BY: ' 來自 ',
        DEVELOPER_NOTE_LIKE: '喜歡我的作品?',
        DEVELOPER_NOTE_COFFEE: '給我買杯咖啡'
    },

    // ---------------------------
    // PAGE: Spaceship-Calculator
    SHIP_CALC: {
        WARNING: {
            HEADLINE: '警告: ',
            SUBLINE: '一切都可能發生的變化. ',
            VERSION: '當前版本: '
        },
        
        CARD: {
            TRUSTER_TITLE: '推進器',
            PROP_FUEL_ENERGY_TITLE: '燃料和能源',
            WEIGHT_MISC_TITLE: '重量和貨物',
            TOOLS_TITLE: '工具',
            WEAPON_TITLE: '武器',
            CALCULATION_TITLE: '推算結果'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: '你的船舶推算結果鏈接準備就緒.',
            SHIP_CALC_COPY_CLIPBOARD: '複製到剪貼板',
            SAVE_BUTTON: '保存數據',
            RESET_BUTTON: '重置'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: '效率',
            EFFICIENCY_THRUSTER: '推進器效率',
            EFFICIENCY_TOOLTIP: '100%的效率只有在你的船完全對稱的情況下才能達到，這幾乎是不可能的。',
            FORWARD_THRUSTER: '前進推進器',
            BACKWARD_THRUSTER: '後退推進器',
            MANEUVER_THRUSTER: '機動推進器',
            BOX_T1: '箱式推進器 T1',
            BOX_T2: '箱式推進器 T2',
            BOX_T3: '箱式推進器 T3',
            TRIANGLE_T1: '三角推進器 T1',
            TRIANGLE_T2: '三角推進器 T2',
            TRIANGLE_T3: '三角推進器 T3',
            MANEUVER_T1: '機動推進器 T1',
            MANEUVER_T2: '機動推進器 T2',
            MANEUVER_T3: '機動推進器 T3',
            PLASMA_BODY: '等離子體推進器 主體',
            PLASMA_RING: '等離子體推進器 環'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: '推進劑罐',
            PROPELLANT_T1: '小型推進劑罐',
            PROPELLANT_T2: '中型推進劑罐',
            PROPELLANT_T3: '大型推進劑罐'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: '燃燒室',
            FUEL_CHAMBER_T1: '燃燒室 T1',
            FUEL_CHAMBER_T2: '燃燒室 T2',
            FUEL_CHAMBER_T3: '燃燒室 T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: '發電機',
            GENERATOR_T1: '發電機 T1',
            GENERATOR_T2: '發電機 T2',
            GENERATOR_T3: '發電機 T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: '電池',
            BATTERY_T1: '小型電池'
        },

        COOLING: {
            COOLING_HEADLINE: '冷卻',
            RADIATOR_BASE: '冷卻器基礎',
            RADIATOR_EXTENSION: '冷卻器拓展',
            COOLING_RACK: '冷卻架'
        },

        WEIGHT_CARGO: {
            WEIGHT: '總重量（噸）',
            WEIGHT_TOOLTIP: '你可以嘗試用[P]拾取你的船舶，它會提示你船舶的重量(tons=kg/1000)',
            CRATES: '礦箱的數量'
        },

        TOOLS: {
            MINING_LASER: '礦用激光器',
            MINING_BATTERY_TIME: '電池供應時間（秒）',
            ORE_COLLECTOR: '礦石收集器',
            MATERIAL_SCANNER: '材料點掃描儀',
            LASER_DESIGNATOR: '激光指示器',
            RANGEFINDER: '測距儀'
        },

        WEAPON: {
            AUTO_CANNON: '自動加農炮',
            LASER_CANNON: '激光炮',
            PLASMA_CANNON: '離子炮',
            RAIL_CANNON: '軌道炮'
        },

        CALCULATION: {
            SPEED: '速度',
            FORWARD_SPEED: '前進速度',
            BACKWARD_SPEED: '後退速度',
            FORWARD_SPEED_HALF: '前進速度（半箱）',
            FORWARD_SPEED_FULL: '前進速度（滿箱）',

            FORWARD_SPEED_HALF_TOOLTIP: '半箱按礦石粗平均重量（15t/stack）計算',
            FORWARD_SPEED_FULL_TOOLTIP: '滿箱按礦石的最高重量計算（26t/stack-Lukium）',

            FLIGHT_TIME_HEAD: '飛行時長',
            FLIGHT_TIME: '飛行時長',
            FLIGHT_TIME_FUEL: '燃料',
            FLIGHT_TIME_PROP: '推進劑',
            FLIGHT_TIME_TOOLTIP: '飛行時間以全向前推力和半機動推力計算.',

            FLIGHT_LENGTH: '飛行距離',
            FLIGHT_LENGTH_HALF: '飛行距離（半箱）',
            FLIGHT_LENGTH_FULL: '飛行距離 (滿箱)',

            THRUST: '推力',
            FORWARD_THRUST: '總前進推力',
            BACKWARD_THRUST: '總後退推力',
            MANEUVER_THRUST: '總機動推力',

            FUEL_ENERGY: '能源/燃料',
            TOTAL_PROPELLANT: '總推進劑',
            TOTAL_FUEL: '總燃料',

            TOTAL_HEAT_HEAD: '發熱',
            TOTAL_HEAT_SUB: '(估計)',
            TOTAL_HEAT_TOOLTIP: '熱量是在一台發電機與另一台發電機相鄰的情況下計算的。基本上每個發電機增加25的熱量.',
            TOTAL_COOLING: '散熱',

            ENERGY_GEN: '能量生成',
            ENERGY_DRAIN_IDLE: '能量消耗 (空閒)',
            ENERGY_DRAIN_THRUSTER: '能量消耗 (推進器)',
            ENERGY_DRAIN_TOOLS: '能量消耗 (工具)',
            ENERGY_DRAIN_WEAPONS: '能量消耗 (武器)',

            MINING_BATTERYS: '礦用激光最小電池數'
        }
    },
    
    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: '主力艦計算器',
        HEADLINE_SUB: '是的...與普通船舶計算相同，但適用於主力艦',
        WIP: '對不起！還沒有完成:)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Yolol 代碼',
        HEADLINE_SUB: '有用的 yolol 代碼和調試/開發工具集合',
        WIP: '對不起！還沒有完成 :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: '交互式地圖',
        HEADLINE_SUB: 'Starbase完整詳細的銀河地圖',
        WIP: '對不起！還沒有完成 :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: '聯絡方式',
        HEADLINE_SUB: '沒錯，就是我...',
        ABOUT_TITLE: '關於我',
        ABOUT_TEXT: '嘿，我是PoLLi。我做了這個有點功能的網站..',
        CONTACT_TEXT: '如果您想與我聯繫，您可以通過下面列出的方式.',
        CHANNELS: '頻道',
        PERSONAL_DISCORD: '個人Discord: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: '個人 Github: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: '社交',
        PERSONAL_SOCIAL: '個人: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: '更新日誌',
        HEADLINE_SUB: '嗯……是的，這就是你所期望的'
    }
};

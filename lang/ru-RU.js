/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Главная',
        DESIGNER: 'Проектирование кораблей',
        CALCULATOR: '> Калькулятор',
        SHIP_CALCULATOR: 'Обычный корабль',
        CAPT_CALCULATOR: 'Большой корабль',
        MAP: 'Карта',
        MORE: 'Больше',
        YOLOL: 'Yolol',
        CONTACT: 'Контакты',
        OPTIONS: 'Настройки',
        OPTIONS_LANGUAGE: '> Сменить язык',
        OPTIONS_EXTRA_TITLE: '> Прочее',
        OPTIONS_CHANGELOG: 'История обновлений'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Инструменты сообщества',
        HEADLINE_SUB: '( неофициальные )',
        HEADLINE_DESCRIPTION: 'Всё необходимое для выживания в Starbase!',

        DEVELOPER_NOTE: 'Made with ',
        DEVELOPER_NOTE_BY: ' by ',
        DEVELOPER_NOTE_LIKE: 'Нравится моя работа?',
        DEVELOPER_NOTE_COFFEE: 'Купите мне кофе'
    },

    // ---------------------------
    // PAGE: Spaceship-Calculator
    SHIP_CALC: {
        WARNING: {
            HEADLINE: 'ВНИМАНИЕ: ',
            SUBLINE: 'Почти всё может поменяться. ',
            VERSION: 'Текущая версия: '
        },

        CARD: {
            TRUSTER_TITLE: 'Двигатели',
            PROP_FUEL_ENERGY_TITLE: 'Топливо и энергия',
            WEIGHT_MISC_TITLE: 'Масса и груз',
            TOOLS_TITLE: 'Инструменты',
            WEAPON_TITLE: 'Оружие',
            CALCULATION_TITLE: 'Расчёт'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'Ссылка на расчёт готова.',
            SHIP_CALC_COPY_CLIPBOARD: 'Скопировать',
            SAVE_BUTTON: 'СОХРАНИТЬ',
            RESET_BUTTON: 'СБРОСИТЬ'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: 'Эффективность',
            EFFICIENCY_THRUSTER: 'КПД двигателей',
            EFFICIENCY_TOOLTIP: '100% КПД достижим только при идеальной симметрии корабля',
            FORWARD_THRUSTER: 'Маршевые двигатели',
            BACKWARD_THRUSTER: 'Двигатели заднего хода',
            MANEUVER_THRUSTER: 'Маневровые двигатели',
            BOX_T1: 'Прямоугольный двигатель T1',
            BOX_T2: 'Прямоугольный двигатель T2',
            BOX_T3: 'Прямоугольный двигатель T3',
            TRIANGLE_T1: 'Треугольный двигатель T1',
            TRIANGLE_T2: 'Треугольный двигатель T2',
            TRIANGLE_T3: 'Треугольный двигатель T3',
            MANEUVER_T1: 'Маневровый двигатель T1',
            MANEUVER_T2: 'Маневровый двигатель T2',
            MANEUVER_T3: 'Маневровый двигатель T3',
            PLASMA_BODY: 'Основание плазменного двигателя',
            PLASMA_RING: 'Кольцо плазменного двигателя'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: 'Топливные баки',
            PROPELLANT_T1: 'Малый топливный бак',
            PROPELLANT_T2: 'Средний топливный бак',
            PROPELLANT_T3: 'Большой топливный бак'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: 'Топливные камеры генератора',
            FUEL_CHAMBER_T1: 'Топливная камера генератора T1',
            FUEL_CHAMBER_T2: 'Топливная камера генератора T2',
            FUEL_CHAMBER_T3: 'Топливная камера генератора T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: 'Генераторы',
            GENERATOR_T1: 'Генератор T1',
            GENERATOR_T2: 'Генератор T2',
            GENERATOR_T3: 'Генератор T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: 'Аккумуляторы',
            BATTERY_T1: 'Малый аккумулятор'
        },

        COOLING: {
            COOLING_HEADLINE: 'Охлаждение',
            RADIATOR_BASE: 'Основание радиатора',
            RADIATOR_EXTENSION: 'Удлинение радиатора',
            COOLING_RACK: 'Охлаждающая стойка'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Общая масса (тонны)',
            WEIGHT_TOOLTIP: 'Вы можете узнать массу корабля, попытавшись его подобрать [P].',
            CRATES: 'Количество ящиков для руды'
        },

        TOOLS: {
            MINING_LASER: 'Шахтёрский лазер',
            MINING_BATTERY_TIME: 'Желаемое время работы от батарей (секунды)',
            ORE_COLLECTOR: 'Сборщик руды',
            MATERIAL_SCANNER: 'Точечный сканер материала',
            LASER_DESIGNATOR: 'Лазерный целеуказатель',
            RANGEFINDER: 'Дальномер'
        },

        WEAPON: {
            AUTO_CANNON: 'Автопушки',
            LASER_CANNON: 'Лазерные пушки',
            PLASMA_CANNON: 'Плазменные пушки',
            RAIL_CANNON: 'Рельсотроны'
        },

        CALCULATION: {
            SPEED: 'Скорость',
            FORWARD_SPEED: 'Скорость вперёд',
            BACKWARD_SPEED: 'Скорость назад',
            FORWARD_SPEED_HALF: 'Скорость вперёд (половинная загрузка)',
            FORWARD_SPEED_FULL: 'Скорость вперёд (полная загрузка)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Половинная загрузка считается по средней массе руды (15т/стак)',
            FORWARD_SPEED_FULL_TOOLTIP: 'Полная загрузка считается по самой тяжёлой руде (26т/стак - Лукий)',

            FLIGHT_TIME_HEAD: 'Продолжительность полёта',
            FLIGHT_TIME: 'Продолжительность полёта',
            FLIGHT_TIME_FUEL: 'Топливо',
            FLIGHT_TIME_PROP: 'Жидкое топливо',
            FLIGHT_TIME_TOOLTIP: 'Время считается при полном газе и 50% нагрузке на маневровые двигатели',

            FLIGHT_LENGTH: 'Дальность полёта',
            FLIGHT_LENGTH_HALF: 'Дальность полёта (половинная загрузка)',
            FLIGHT_LENGTH_FULL: 'Дальность полёта (полная загрузка)',

            THRUST: 'Тяга',
            FORWARD_THRUST: 'Суммарная тяга вперёд',
            BACKWARD_THRUST: 'Суммарная тяга назад',
            MANEUVER_THRUST: 'Суммарная маневровая тяга',

            FUEL_ENERGY: 'Энергия и топливо',
            TOTAL_PROPELLANT: 'Всего жидкого топлива',
            TOTAL_FUEL: 'Всего топлива в стержнях',

            TOTAL_HEAT_HEAD: 'Выделяемое тепло',
            TOTAL_HEAT_SUB: '(приблизительно)',
            TOTAL_HEAT_TOOLTIP: 'Тепло расчитано как если бы генераторы были присоеденены друг к дуруг. Обычно +25 тепла на каждый следующий генератор',
            TOTAL_COOLING: 'Рассеивание тепла',

            ENERGY_GEN: 'Выработка энергии',
            ENERGY_DRAIN_IDLE: 'Потребление энергии (В простое)',
            ENERGY_DRAIN_THRUSTER: 'Потребление энергии (Двигатели)',
            ENERGY_DRAIN_TOOLS: 'Потребление энергии (Инструменты)',
            ENERGY_DRAIN_WEAPONS: 'Потребление энергии (Оружие)',

            MINING_BATTERYS: 'Минимальное количество аккумуляторов для шахтёрских лазеров'
        }
    },
    
    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: 'Калькулятор больших кораблей',
        HEADLINE_SUB: 'Нууу... Это также, как для обычных, но только для больших.',
        WIP: 'Извините! Ещё не готово :)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Yolol',
        HEADLINE_SUB: 'Коллекция полезных yolol-скриптов и инструментов для разработки.',
        WIP: 'Ещё не готово! Загляните позже :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: 'Интерактивная карта',
        HEADLINE_SUB: 'Детальная карта галактики Starbase',
        WIP: 'Ещё не готово! Следите за обновлениями :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: 'Контакты',
        HEADLINE_SUB: 'Да, это я...',
        ABOUT_TITLE: 'Обо мне',
        ABOUT_TEXT: 'Привет, я PoLLi. И я сделал сайт, который работает...',
        CONTACT_TEXT: 'Если вы хотите связаться со мной, вы можете это сделать по следующим ссылкам.',
        CHANNELS: 'Каналы',
        PERSONAL_DISCORD: 'Личный Discord: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: 'Личный Github: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: 'Соцсети',
        PERSONAL_SOCIAL: 'Twitter: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: 'История изменений',
        HEADLINE_SUB: 'Это именно то, что написано в заголовке :)'
    }
};

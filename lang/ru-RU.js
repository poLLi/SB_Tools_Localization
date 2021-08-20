/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Главная',
        DESIGNER: 'Расчитать корабль',
        MAP: 'Карта',
        MORE: 'Больше',
        DATABASE: 'База знаний',
        CONTACT: 'Контакты',
        OPTIONS_EXTRA_TITLE: '> Прочее',
        OPTIONS_CHANGELOG: 'Что нового'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Web-Утилиты от/для сообщества',
        HEADLINE_DESCRIPTION: 'Всё что тебе нужно, чтобы выжить в Starbase!'
    },

    // ---------------------------
    // PAGE: Ship-Designer
    DESIGNER: {
        CARD: {
            TRUSTER_TITLE: 'Двигатели',
            PROP_FUEL_ENERGY_TITLE: 'Топливо и энергия',
            WEIGHT_MISC_TITLE: 'Масса и груз',
            TOOLS_TITLE: 'Инструменты',
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
            EFFICIENCY_THRUSTER: 'Эффективность двигателей',
            EFFICIENCY_TOOLTIP: '100% Эффективность достижима только при идеальной симметрии корабля, что почти невозможно.',
            FORWARD_THRUSTER: 'Маршевый двигатель',
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
            PLASMA_BODY: 'Корпус плазменного двигателя',
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
            WEIGHT: 'Общий вес в тоннах (пустой)',
            CRATES: 'Количество ящиков для руды'
        },

        CALCULATION: {
            SPEED: 'Скорость',
            FORWARD_SPEED: 'Скорость вперёд',
            BACKWARD_SPEED: 'Скорость назад',
            FORWARD_SPEED_HALF: 'Скорость вперёд (половинная загрузка)',
            FORWARD_SPEED_FULL: 'Скорость вперёд (полная загрузка)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Половинная загрузка считается по средней массе руды (15т/стак)',
            FORWARD_SPEED_FULL_TOOLTIP: 'Полная загрузка считается по самой тяжёлой руде (26т/стак - Лукий)',

            FLIGHT_TIME_HEAD: 'Время полёта',
            FLIGHT_TIME_SUB: '(Топливо)',
            FLIGHT_TIME: 'Время полёта',
            FLIGHT_TIME_TOOLTIP: 'Время считается при полном газе и 50% нагрузке на маневровые двигатели',

            FLIGHT_LENGTH: 'Дальность полёта',
            FLIGHT_LENGTH_HALF: 'Дальнвиннаяость полёта (половинная загрузка)',
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
            TOTAL_COOLING: 'Рассеивание тепла'
        },

        TOOLS: {
            MINING_LASER: 'Шахтёрский лазер',
            ORE_COLLECTOR: 'Сборщик руды',
            MATERIAL_SCANNER: 'Точечный сканер материала',
            LASER_DESIGNATOR: 'Лазерный целеуказатель',
            RANGEFINDER: 'Дальномер'
        }
    }
};

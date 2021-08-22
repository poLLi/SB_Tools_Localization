/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Início',
        DESIGNER: 'Calculadora-de-Naves',
        MAP: 'Mapa',
        MORE: 'Mais',
        YOLOL: 'Yolol',
        DATABASE: 'Banco de Dados',
        CONTACT: 'Contato',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Atualizações'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Ferramentas Online da Comunidade',
        HEADLINE_DESCRIPTION: 'Tudo que você precisa para sobreviver dentro de Starbase!'
    },

    // ---------------------------
    // PAGE: Ship-Designer
    DESIGNER: {
        CARD: {
            TRUSTER_TITLE: 'Propulsor',
            PROP_FUEL_ENERGY_TITLE: 'Combustível e Energia',
            WEIGHT_MISC_TITLE: 'Peso e Carga',
            TOOLS_TITLE: 'Ferramentas',
            WEAPON_TITLE: 'Armas',
            CALCULATION_TITLE: 'Cálculo'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'A URL do Cálculo de sua Nave está pronta!.',
            SHIP_CALC_COPY_CLIPBOARD: 'Copiar para a Área de Transferência',
            SAVE_BUTTON: 'SALVAR DADOS',
            RESET_BUTTON: 'REINICIAR'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: 'Eficiência',
            EFFICIENCY_THRUSTER: 'Eficiência dos Propulsores',
            EFFICIENCY_TOOLTIP: '100% de eficiência só é possível se sua nave for completamente simétrica, o que é praticamente impossível de se conseguir.',
            FORWARD_THRUSTER: 'Propulsores para Frente',
            BACKWARD_THRUSTER: 'Propulsores para Trás',
            MANEUVER_THRUSTER: 'Propulsores de Manobra',
            BOX_T1: 'Propulsor de Caixa T1',
            BOX_T2: 'Propulsor de Caixa T2',
            BOX_T3: 'Propulsor de Caixa T3',
            TRIANGLE_T1: 'Propulsor Triangular T1',
            TRIANGLE_T2: 'Propulsor Triangular T2',
            TRIANGLE_T3: 'Propulsor Triangular T3',
            MANEUVER_T1: 'Propulsor de Manobra T1',
            MANEUVER_T2: 'Propulsor de Manobra T2',
            MANEUVER_T3: 'Propulsor de Manobra T3',
            PLASMA_BODY: 'Corpo do Propulsor de Plasma',
            PLASMA_RING: 'Anel do Propulsor de Plasma'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: 'Tanque de Propelente',
            PROPELLANT_T1: 'Tanque Propelente Pequeno',
            PROPELLANT_T2: 'Tanque Propelente Médio',
            PROPELLANT_T3: 'Tanque Propelente Grande'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: 'Câmara de Combustível',
            FUEL_CHAMBER_T1: 'Câmara de Combustível T1',
            FUEL_CHAMBER_T2: 'Câmara de Combustível T2',
            FUEL_CHAMBER_T3: 'Câmara de Combustível T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: 'Gerador',
            GENERATOR_T1: 'Gerador T1',
            GENERATOR_T2: 'Gerador T2',
            GENERATOR_T3: 'Gerador T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: 'Bateria',
            BATTERY_T1: 'Bateria Pequena'
        },

        COOLING: {
            COOLING_HEADLINE: 'Resfriamento',
            RADIATOR_BASE: 'Base de Radiador',
            RADIATOR_EXTENSION: 'Extensão de Radiador',
            COOLING_RACK: 'Prateleira de Resfriamento'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Peso total em toneladas',
            WEIGHT_TOOLTIP: 'Você pode ver o peso de sua nave ao tentar pegá-lo pressionando [P]. (toneladas = kg/1000)',
            CRATES: 'Número de Caixas de Minério'
        },

        TOOLS: {
            MINING_LASER: 'Laser de Mineração',
            MINING_BATTERY_TIME: 'Tempo de suporte da bateria em segundos',
            ORE_COLLECTOR: 'Coletor de Minérios',
            MATERIAL_SCANNER: 'Scanner de Ponto para Materiais',
            LASER_DESIGNATOR: 'Designador a Laser',
            RANGEFINDER: 'Telêmetro'
        },

        WEAPON: {
            AUTO_CANNON: 'Canhão Automático',
            LASER_CANNON: 'Canhão à Laser',
            PLASMA_CANNON: 'Canhão de Plasma',
            RAIL_CANNON: 'Canhão Elétrico'
        },

        CALCULATION: {
            SPEED: 'Velocidade',
            FORWARD_SPEED: 'Velocidade à frente',
            BACKWARD_SPEED: 'Velocidade de Ré',
            FORWARD_SPEED_HALF: 'Velocidade à frente (Meias Caixas)',
            FORWARD_SPEED_FULL: 'Velocidade à frente (Caixas cheias)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Meias Caixas são calculadas com o peso médio aproximado de minérios (15t / pilha) ',
            FORWARD_SPEED_FULL_TOOLTIP: 'Caixas Cheias são calculadas com o peso médio aproximado de minérios (26t / pilha - Lukium) ',

            FLIGHT_TIME_HEAD: 'Tempo de Voo',
            FLIGHT_TIME: 'Tempo de Voo',
            FLIGHT_TIME_FUEL: 'Combustível',
            FLIGHT_TIME_PROP: 'Propelente',
            FLIGHT_TIME_TOOLTIP: 'Tempo de Voo é calulado considerando Força total à frente e metade de Força de manobra.',

            FLIGHT_LENGTH: 'Distância de Voo',
            FLIGHT_LENGTH_HALF: 'Distância de Voo (Meias Caixas)',
            FLIGHT_LENGTH_FULL: 'Distância de Voo (Caixas cheias)',

            THRUST: 'Impulso',
            FORWARD_THRUST: 'Impulso Total para Frente ',
            BACKWARD_THRUST: 'Impulso Total para Trás ',
            MANEUVER_THRUST: 'Impulso Total para Manobra',

            FUEL_ENERGY: 'Energia / Combustível',
            TOTAL_PROPELLANT: 'Propelente Total',
            TOTAL_FUEL: 'Combustível Total',

            TOTAL_HEAT_HEAD: 'Geração de Calor',
            TOTAL_HEAT_SUB: '(estimada)',
            TOTAL_HEAT_TOOLTIP: 'Calor é calculado com um gerador adjacente. Basicamente +25 Calor para cada Gerador.',
            TOTAL_COOLING: 'Dissipação de Calor',

            ENERGY_GEN: 'Geração de Energia',
            ENERGY_DRAIN_IDLE: 'Consumo de Energia (Ocioso)',
            ENERGY_DRAIN_THRUSTER: 'Consumo de Energia (Propulsores)',
            ENERGY_DRAIN_TOOLS: 'Consumo de Energia (Ferramentas)',
            ENERGY_DRAIN_WEAPONS: 'Consumo de Energia (Armas)',

            MINING_BATTERYS: 'Baterias Mínimas para o Laser de Mineração'
        }
    }
};

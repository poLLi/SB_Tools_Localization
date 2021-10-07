/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        DESIGNER: 'Ship-Designer',
        CALCULATOR: '> Calculator',
        SHIP_CALCULATOR: 'Normal Ship',
        CAPT_CALCULATOR: 'Capital Ship',
        MAP: 'Karte',
        MORE: 'Mehr',
        YOLOL: 'Yolol',
        CONTACT: 'Kontakt',
        OPTIONS: 'Options',
        OPTIONS_LANGUAGE: '> Sprache ändern',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_SUB: '( unofficial )',
        HEADLINE_DESCRIPTION: 'Alles was du benötigst um in Starbase zu überleben!',

        DEVELOPER_NOTE: 'Tools made with ',
        DEVELOPER_NOTE_BY: ' by ',
        DEVELOPER_NOTE_LIKE: 'Like my work?',
        DEVELOPER_NOTE_COFFEE: 'Buy me a Coffee'
    },

    // ---------------------------
    // PAGE: Spaceship-Calculator
    SHIP_CALC: {
        WARNING: {
            HEADLINE: 'WARNING: ',
            SUBLINE: 'Almost everything is subject to change. ',
            VERSION: 'Current Version: '
        },

        CARD: {
            TRUSTER_TITLE: 'Triebwerk',
            PROP_FUEL_ENERGY_TITLE: 'Treibstoff und Strom',
            WEIGHT_MISC_TITLE: 'Gewicht und Lager',
            TOOLS_TITLE: 'Tools',
            WEAPON_TITLE: 'Waffen',
            CALCULATION_TITLE: 'Berechnung'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'Deine Schiff Berechnung ist Ready.',
            SHIP_CALC_COPY_CLIPBOARD: 'In Zwischenablage kopieren',
            SAVE_BUTTON: 'SPEICHERN',
            RESET_BUTTON: 'RESET'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: 'Effizienz',
            EFFICIENCY_THRUSTER: 'Triebwerk Effizienz',
            EFFICIENCY_TOOLTIP: '100% efficiency is only reachable if your ship is in total symmetry which is almost impossible todo.',
            FORWARD_THRUSTER: 'Vorwärts Triebwerk',
            BACKWARD_THRUSTER: 'Rückwärts Triebwerk',
            MANEUVER_THRUSTER: 'Manöver Triebwerk',
            BOX_T1: 'Box Triebwerk T1',
            BOX_T2: 'Box Triebwerk T2',
            BOX_T3: 'Box Triebwerk T3',
            TRIANGLE_T1: 'Dreieck Triebwerk T1',
            TRIANGLE_T2: 'Dreieck Triebwerk T2',
            TRIANGLE_T3: 'Dreieck Triebwerk T3',
            MANEUVER_T1: 'Manöver Triebwerk T1',
            MANEUVER_T2: 'Manöver Triebwerk T2',
            MANEUVER_T3: 'Manöver Triebwerk T3',
            PLASMA_BODY: 'Puls Triebwerk Body',
            PLASMA_RING: 'Puls Triebwerk Ring'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: 'Treibstoff Tank',
            PROPELLANT_T1: 'Kleiner Treibstoff Tank',
            PROPELLANT_T2: 'Mittlerer Treibstoff Tank',
            PROPELLANT_T3: 'Großer Treibstoff Tank'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: 'Brennstoffkammer',
            FUEL_CHAMBER_T1: 'Brennstoffkammer T1',
            FUEL_CHAMBER_T2: 'Brennstoffkammer T2',
            FUEL_CHAMBER_T3: 'Brennstoffkammer T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: 'Generator',
            GENERATOR_T1: 'Generator T1',
            GENERATOR_T2: 'Generator T2',
            GENERATOR_T3: 'Generator T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: 'Batterie',
            BATTERY_T1: 'Kleine Batterie'
        },

        COOLING: {
            COOLING_HEADLINE: 'Kühlung',
            RADIATOR_BASE: 'Kühler Basis',
            RADIATOR_EXTENSION: 'Kühler Erweiterung',
            COOLING_RACK: 'Kühler Gestell'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Insgesamt gewicht in Tonnen',
            WEIGHT_TOOLTIP: 'You can see your ship mass if you try to pick it up with [P]. (tons =kg/1000)',
            CRATES: 'Anzahl der Erzkisten'
        },

        TOOLS: {
            MINING_LASER: 'Mining-Laser',
            MINING_BATTERY_TIME: 'Batterie Unterstützung in Sekunden',
            ORE_COLLECTOR: 'Erz Sammler',
            MATERIAL_SCANNER: 'Material Point Scanner',
            LASER_DESIGNATOR: 'Laser Designator',
            RANGEFINDER: 'Entfernungsmesser'
        },

        WEAPON: {
            AUTO_CANNON: 'Auto Cannon',
            LASER_CANNON: 'Laser Cannon',
            PLASMA_CANNON: 'Plasma Cannon',
            RAIL_CANNON: 'Rail Cannon'
        },

        CALCULATION: {
            SPEED: 'Geschwindigkeit',
            FORWARD_SPEED: 'Vorwärts Geschwindigkeit',
            BACKWARD_SPEED: 'Rückwärts Geschwindigkeit',
            FORWARD_SPEED_HALF: 'Geschwindigkeit (halbe Kisten)',
            FORWARD_SPEED_FULL: 'Geschwindigkeit (volle Kisten)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Halbe Kisten wird berechnet mit dem groben Durschnitt der Erzgewichte (15t/stack)',
            FORWARD_SPEED_FULL_TOOLTIP: 'Volle Kisten wird berechnet mit dem schwersten Erz (26t/stack - Lukium)',

            FLIGHT_TIME_HEAD: 'Flugzeiten',
            FLIGHT_TIME: 'Flugzeit',
            FLIGHT_TIME_FUEL: 'Brennstoff',
            FLIGHT_TIME_PROP: 'Treistoff',
            FLIGHT_TIME_TOOLTIP: 'Ungefähgre Flugzeit wird berechnet mit vollem Vorwärts Schub und halben Manöver Schub',

            FLIGHT_LENGTH: 'Fluglänge',
            FLIGHT_LENGTH_HALF: 'Fluglänge (halbe Kisten)',
            FLIGHT_LENGTH_FULL: 'Fluglänge (volle Kisten)',

            THRUST: 'Schub',
            FORWARD_THRUST: 'Vorwärts Schub',
            BACKWARD_THRUST: 'Rückwärts Schub',
            MANEUVER_THRUST: 'Manöver Schub',

            FUEL_ENERGY: 'Energie / Treibstoff',
            TOTAL_PROPELLANT: 'Treibstoff',
            TOTAL_FUEL: 'Brennstoff',

            TOTAL_HEAT_HEAD: 'Wärme entwicklung',
            TOTAL_HEAT_SUB: '(geschätzt)',
            TOTAL_HEAT_TOOLTIP: 'Wärme wird berechnet mit einem +25 Hitze pro Generator',
            TOTAL_COOLING: 'Kühlung',

            ENERGY_GEN: 'Energie Generation',
            ENERGY_DRAIN_IDLE: 'Energy Verbrauch (Lerrlauf)',
            ENERGY_DRAIN_THRUSTER: 'Energie verbrauch (Antrieb)',
            ENERGY_DRAIN_TOOLS: 'Energie verbrauch (Tools)',
            ENERGY_DRAIN_WEAPONS: 'Energie Verbrauch (Waffen)',

            MINING_BATTERYS: 'Min Batterien für MiningLaser'
        }
    },
    
    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: 'Capital-Ship Caluclator',
        HEADLINE_SUB: 'Yea... Same as the normal ship calc but for Captital Ships',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Yolol Codes',
        HEADLINE_SUB: 'Collection of usefull yolol codes and debug/dev tools',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: 'Interactive Map',
        HEADLINE_SUB: 'Full detailed Galaxy map of Starbase',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: 'Contact',
        HEADLINE_SUB: 'Yep thats me...',
        ABOUT_TITLE: 'About Me',
        ABOUT_TEXT: 'Hey, I´m PoLLi. I made this somewhat functional website...',
        CONTACT_TEXT: 'If u would like to get in contact with me you can do so by the following details listed below.',
        CHANNELS: 'Channels',
        PERSONAL_DISCORD: 'Personal Discord: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: 'Personal Github: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: 'Social',
        PERSONAL_SOCIAL: 'Personal: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: 'Changelog',
        HEADLINE_SUB: 'well... yea thats what you would expect here'
    }
};

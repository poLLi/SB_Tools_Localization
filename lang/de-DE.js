/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        DESIGNER: 'Ship-Rechner',
        MAP: 'Karte',
        MORE: 'Mehr',
        DATABASE: 'Database',
        CONTACT: 'Kontakt',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_DESCRIPTION: 'Alles was du benötigst um in Starbase zu überleben!'
    },

    // ---------------------------
    // PAGE: Ship-Designer
    DESIGNER: {
        CARD: {
            TRUSTER_TITLE: 'Triebwerk',
            PROP_FUEL_ENERGY_TITLE: 'Treibstoff und Strom',
            WEIGHT_MISC_TITLE: 'Gewicht und Lager',
            TOOLS_TITLE: 'Tools',
            CALCULATION_TITLE: 'Berechnung'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'Deine Schiff Berechnung ist Ready.',
            SHIP_CALC_COPY_CLIPBOARD: 'In Zwischenablage kopieren',
            SAVE_BUTTON: 'SPEICHERN',
            RESET_BUTTON: 'RESET'
        },

        THRUSTER: {
            EFFICIENCY_TOOLTIP:
                '100% efficiency is only reachable if your ship is in total symmetry which is almost impossible todo.',
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
            PROPELLANT_HEADLINE: 'Treibmittel Tank',
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
            BATTERY_T1: 'Kleiner Batterie'
        },

        COOLING: {
            COOLING_HEADLINE: 'Kühlung',
            RADIATOR_BASE: 'Kühler Basis',
            RADIATOR_EXTENSION: 'Kühler Erweiterung',
            COOLING_RACK: 'Kühlregal'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Insgesamt gewicht in Tonnen',
            CRATES: 'Anzahl der Erzkisten'
        },

        CALCULATION: {
            SPEED: 'Geschwindigkeit',
            FORWARD_SPEED: 'Vorwärts Geschwindigkeit',
            BACKWARD_SPEED: 'Rückwärts Geschwindigkeit',
            FORWARD_SPEED_HALF: 'Geschwindigkeit (halbe Kisten)',
            FORWARD_SPEED_FULL: 'Geschwindigkeit (volle Kisten)',

            FORWARD_SPEED_HALF_TOOLTIP:
                'Halbe Kisten wird berechnet mit dem groben durschnitt der Erz gewichte (15t/stack)',
            FORWARD_SPEED_FULL_TOOLTIP: 'Volle Kisten wird berechnet mit dem schwersten Erz (26t/stack - Lukium)',

            FLIGHT_TIME_HEAD: 'Flugzeiten',
            FLIGHT_TIME_SUB: '(Treibstoff)',
            FLIGHT_TIME: 'Flugzeit',
            FLIGHT_TIME_TOOLTIP:
                'Ungefähgre Flugzeit wird berechnet mit vollem Vorwärts Schub und halber Manöver Schub',

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
            TOTAL_COOLING: 'Kühlung'
        },

        TOOLS: {
            MINING_LASER: 'Mining Laser',
            ORE_COLLECTOR: 'Ore Collector',
            MATERIAL_SCANNER: 'Material Point Scanner',
            LASER_DESIGNATOR: 'Laser Designator',
            RANGEFINDER: 'Rangefinder'
        }
    }
};

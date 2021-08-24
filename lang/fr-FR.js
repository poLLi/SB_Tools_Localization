/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Démarrer',
        DESIGNER: 'Designer de vaisseaux',
        CALCULATOR: '> Calculateur',
        SHIP_CALCULATOR: 'Calculateur de vaisseaux',
        CAPT_CALCULATOR: 'Vaisseau Mère',
        MAP: 'Carte',
        MORE: 'Suite',
        YOLOL: 'Yolol',
        CONTACT: 'Contact',
        OPTIONS: 'Options',
        OPTIONS_LANGUAGE: '> Changer la langue',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Journal des modifications'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Outils Web communautaires',
        HEADLINE_SUB: '( Non-Officiel )',
        HEADLINE_DESCRIPTION: 'Tout ce dont vous avez besoin pour survivre sur Starbase !',

        DEVELOPER_NOTE: 'Outils crées par ',
        DEVELOPER_NOTE_BY: ' par ',
        DEVELOPER_NOTE_LIKE: 'Vous aimez mon travail ?',
        DEVELOPER_NOTE_COFFEE: 'Offrez moi un caffé'
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
            TRUSTER_TITLE: 'Propulseur',
            PROP_FUEL_ENERGY_TITLE: 'Carburant et Énergie',
            WEIGHT_MISC_TITLE: 'Poids et cargaison',
            TOOLS_TITLE: 'Outils',
            WEAPON_TITLE: 'Armes',
            CALCULATION_TITLE: 'Calcul'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'Votre url de calcul du vaisseau est prête.',
            SHIP_CALC_COPY_CLIPBOARD: 'Copier dans le presse-papiers',
            SAVE_BUTTON: 'SAUVEGARDER LES DONNÉES',
            RESET_BUTTON: 'RÉINITIALISER'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: 'Efficacité',
            EFFICIENCY_THRUSTER: 'Efficacité des propulseurs',
            EFFICIENCY_TOOLTIP: 'Une efficacité de 100% n\'est possible que si votre vaisseau est en symétrie totale, ce qui est presque impossible à réaliser.',
            FORWARD_THRUSTER: 'Propulseur avant',
            BACKWARD_THRUSTER: 'Propulseur arrière',
            MANEUVER_THRUSTER: 'Propulseur de manœuvre',
            BOX_T1: 'Propulseur rectangulaire T1',
            BOX_T2: 'Propulseur rectangulaire T2',
            BOX_T3: 'Propulseur rectangulaire T3',
            TRIANGLE_T1: 'Propulseur triangulaire T1',
            TRIANGLE_T2: 'Propulseur triangulaire T2',
            TRIANGLE_T3: 'Propulseur triangulaire T3',
            MANEUVER_T1: 'Propulseur de manœuvre T1',
            MANEUVER_T2: 'Propulseur de manœuvre T2',
            MANEUVER_T3: 'Propulseur de manœuvre T3',
            PLASMA_BODY: 'Corps du propulseur à Plasma',
            PLASMA_RING: 'Anneaux du propulseur à Plasma'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: 'Réservoir de carburant',
            PROPELLANT_T1: 'Petit Réservoir de carburant',
            PROPELLANT_T2: 'Moyen Réservoir de carburant',
            PROPELLANT_T3: 'Grand Réservoir de carburant'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: 'Chambre à combustible',
            FUEL_CHAMBER_T1: 'Chambre à combustible T1',
            FUEL_CHAMBER_T2: 'Chambre à combustible T2',
            FUEL_CHAMBER_T3: 'Chambre à combustible T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: 'Générateur',
            GENERATOR_T1: 'Générateur T1',
            GENERATOR_T2: 'Générateur T2',
            GENERATOR_T3: 'Générateur T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: 'Batteries',
            BATTERY_T1: 'Petite Batterie'
        },

        COOLING: {
            COOLING_HEADLINE: 'Refroidissement',
            RADIATOR_BASE: 'Base de radiateur',
            RADIATOR_EXTENSION: 'Extension de radiateur',
            COOLING_RACK: 'Baie de refroidissement'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Poids total en tonnes',
            WEIGHT_TOOLTIP: 'Vous pouvez voir la masse de votre vaisseau si vous essayez de le ramasser avec [P]. (tonnes =kg/1000)',
            CRATES: 'Nombre de caisses de minerai'
        },

        TOOLS: {
            MINING_LASER: 'Laser de minage',
            MINING_BATTERY_TIME: 'Temps de maintien de la batterie en secondes',
            ORE_COLLECTOR: 'Collecteur de minerais',
            MATERIAL_SCANNER: 'Scanner de points de matériaux',
            LASER_DESIGNATOR: 'Désignateur laser',
            RANGEFINDER: 'Télémètre'
        },

        WEAPON: {
            AUTO_CANNON: 'Cannon automatique',
            LASER_CANNON: 'Cannon Laser',
            PLASMA_CANNON: 'Cannon Plasma',
            RAIL_CANNON: 'Cannon à rail'
        },

        CALCULATION: {
            SPEED: 'Vitesse',
            FORWARD_SPEED: 'Vitesse de marche avant',
            BACKWARD_SPEED: 'Vitesse de marche arrière',
            FORWARD_SPEED_HALF: 'Vitesse d\'avancement (demi-caisses)',
            FORWARD_SPEED_FULL: 'Vitesse d\'avancement (Caisses pleines)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Les demi-caisses sont calculées sur la base du poids moyen approximatif des minerais (15t/pile).',
            FORWARD_SPEED_FULL_TOOLTIP: 'Les caisses pleines sont calculées avec le poids le plus élevé de minerais (26t/pile - Lukium)',

            FLIGHT_TIME_HEAD: 'Durée de vol',
            FLIGHT_TIME: 'Durée de vol',
            FLIGHT_TIME_FUEL: 'Carburant',
            FLIGHT_TIME_PROP: 'Combustible',
            FLIGHT_TIME_TOOLTIP: 'Le temps de vol est calculé avec la pleine poussée avant et la moitié de la poussée de manœuvre.',

            FLIGHT_LENGTH: 'Durée de vol',
            FLIGHT_LENGTH_HALF: 'Durée du vol (demi-caisses)',
            FLIGHT_LENGTH_FULL: 'Durée du vol (caisses pleines)',

            THRUST: 'Poussée',
            FORWARD_THRUST: 'Poussée avant totale',
            BACKWARD_THRUST: 'Poussée totale vers l\'arrière',
            MANEUVER_THRUST: 'Poussée totale de manœuvre',

            FUEL_ENERGY: 'Énergie / Combustible',
            TOTAL_PROPELLANT: 'Total Combustible',
            TOTAL_FUEL: 'Total Carburant',

            TOTAL_HEAT_HEAD: 'Production de chaleur',
            TOTAL_HEAT_SUB: '(estimé)',
            TOTAL_HEAT_TOOLTIP: 'La chaleur est calculée avec un générateur adjacent à un autre. En gros, +25 de chaleur pour chaque générateur.',
            TOTAL_COOLING: 'Dissipation de la chaleur',

            ENERGY_GEN: 'Production d\'énergie',
            ENERGY_DRAIN_IDLE: 'Drainage d\'énergie (au ralenti)',
            ENERGY_DRAIN_THRUSTER: 'Drainage d\'énergie (Propulseur)',
            ENERGY_DRAIN_TOOLS: 'Drainage d\'énergie (Outils)',
            ENERGY_DRAIN_WEAPONS: 'Drainage d\'énergie (Armes)',

            MINING_BATTERYS: 'Batteries minimum pour le Laser de Minage'
        }
    },
    
    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: 'Calculateur Vaisseaux Mères',
        HEADLINE_SUB: 'Oui... Comme pour le calcul normal des vaisseaux, mais pour les vaisseaux capitaux.',
        WIP: 'Désolé ! Pas encore terminé. :)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Codes Yolol',
        HEADLINE_SUB: 'Collection de codes yolol utiles et d\'outils de débogage/développement',
        WIP: 'Désolé ! Pas encore réalisé. :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: 'Carte intéractive',
        HEADLINE_SUB: 'Carte détaillée de la galaxie de la base stellaire',
        WIP: 'Désolé ! Pas encore réalisé :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: 'Contact',
        HEADLINE_SUB: 'yep, c\'est moi...',
        ABOUT_TITLE: 'A propos de moi',
        ABOUT_TEXT: 'Salut, je m\'appelle PoLLi. J\'ai fait ce site web un peu fonctionnel...',
        CONTACT_TEXT: 'Si vous souhaitez prendre contact avec moi, vous pouvez le faire en utilisant les coordonnées suivantes.',
        CHANNELS: 'Chaînes',
        PERSONAL_DISCORD: 'Discord Personnel: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: 'Github Personnel: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: 'Social',
        PERSONAL_SOCIAL: 'Personnel: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: 'Historique des modifications',
        HEADLINE_SUB: 'Eh bien... oui, c\'est ce à quoi on peut s\'attendre ici.'
    }
};

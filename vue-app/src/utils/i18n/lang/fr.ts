import type { LangTime } from '@utils/i18n/interface'

/** 法语 */
const fr = {
    title: 'Visualisation',
    header: {
        search: {
            placeholder: 'Recherche de données par province ou ville en abrégé régional',
            emptyTip: 'Aucune donnée régionale pour ce mot clé',
            loading: (c: number) => `Chargement complet des données, veuillez le faire plus tard (${c}/3)......`
        },
        menus: {
            title: 'Visualiser le menu',
            signature: {
                title: 'Présentation du projet',
                technology: {
                    frontEnd: 'Le Front - end',
                    api: 'Interface API http',
                    backEnd: 'Back - end'
                },
                feature: {
                    title: 'Quelques fonctionnalités incluses dans ce projet',
                    content: [
                        [
                            'Rechercher des données régionales',
                            'La fonction de recherche de données régionales, qui peut être une unité provinciale ou municipale, a été développée dans le projet, et la fonction de recherche combine une correspondance floue avec une correspondance précise.'
                        ],
                        [
                            'Changement de thème',
                            "Afin de pouvoir mieux s'adapter aux différents scénarios d'utilisation, une fonction de changement de thème a été créée. Un ensemble de 5 thèmes de département clair et un ensemble de 4 thèmes de département foncé sont disponibles dans le projet. Dans le même temps, le site Web prend également en charge la commutation en suivant automatiquement le thème du système sous des couleurs claires et sombres"
                        ],
                        [
                            'Internationalisation',
                            "Actuellement, de nombreux produits prennent en charge la fonctionnalité d'internationalisation, ce qui peut considérablement améliorer la convivialité et l'expérience utilisateur du projet. Cependant, il existe de nombreuses implémentations pour l'internationalisation, dans ce projet, la fonctionnalité n'est pas implémentée à l'aide de plugins tiers, mais elle est implémentée elle - même selon son principe, et la manière dont elle est implémentée est visible dans le github correspondant."
                        ],
                        [
                            'Carte de Gaude',
                            "Le projet a permis l'intégration des cartes de Gaudet grâce à la Bibliothèque @ vuemap / Vue - AMAP, tout en effectuant un chargement à la demande. Supporte actuellement la mise à l'échelle et la translation de la carte, le positionnement et la Division des données sur les éclosions par province avec les régions administratives"
                        ],
                        [
                            'Fonction de positionnement',
                            "Obtenez les informations de géolocalisation de l'utilisateur en appelant la fonction de localisation du navigateur et marquez l'emplacement actuel sur la carte, tandis que les données d'épidémie de l'emplacement actuel sont affichées de manière synchrone"
                        ],
                        [
                            'Présentation des données',
                            "Le panneau régions et le panneau données sont fournis, avec des animations de basculement et des messages globaux lors du remplacement des données. Mais en raison des limites de l'interface, actuellement, seules les données nationales, provinciales et municipales sur l'épidémie peuvent être fournies, ne supportent pas les comtés, les villes, les rues, etc."
                        ],
                        [
                            'Echarts',
                            "Grâce à la fonction de chargement à la demande d'echarts, le projet offre une présentation graphique des histogrammes par rapport aux diagrammes à secteurs et permet un chargement paresseux"
                        ]
                    ]
                },
                comments: {
                    title: 'Annexe',
                    content: {
                        api: 'Interfaces pour ce projet hosting documentation apifox',
                        git: "Adresse github à l'avant et à l'arrière"
                    }
                }
            },
            i18n: {
                title: 'internationalisation',
                globalMsg: {
                    success: {
                        title: 'Succès de l’opération',
                        content: 'La langue actuellement affichée est le français'
                    },
                    warn: {
                        title: 'Échec de l’opération',
                        content: 'La langue actuellement affichée est déjà le français'
                    }
                },
                text1: 'La plateforme de visualisation actuelle prend en charge l’internationalisation. Nous vous proposons les langues suivantes',
                text2: 'L’internationalisation n’est pas prise en charge par la partie de texte de la carte concernée par ce projet, car kaut map JS Api2.0 et plus ne supporte que le chinois simplifié',
                text3: "La configuration d'internationalisation est résumée par défaut dans vos préférences. Par exemple, « chinois simplifié » a été sélectionné cette fois comme langue d'affichage, puis la prochaine fois que vous entrez sur le site, l'affichage se poursuivra en « chinois simplifié »."
            },
            style: {
                title: 'Style du thème',
                globalMsg: {
                    success: {
                        title: 'Le thème a été mis à jour',
                        content: 'Votre schéma de thème personnalisé est en vigueur'
                    },
                    warn: {
                        title: 'La mise à jour échoue',
                        content: 'Le thème que vous avez sélectionné est appliqué'
                    }
                },
                text1: 'Soyez libre de choisir votre style ou schéma de thème préféré ici',
                text2: 'Jusqu’à 9 plans de thèmes personnalisés que vous pouvez choisir comme vous le souhaitez. Si la classification est faite par série de couleurs claires, série de couleurs foncées, dont 5 ensembles de thèmes clairs et 4 ensembles de thèmes foncés',
                text3: 'De plus, le site suit le système pour activer ou désactiver le mode sombre. Sous le schéma par défaut, le mode clair passe automatiquement au thème "Standard" et le mode sombre au thème "fantôme noir".',
                scheme: [
                    'critère',
                    'Macaron avec',
                    'Montagne lointaine dai',
                    'Mirage noir noir',
                    'Couleur herbe bleu',
                    'Bleu nuit polaire',
                    'Couleur bleu indigo',
                    'Argent clair de lune',
                    'Cendres de terre élégante'
                ]
            },
            btn1: 'fermer'
        }
    },
    body: {
        ncov: {
            details: {
                text1: 'La région actuelle',
                text2: 'Date dernière mise à jour des données'
            },
            data: {
                text1: 'Nombre de diagnostics cumulés',
                text2: 'Nombre d’infections suspectées',
                text3: 'Nombre de guérisons',
                text4: 'nombre de décès'
            }
        },
        amap: {
            location: {
                globalMsg: {
                    success: {
                        title: 'Positionner pour réussir',
                        content: 'Vous avez été localisé à '
                    },
                    warn: {
                        title: 'Échec du positionnement',
                        content:
                            'Cet échec de localisation peut être lié à des raisons telles que les autorisations de localisation du navigateur, les autorisations de localisation du système, le réseau, etc. Vous pouvez réessayer plus tard'
                    }
                }
            },
            resetPos: {
                tip: 'Réinitialiser le zoom de la carte',
                globalMsg: {
                    success: {
                        title: 'Réinitialiser avec succès',
                        content:
                            'A été réinitialisé pour vous la position centrale de la carte actuelle avec l’échelle de zoom'
                    },
                    warn: {
                        title: 'Échec de réinitialisation',
                        content:
                            'La position centrale de la carte actuelle par rapport à l’échelle de zoom est déjà par défaut'
                    }
                }
            },
            showPanelData: {
                globalMsg: {
                    success: {
                        title: 'Remplacement de données réussi',
                        content: (s: string) =>
                            `Les données épidémiques sur ${s} ont été présentées dans le panneau de données de gauche`
                    },
                    warn: {
                        title: 'Le remplacement des données a échoué',
                        content: (s: string) =>
                            `Les données de l'épidémie actuellement affichées par le panneau de données sont déjà ${s}`
                    }
                }
            },
            toolBar: {
                add: 'Agrandir',
                sub: 'Réduire'
            }
        },
        page: {
            update_time: ({ year, month, day }: LangTime) =>
                `À l’échelle nationale, depuis que le premier cas de covid-19 a été communiqué à la ville de wuhan, province du hubei, le 08 décembre 2019, il a été rapporté cumulativement au ${year}-${month}-${day}`,
            confirmed_count: (c: number) => `Nombre de diagnostics ${c}`,
            suspected_count: (c: number) => `Nombre d’infections suspectées ${c}`,
            cured_count: (c: number) => `Nombre de guérisons ${c}`,
            dead_count: (c: number) => `Nombre de morts ${c}`
        },
        echarts: {
            title: {
                text1: 'Division de niveau province',
                text2: 'Municipalité directe',
                text3: 'Région autonome',
                text4: 'Région administrative spéciale et province de Taiwan'
            }
        }
    }
}
export default fr

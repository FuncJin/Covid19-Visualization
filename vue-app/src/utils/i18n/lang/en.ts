import type { LangTime } from '@utils/i18n/interface'

/** 英语 */
const en = {
    title: 'Visualization',
    header: {
        search: {
            placeholder: 'Data search by region abbreviation, province or city',
            emptyTip: 'There is currently no regional data corresponding to this keyword',
            loading: (c: number) => `Loading data at full capacity, please wait (${c}/3)......`
        },
        menus: {
            title: 'visual menu',
            signature: {
                title: 'project introduction',
                technology: {
                    frontEnd: 'Front-end',
                    api: 'Http Api interface',
                    backEnd: 'Back-end'
                },
                feature: {
                    title: 'Some features included in this project',
                    content: [
                        [
                            'Search for regional data',
                            'The project has developed a function to search for regional data, which can be provincial or municipal units. The search function also takes into account both fuzzy matching and precise matching'
                        ],
                        [
                            'Theme switching',
                            'In order to better adapt to different usage scenarios, the theme switching function has emerged. The project provides 5 sets of light color themes and 4 sets of dark color themes. At the same time, the website also supports automatic switching between light and dark colors to follow the system theme'
                        ],
                        [
                            'Internationalization',
                            'Currently, many products support internationalization functionality, which can greatly improve project availability and user experience. However, there are many ways to achieve internationalization. In this project, this feature is not implemented through third-party plugins, but rather based on its principles. The specific implementation method can be viewed in the corresponding GitHub'
                        ],
                        [
                            'Gaode Map',
                            'The project utilizes the @vuemap/vue-map library to achieve integration of Gaode maps, while also achieving on-demand loading. Currently, it supports zooming, panning, positioning of maps, as well as coordinating with administrative regions to divide epidemic data among provinces'
                        ],
                        [
                            'Positioning function',
                            "Obtain the user's geographic location information by calling the browser's positioning function, and mark the current location on the map. At the same time, the epidemic data of the current location will also be displayed synchronously"
                        ],
                        [
                            'Data presentation',
                            'Provides regional and data panels, with switching animations and global message prompts when changing data. However, due to interface limitations, currently only epidemic data can be provided at the national, provincial, and municipal levels, and counties, towns, and streets are not supported at the moment'
                        ],
                        [
                            'Echarts',
                            'With the on-demand loading function of Echarts, the project provides a graphical representation of bar charts and pie charts, and achieves lazy loading'
                        ]
                    ]
                },
                comments: {
                    title: 'Appendix',
                    content: {
                        api: 'The interface hosting document Apifox for this project',
                        git: 'GitHub addresses at the front and back ends'
                    }
                }
            },
            i18n: {
                title: 'internationalization',
                globalMsg: {
                    success: {
                        title: 'Operate successfully',
                        content: 'The current language shown to you is English'
                    },
                    warn: {
                        title: 'Operate failure',
                        content: 'The language shown so far is English'
                    }
                },
                text1: 'Current visualization platforms support internationalization, and we provide you with the following languages',
                text2: 'Since Amap JS Api2.0 and above only support simplified Chinese, the text part of the map involved in this project does not support internationalization',
                text3: 'The internationalization configuration is summarized in your preferences by default. For example, if "Simplified Chinese" is selected as the display language this time, the next time you enter the website, you will continue to display it in "Simplified Chinese"'
            },
            style: {
                title: 'theme style',
                globalMsg: {
                    success: {
                        title: 'Topic has been updated',
                        content: 'Your custom theme scheme has taken effect'
                    },
                    warn: {
                        title: 'Update failure',
                        content: 'The theme you have chosen is being applied'
                    }
                },
                text1: 'Feel free to choose the theme style or scheme you like here',
                text2: 'Here you can freely choose your favorite theme style or scheme up to 9 custom theme schemes, you can choose as much as you like. If it is classified by light color system and dark color system, there are 5 sets of light color system and 4 sets of dark color system',
                text3: 'In addition, the website will follow the system to turn on or off dark mode. By default, the light mode automatically switches to the "Standard" theme, and the dark mode automatically switches to the "Phantom Black" theme',
                scheme: ['Normal', 'Macaron', 'Whitesmoke', 'Dark', 'Fresh', 'Darkblue', 'Blue', 'Light', 'Grey']
            },
            btn1: 'close'
        }
    },
    body: {
        ncov: {
            details: {
                text1: 'current area',
                text2: 'time when data was last updated'
            },
            data: {
                text1: 'confirmed count',
                text2: 'suspected count',
                text3: 'cured count',
                text4: 'dead count'
            }
        },
        amap: {
            location: {
                globalMsg: {
                    success: {
                        title: 'Successful location',
                        content: 'You have been located to '
                    },
                    warn: {
                        title: 'Location failure',
                        content:
                            'The location failure may be related to the location permission of the browser, system, or network. You can try again later'
                    }
                }
            },
            resetPos: {
                tip: 'Reset Map Zoom',
                globalMsg: {
                    success: {
                        title: 'Reset successfully',
                        content: 'The center position and zoom ratio of the current map have been reset for you'
                    },
                    warn: {
                        title: 'Reset failure',
                        content: 'The center position and zoom of the current map are already in default'
                    }
                }
            },
            showPanelData: {
                globalMsg: {
                    success: {
                        title: 'Data replacement succeeded',
                        content: (s: string) =>
                            `Epidemic data related to ${s} has been displayed in the left data panel`
                    },
                    warn: {
                        title: 'Data replacement failed',
                        content: (s: string) =>
                            `The epidemic data currently displayed on the data panel is already ${s}`
                    }
                }
            },
            toolBar: {
                add: 'amplify',
                sub: 'reduce'
            }
        },
        page: {
            update_time: ({ year, month, day }: LangTime) =>
                `Nationwide, a total of COVID-19 cases have been reported as of ${year}-${month}-${day} since the first case was reported in Wuhan, Hubei province, on Dec 08, 2019`,
            confirmed_count: (c: number) => `there are ${c} confirmed cases`,
            suspected_count: (c: number) => `There are ${c} suspected cases`,
            cured_count: (c: number) => `${c} cases were cured`,
            dead_count: (c: number) => `The death toll was ${c}`
        },
        echarts: {
            title: {
                text1: 'Provincial-level administrative region',
                text2: 'Municipality directly under the central government',
                text3: 'Municipality',
                text4: 'Special Administrative Region and Taiwan Province'
            }
        }
    }
}

export default en

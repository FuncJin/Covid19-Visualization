import type { LangTime } from '@utils/i18n/interface'

/** 简体中文 */
const zh_cn = {
    title: '疫情可视化',
    header: {
        search: {
            placeholder: '按地区简称，以省或市进行数据搜索',
            emptyTip: '暂无该关键词所对应的地区数据',
            loading: (c: number) => `正在全力加载数据，请稍后 （${c}/3）......`
        },
        menus: {
            title: '可视化菜单',
            signature: {
                title: '项目介绍',
                technology: {
                    frontEnd: '前端',
                    api: 'Http Api 接口',
                    backEnd: '后端'
                },
                feature: {
                    title: '此项目包含的一些功能',
                    content: [
                        [
                            '搜索地区数据',
                            '项目中开发了搜索地区数据的功能，该地区可以是省级单位，也可以是市级单位，并且搜索功能会同时兼顾模糊匹配与精准匹配'
                        ],
                        [
                            '主题切换',
                            '为了可以更好地适应不同的使用场景，主题切换功能应运而生。项目中提供了浅色系主题 5 套，深色系主题 4 套。同时，网站也支持在浅色与深色下自动跟随系统主题进行切换'
                        ],
                        [
                            '国际化',
                            '目前许多产品都支持国际化功能，这样可以大大的提高项目的可用性和用户体验。然而国际化的实现方案却有很多种，在此项目中，该功能并没有借助第三方插件来实现，而是根据其原理自己来实现的，具体实现方式可在对应的 GitHub 中进行查看'
                        ],
                        [
                            '高德地图',
                            '项目借助于@vuemap/vue-amap库实现了对高德地图的集成，同时也做到了按需加载。目前支持地图的缩放与平移、定位，以及配合行政区域进行各省份的疫情数据划分'
                        ],
                        [
                            '定位功能',
                            '通过调用浏览器的定位功能获取用户的地理位置信息，并将当前位置在地图上标记出来，同时当前位置的疫情数据也会同步进行展现'
                        ],
                        [
                            '数据展示',
                            '提供了地区面板与数据面板，在更换数据时会有切换动画与全局消息提示。但由于接口限制，目前只能提供到国家、省级、市级的疫情数据，暂不支持县、镇、街道等'
                        ],
                        [
                            'Echarts',
                            '借助于 Echarts 的按需加载功能，项目提供了柱状图与饼图的图表展示方式，并实现了懒加载'
                        ]
                    ]
                },
                comments: {
                    title: '附录',
                    content: {
                        api: '此项目的接口托管文档 Apifox',
                        git: '前后端的 GitHub 地址'
                    }
                }
            },
            i18n: {
                title: '国际化',
                globalMsg: {
                    success: {
                        title: '操作成功',
                        content: '当前向您展示的语种为简体中文'
                    },
                    warn: {
                        title: '操作失败',
                        content: '当前所展示的语言已经为简体中文了'
                    }
                },
                text1: '当前可视化平台支持国际化，我们为您提供了以下语言',
                text2: '由于高德地图JS Api2.0及以上版本只支持简体中文，所以此项目所涉及的地图文字部分并不支持国际化',
                text3: '国际化配置默认归纳于您的偏好设置中。例如本次选择了“简体中文”作为展示的语言，则下次进入该网站时，将继续以“简体中文”进行展示'
            },
            style: {
                title: '主题样式',
                globalMsg: {
                    success: {
                        title: '主题已更新',
                        content: '您的自定义主题方案已生效'
                    },
                    warn: {
                        title: '更新失败',
                        content: '你所挑选的主题正在被应用'
                    }
                },
                text1: '在此处可以自由挑选您所喜欢的主题样式或方案',
                text2: '多达9种自定义主题方案，您可以随心所欲选择。若按浅色系、深色系进行分类，其中浅色系主题5套，深色系主题4套',
                text3: '另外，网站会跟随系统打开或关闭深色模式。默认方案下，浅色模式自动切换至“标准”主题，深色模式自动切换至“幻影黑”主题',
                scheme: ['标准', '马卡龙', '远山黛', '幻影黑', '草色青', '极夜蓝', '靛青蓝', '月光银', '雅土灰']
            },
            btn1: '关闭'
        }
    },
    body: {
        ncov: {
            details: {
                text1: '当前地区',
                text2: '数据最后更新时间'
            },
            data: {
                text1: '累计确诊人数',
                text2: '疑似感染人数',
                text3: '治愈人数',
                text4: '死亡人数'
            }
        },
        amap: {
            location: {
                globalMsg: {
                    success: {
                        title: '定位成功',
                        content: '已将您定位至'
                    },
                    warn: {
                        title: '定位失败',
                        content: '本次定位失败可能与浏览器定位权限、系统定位权限、网络等原因有关，稍后您可以再试一次'
                    }
                }
            },
            resetPos: {
                tip: '重置地图缩放',
                globalMsg: {
                    success: {
                        title: '重置成功',
                        content: '已为您重置当前地图的中心位置与缩放比例'
                    },
                    warn: {
                        title: '重置失败',
                        content: '当前地图的中心位置与缩放比例已经处于默认状态了'
                    }
                }
            },
            showPanelData: {
                globalMsg: {
                    success: {
                        title: '数据更换成功',
                        content: (c: string) => `已在左侧数据面板中展示有关${c}的疫情数据`
                    },
                    warn: {
                        title: '数据更换失败',
                        content: (s: string) => `数据面板当前所展示的疫情数据已经是${s}了`
                    }
                }
            },
            toolBar: {
                add: '放大',
                sub: '缩小'
            }
        },
        page: {
            update_time: ({ year, month, day }: LangTime) =>
                `全国范围内，自2019年12月08日湖北省武汉市通报首例新冠病毒肺炎以来，截止${year}年${month}月${day}日，累计报告了`,
            confirmed_count: (c: number) => `确诊人数${c}例`,
            suspected_count: (c: number) => `疑似感染人数${c}例`,
            cured_count: (c: number) => `治愈人数${c}例`,
            dead_count: (c: number) => `死亡人数${c}例`
        },
        echarts: {
            title: {
                text1: '省级行政区',
                text2: '直辖市',
                text3: '自治区',
                text4: '特别行政区与台湾省'
            }
        }
    }
}
export default zh_cn

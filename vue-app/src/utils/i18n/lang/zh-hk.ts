import type { LangTime } from '@utils/i18n/interface'

/** 繁体中文 */
const zh_hk = {
    title: '疫情可視化',
    header: {
        search: {
            placeholder: '按地區簡稱，以省或市進行數據蒐索',
            emptyTip: '暫無該關鍵字所對應的地區數據',
            loading: (c: number) => `正在全力加載數據，請稍後 （${c}/3）......`
        },
        menus: {
            title: '可視化菜單',
            signature: {
                title: '項目介紹',
                technology: {
                    frontEnd: '前端',
                    api: 'Http Api 接口',
                    backEnd: '後端'
                },
                feature: {
                    title: '此項目包含的一些功能',
                    content: [
                        [
                            '蒐索地區數據',
                            '項目中開發了蒐索地區數據的功能，該地區可以是省級組織，也可以是市級組織，並且搜索功能會同時兼顧模糊匹配與精准匹配'
                        ],
                        [
                            '主題切換',
                            '為了可以更好地適應不同的使用場景，主題切換功能應運而生。 項目中提供了淺色系主題5套，深色系主題4套。 同時，網站也支持在淺色與深色下自動跟隨系統主題進行切換'
                        ],
                        [
                            '國際化',
                            '現時許多產品都支持國際化功能，這樣可以大大的提高項目的可用性和用戶體驗。 然而國際化的實現方案卻有很多種，在此項目中，該功能並沒有借助協力廠商挿件來實現，而是根據其原理自己來實現的，具體實現管道可在對應的GitHub中進行查看'
                        ],
                        [
                            '高德地圖',
                            '項目借助於@vuemap/vue-amap庫實現了對高德地圖的集成，同時也做到了按需加載。 現時支持地圖的縮放與平移、定位，以及配合行政區域進行各省份的疫情數據劃分'
                        ],
                        [
                            '定位功能',
                            '通過調用瀏覽器的定位功能獲取用戶的地理位置資訊，並將當前位置在地圖上標記出來，同時當前位置的疫情數據也會同步進行展現'
                        ],
                        [
                            '數據展示',
                            '提供了地區面板與數據面板，在更換數據時會有切換動畫與全域消息提示。 但由於介面限制，現時只能提供到國家、省級、市級的疫情數據，暫不支持縣、鎮、街道等'
                        ],
                        ['Echarts', '借助於Echarts的按需加載功能，項目提供了柱狀圖與餅圖的圖表展示管道，並實現了懶加載']
                    ]
                },
                comments: {
                    title: '附錄',
                    content: {
                        api: '此項目的接口託管檔案Apifox',
                        git: '前後端的GitHub地址'
                    }
                }
            },
            i18n: {
                title: '國際化',
                globalMsg: {
                    success: {
                        title: '操作成功',
                        content: '當前向您展示的語種爲繁體中文'
                    },
                    warn: {
                        title: '操作失敗',
                        content: '當前所展示的語言已經爲繁體中文了'
                    }
                },
                text1: '當前可視化平臺支持國際化，我們爲您提供了以下語言',
                text2: '由於高德地圖JS Api2.0及以上版本只支持簡體中文，所以此項目所涉及的地圖文字部分並不支持國際化',
                text3: '國際化配寘默認歸納於您的偏好設定中。 例如本次選擇了“簡體中文”作為展示的語言，則下次進入該網站時，將繼續以“簡體中文”進行展示'
            },
            style: {
                title: '主題樣式',
                globalMsg: {
                    success: {
                        title: '主題已更新',
                        content: '您的自定義主題方案已生效'
                    },
                    warn: {
                        title: '更新失敗',
                        content: '你所挑選的主題正在被應用'
                    }
                },
                text1: '在此處可以自由挑選您所喜歡的主題樣式或方案',
                text2: '多達9種自定義主題方案，您可以隨心所欲選擇。若按淺色系、深色系進行分類，其中淺色系主題5套，深色系主題4套',
                text3: '另外，網站會跟隨系統打開或關閉深色模式。 默認方案下，淺色模式自動切換至“標準”主題，深色模式自動切換至“幻影黑”主題',
                scheme: ['標準', '馬卡龍', '遠山黛', '幻影黑', '草色青', '極夜藍', '靛青藍', '月光銀', '雅土灰']
            },
            btn1: '關閉'
        }
    },
    body: {
        ncov: {
            details: {
                text1: '當前地區',
                text2: '數據最後更新時間'
            },
            data: {
                text1: '累計確診人數',
                text2: '疑似感染人數',
                text3: '治癒人數',
                text4: '死亡人數'
            }
        },
        amap: {
            location: {
                globalMsg: {
                    success: {
                        title: '定位成功',
                        content: '已將您定位至'
                    },
                    warn: {
                        title: '定位失敗',
                        content: '本次定位失敗可能與瀏覽器定位權限、系統定位權限、網絡等原因有關，稍後您可以再試一次'
                    }
                }
            },
            resetPos: {
                tip: '重置地圖縮放',
                globalMsg: {
                    success: {
                        title: '重置成功',
                        content: '已爲您重置當前地圖的中心位置與縮放比例'
                    },
                    warn: {
                        title: '重置失敗',
                        content: '當前地圖的中心位置與縮放比例已經處於默認狀態了'
                    }
                }
            },
            showPanelData: {
                globalMsg: {
                    success: {
                        title: '數據更換成功',
                        content: (s: string) => `已在左側數據面板中展示有關${s}的疫情數據`
                    },
                    warn: {
                        title: '數據更換失敗',
                        content: (s: string) => `數據面板當前所展示的疫情數據已經是${s}了`
                    }
                }
            },
            toolBar: {
                add: '放大',
                sub: '縮小'
            }
        },
        page: {
            update_time: ({ year, month, day }: LangTime) =>
                `全國範圍內，自2019年12月08日湖北省武漢市通報首例新冠病毒肺炎以來，截止${year}年${month}月${day}日，累計報告了`,
            confirmed_count: (c: number) => `確診人數${c}例`,
            suspected_count: (c: number) => `疑似感染人數${c}例`,
            cured_count: (c: number) => `治癒人數${c}例`,
            dead_count: (c: number) => `死亡人數${c}例`
        },
        echarts: {
            title: {
                text1: '省級行政區',
                text2: '直轄市',
                text3: '自治區',
                text4: '特別行政區與臺灣省'
            }
        }
    }
}
export default zh_hk

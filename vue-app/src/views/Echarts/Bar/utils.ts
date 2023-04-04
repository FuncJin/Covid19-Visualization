import type { Covid19Data } from '@api/interface'
import type { LangMapType } from '@/utils/i18n/interface'
import type { ClassDom } from './interface'

/** 每行提示框 */
const classDom = ({ className, title, counts }: ClassDom) => {
    const p = document.createElement('p')
    p.style.padding = '5px 15px'
    p.style.display = 'flex'
    p.style.justifyContent = 'space-between'
    const s1 = document.createElement('span')
    s1.innerText = title
    s1.style.marginRight = '30px'
    s1.style.fontWeight = '600'
    s1.classList.add(className)
    const s2 = document.createElement('span')
    s2.innerText = String(counts)
    s2.style.color = 'var(--text-title-color)'
    p.appendChild(s1)
    p.appendChild(s2)
    return p
}
/** 生成Html Element提示框(tooltip) */
const tooltipUlDom = (i18nMap: LangMapType, data: Covid19Data) => {
    const ul = document.createElement('ul')
    ul.style.padding = '5px'
    ul.style.borderRadius = '7px'
    ul.style.backgroundColor = 'var(--bg-color)'
    // 累计确诊人数
    const co = classDom({
        className: 'covid19-data-confirmedCount',
        title: i18nMap.body.ncov.data.text1,
        counts: data.confirmed_count
    })
    // 疑似确诊人数
    const su = classDom({
        className: 'covid19-data-suspectedCount',
        title: i18nMap.body.ncov.data.text2,
        counts: data.suspected_count
    })
    // 治愈人数
    const cu = classDom({
        className: 'covid19-data-curedCount',
        title: i18nMap.body.ncov.data.text3,
        counts: data.cured_count
    })
    // 死亡人数
    const de = classDom({
        className: 'covid19-data-deadCount',
        title: i18nMap.body.ncov.data.text4,
        counts: data.dead_count
    })
    ul.appendChild(co)
    ul.appendChild(su)
    ul.appendChild(cu)
    ul.appendChild(de)
    return ul
}

export default tooltipUlDom

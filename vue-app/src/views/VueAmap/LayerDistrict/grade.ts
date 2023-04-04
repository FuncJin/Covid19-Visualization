type ColorGrade = Array<[(v: number) => boolean, string]>

/** 获取某个疫情数据所对应的颜色等级 */
const getColorGradeByCovid19Data = (value: number) => {
    const _colors: ColorGrade = [
        [(v) => v >= 10001, 'rgb(29,46,140)'],
        [(v) => v >= 6001, 'rgb(44,90,157)'],
        [(v) => v >= 3001, 'rgb(47,135,183)'],
        [(v) => v >= 1001, 'rgb(69,177,205)'],
        [(v) => v >= 1, 'rgb(131,202,210)'],
        [(v) => v === 0, 'rgb(197,227,203)']
    ]
    const cur = _colors.find(([f]) => f(value))!
    return cur[1]
}

export default getColorGradeByCovid19Data

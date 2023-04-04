const styleList = ['_light', 'dark', 'macaron', 'darkblue', 'blue', 'grey']
/**
 * 传入一个主题样式，将检查该主题样式是否存在。
 *
 * 若存在，则切换至对应的主题样式，并返回true
 *
 * 若不存在，则使用_light主题
 * @param style 主题样式
 */
const changeTheme = (style: string) => {
    const isHaveStyle = styleList.includes(style)
    // css root
    document.documentElement.setAttribute('theme', isHaveStyle ? style : '_light')
}

export default changeTheme

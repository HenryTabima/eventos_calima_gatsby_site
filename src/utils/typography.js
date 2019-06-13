import Typography from 'typography'
import theme from 'typography-theme-elk-glen'


const fonts = ['Montserrat', 'Helvetica', 'sans-serif']

theme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['400', '700']
  }
]
theme.headerFontFamily = fonts
theme.bodyFontFamily = fonts
theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({})

console.log(theme)

const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm
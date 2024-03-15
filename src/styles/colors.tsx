import { hexToRGB } from '../utils/colorUtils'

export default class Colors {
  // 基础色
  static black = '#000000'
  static white = '#FFFFFF'
  static blue = '#2875e8'
  static yellow = '#ffd100'
  static green = '#3dbf5d'
  static red = '#e34152'

  // 文字色
  static colorTextBase = Colors.black // 基本
  static colorTextBaseInverse = Colors.white // 基本 _ 反色
  static colorTextDesc = '#999999' // 描述
  static colorTextTitle = '#333333'
  static colorLongText = '#494949'
  static colorTextGrey = '#848484'
  static colorLink = Colors.blue
  static colorDanger = '#e34152' //删除 警告

  //边框色
  static borderColorBase = '#e5e5e5'
  static borderColorDivide = '#dadada'
  static borderColorGrey = '#c3c9d0'
  static borderCheckboxGrey = '#dfdfdf'

  //背景色
  static fillBase = Colors.colorTextBaseInverse
  static fillBlack = Colors.black
  static fillTap = '#eaeaea'
  static backgoundGrey = '#EFEFF4'
  static pageBackground = '#f4f4f4'
  static tagFill = '#e0f2ff'
  static fillSoapstone = '#FFFAF6'

  //主题色
  static colorPrimary = '#ff8533'
  static colorSilver = '#c7c7cc'
  static colorPrimaryBlue = '#2F8CEC'

  // TabBar主题配置色
  static tabItemUnderlayColor = hexToRGB(Colors.black, 0.05)
  static tabItemTextColor = Colors.colorTextTitle
  static tabItemTextActiveColor = Colors.colorPrimary

  // 按钮颜色
  static colorButtonPrimary = '#ff8533'
  static colorButtonSuccess = '#3add57'
  static colorButtonWarning = '#FFB700'
  static colorButtonDanger = '#FF5883'
  static colorButtonInfo = '#2F8CEC'
  static colorButtonDisabled = Colors.colorSilver

  // TextInput
  static colorInputBackground = '#f3f3f3'
}

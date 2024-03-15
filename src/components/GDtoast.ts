import Toast, { ToastOptions } from 'react-native-root-toast'
import Colors from '../styles/colors'

type ToastType = 'normal' | 'success' | 'danger' | 'warning'

export const ToastPositions = {
  GD_TOP: 100,
  GD_BOTTOM: -104,
}

const toastBaseConfig: ToastOptions = {
  textColor: 'white',
  shadow: false,
  opacity: 1,
  textStyle: {
    lineHeight: 24,
  },
}

const optionsMap: Partial<Record<ToastType, ToastOptions>> = {
  normal: {
    ...toastBaseConfig,
    backgroundColor: Colors.blue,
  },
  success: {
    ...toastBaseConfig,
    backgroundColor: Colors.green,
  },
  danger: {
    ...toastBaseConfig,
    backgroundColor: Colors.red,
  },
  warning: {
    ...toastBaseConfig,
    textColor: Colors.colorTextTitle,
    backgroundColor: Colors.yellow,
  },
}

function toastFactory(type: ToastType) {
  return function(message: string, option: ToastOptions = {}) {
    const typeOption = optionsMap[type]
    return Toast.show(message, {
      ...typeOption,
      duration: Toast.durations.SHORT,
      position: ToastPositions.GD_TOP,
      ...option,
    })
  }
}

export default {
  normal: toastFactory('normal'),
  success: toastFactory('success'),
  warn: toastFactory('warning'),
  danger: toastFactory('danger'),
  hide: Toast.hide,
}

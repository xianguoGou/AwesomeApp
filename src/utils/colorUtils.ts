export function hexToRGB(hex: string, alpha?: number) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    if (alpha < 0 || alpha > 1) {
      throw new Error('alpha is invalid')
    }
    return `rgba(${r},${g},${b},${alpha})`
  } else {
    return `rgba(${r},${g},${b}`
  }
}

export function LightenDarkenColor(hex: string, amt: number) {
  var usePound = false

  if (hex[0] == '#') {
    hex = hex.slice(1)
    usePound = true
  }

  var num = parseInt(hex, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

function luminance(hex: string) {
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16) / 255
  const g = parseInt(c.substring(2, 4), 16) / 255
  const b = parseInt(c.substring(4, 6), 16) / 255

  const srgb = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
}

function contrastRatio(hex1: string, hex2: string) {
  const L1 = luminance(hex1)
  const L2 = luminance(hex2)
  const bright = Math.max(L1, L2)
  const dark = Math.min(L1, L2)
  return (bright + 0.05) / (dark + 0.05)
}

const text = '#f2f2f2'
const bg = '#00171f'

const ratio = contrastRatio(text, bg)
console.log(`Contrast ratio between ${text} and ${bg}: ${ratio.toFixed(2)}:1`)

if (ratio >= 4.5) {
  console.log('Passes WCAG AA for normal text (>= 4.5).')
  process.exit(0)
} else if (ratio >= 3) {
  console.log('Passes WCAG AA for large text (>= 3).')
  process.exit(0)
} else {
  console.error('Contrast is insufficient for WCAG AA. Consider adjusting colors.')
  process.exit(2)
}

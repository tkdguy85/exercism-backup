export const COLOR_BANDS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export type Color = typeof COLOR_BANDS[number]

// Metric prefixs per 1000 units, starting from 0
const UNITS = ['ohms', 'kiloohms', 'megaohms', 'gigaohms']

export function decodedResistorValue(colors: Color[]): string {
  // Map through the color bands
  const [first, second, third] = colors.map(color => COLOR_BANDS.indexOf(color))
  const ohms = (first * 10 + second) * (10 ** third)
 
  let value = ohms
  let unitIndex = 0
  while (value >= 1000) {
    value /= 1000
    unitIndex++
  }

  return `${value} ${UNITS[unitIndex]}`
}

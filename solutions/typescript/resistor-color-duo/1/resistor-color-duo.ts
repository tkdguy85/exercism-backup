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

export function decodedValue(color: Color): number {
  const firstValue = COLOR_BANDS.indexOf(color[0])
  const secondValue = COLOR_BANDS.indexOf(color[1])

  return firstValue * 10 + secondValue
}

export function format(name: string, number: number): string {
  let ordinal = 'th'
  
  if (number % 10 == 1 && number % 100 != 11) {
    ordinal = 'st'
  } else if (number % 10 == 2 && number % 100 != 12) {
    ordinal = 'nd'
  } else if (number % 10 == 3 && number % 100 != 13) {
    ordinal = 'rd'
  }

  return `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`
}

export function hey(message: string): string {
  const question = message.trim()
  const isYelling = /[A-Z]/.test(question) && !/[a-z]/.test(question)

  if (question.length == 0) {
    return 'Fine. Be that way!'
  }

  if (question.endsWith('?')) {
    if (isYelling) {
      return "Calm down, I know what I'm doing!"
    }
    return 'Sure.'
  }

  if (isYelling) {
    return 'Whoa, chill out!'
  }

  return 'Whatever.'
}

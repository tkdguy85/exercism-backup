export function isPangram(sentence: string): boolean {
  const seenChars = new Set<string>()

  for (const char of sentence.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      seenChars.add(char)

      if (seenChars.size == 26) {
        return true
      }
    }
  }

  // false if not all chars are matched
  return false
}

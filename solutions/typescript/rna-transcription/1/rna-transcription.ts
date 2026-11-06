export function toRna(sequence: string): string {
  const DNA = ['A', 'C', 'G', 'T']
  const RNA = ['U', 'G', 'C', 'A']
  let result: string[] = []

  for (let char of sequence) {
    if (DNA.includes(char)) {
      const index = DNA.indexOf(char)
      result.push(RNA[index])
    } else {
      throw new Error('Invalid input DNA.')
    }
  }

  // Return sequence as a string
  return result.join('')  
}

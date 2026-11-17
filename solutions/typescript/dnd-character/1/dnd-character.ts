export class DnDCharacter {  // Stats Generator
  public strength: number = DnDCharacter.generateAbilityScore()
  public dexterity: number = DnDCharacter.generateAbilityScore()
  public constitution: number = DnDCharacter.generateAbilityScore()
  public intelligence: number = DnDCharacter.generateAbilityScore()
  public wisdom: number = DnDCharacter.generateAbilityScore()
  public charisma: number = DnDCharacter.generateAbilityScore()

  // HP Modifiers
  public hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution)
  
  public static generateAbilityScore(): number {
    // Roll 4x 6-sided dice.
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)

    // Sort them, drop the lowest, return the sum of the rest
    rolls.sort((a, b) => a - b)
    return rolls.slice(1).reduce((sum, roll) => sum + roll, 0) 
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}

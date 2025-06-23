const battleFiles = import.meta.glob<string>('/battles/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const battlesMap = new Map<number, string>()

for (const file in battleFiles) {
  const match = file.match(/\/(\d+)\.md$/)
  if (match) {
    const battleId = Number(match[1])
    const content = battleFiles[file]
      .replace(/```(?:html)?\n([\s\S]*?)\n```/g, '$1')
      .trim()

    battlesMap.set(battleId, content)
  }
}

export function getSolution(battleId: number) {
  const solution = battlesMap.get(battleId)

  if (!solution) {
    throw new Error(`Solution for battle ID ${battleId} not found`)
  }
  return solution
}

/**
 * Checks if a solution exists for the given battle ID
 * @param battleId The ID of the battle to check
 * @returns true if a solution exists, false otherwise
 */
export function hasSolution(battleId: number): boolean {
  return battlesMap.has(battleId)
}

export function getProgress(totalBattles: number) {
  if (totalBattles <= 0)
    return {
      completed: 0,
      percent: 0
    }

  const completed = battlesMap.size

  const percent = Number(((completed / totalBattles) * 100).toFixed(2))

  return {
    completed,
    percent
  }
}

export function classes(classesObject: Record<string, boolean>): string {
  const result: string[] = []

  for (const [className, condition] of Object.entries(classesObject)) {
    if (condition === true) {
      result.push(className)
    }
  }

  return result.join(' ')
}

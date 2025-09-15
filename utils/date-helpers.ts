export function formatDateRange(from?: Date, to?: Date): string {
  if (!from && !to) return "Select date range"
  if (!from) return `Until ${to!.toLocaleDateString()}`
  if (!to) return `From ${from.toLocaleDateString()}`
  return `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
}

export function getDefaultDateRange(): { from: Date; to: Date } {
  const to = new Date()
  const from = new Date(to.getTime() - 7 * 24 * 60 * 60 * 1000)
  return { from, to }
}

export function isValidDateRange(from?: Date, to?: Date): boolean {
  if (!from || !to) return true
  return from <= to
}

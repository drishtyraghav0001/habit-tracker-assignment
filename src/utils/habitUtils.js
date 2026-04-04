export const getDateKey = (offsetDays = 0) => {
  const date = new Date()
  date.setDate(date.getDate() + offsetDays)
  return date.toISOString().slice(0, 10)
}

export const todayKey = getDateKey(0)

export const getLastNDays = (count) =>
  Array.from({ length: count }, (_, index) => getDateKey(index - (count - 1)))

export const calcCurrentStreak = (completedOn) => {
  if (!completedOn.length) return 0

  const completedSet = new Set(completedOn)
  let streak = 0

  for (let index = 0; index < 365; index += 1) {
    const day = getDateKey(-index)
    if (!completedSet.has(day)) break
    streak += 1
  }

  return streak
}

export const calcWeeklyCompletion = (habits, days = 7) => {
  const labels = getLastNDays(days)

  return labels.map((day) => {
    const doneCount = habits.filter((habit) => habit.completedOn.includes(day)).length
    const total = habits.length
    const percent = total ? Math.round((doneCount / total) * 100) : 0

    return { day, doneCount, total, percent }
  })
}

export function getYearsOfExperience() {
  const startDate = new Date(2019, 9, 1) // october 1st 2019
  const now = new Date()

  let years = now.getFullYear() - startDate.getFullYear()

  // If we haven't reached the month/day of the start date yet this year, subtract 1
  if (now.getMonth() < startDate.getMonth() || (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())) {
    years = years - 1
  }
  return years
}

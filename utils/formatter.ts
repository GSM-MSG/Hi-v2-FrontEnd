export const dateToString = (date: string, separator = '.') => {
  const yyyy = date.substring(0, 4)
  const MM = date.substring(5, 7)
  const dd = date.substring(8, 10)
  return `${yyyy}${separator}${MM}${separator}${dd}`
}


const Replace = (str: string, from: string, to: string) => {
  const index = str.indexOf(from)
  if (index > -1) {
    if (from === '') {
      return str
    } else {
      return str.substring(0, index) + to + str.substring(index + from.length)
    }
  }
}
type Replace<S extends string, From extends string, To extends string> = S extends 
  `${infer Start}${From}${infer End}` 
    ? From extends '' 
      ? S 
      : `${Start}${To}${End}` 
    : S
const MyCapitalize = (str: string) => {
  let newStr 
  return newStr = str[0].toUpperCase() + str.slice(1)
}
type MyCapitalize<S extends string> = S extends `${infer First}${infer Reset}` ? `${Uppercase<First>}${Reset}` : S
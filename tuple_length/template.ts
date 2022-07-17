const length = (array) => {
  if (array instanceof Array) {
    return array.length
  } else {
    return
  }
}
const a = [1, 2, 3] as const
type r = typeof a["length"]

type c = [number, string]
const z: c = [1, '2']
z[0] = 2

const b = [1, 2, 3]
type r2 = typeof b["length"]
type Length<T extends readonly any[]> = T["length"]
/**
 * js 实现
 */

const first = (array) => {
  if (array.length === 0) {
    return never
  } else {
    return array[0]
  }
}
// 步骤
// 1. 判断 array.length 是否为 0
// 2. 如果是，返回 never，否则返回 array[0]

/**
 * ts 实现
 */

// 1. T extends []
// 2. T extends [] ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer A, ...infer B] ? A : never
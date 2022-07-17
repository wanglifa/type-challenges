/**
 * js 实现
 */
const tupleToObject = (array) => {
  const obj = {}
  array.forEach((val) => {
    obj[val] = val
  })
  return obj
}
// js 步骤
// 1. 返回一个对象
// 2. 遍历array

/**
 * ts 实现
 */
// 1. = {}
// 2. [P in T[number]]

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

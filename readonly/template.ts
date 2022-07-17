/**
 * js 实现
 */
const myReadonly = (obj) => {
  const result = {}
  for (let key in obj) {
    result[`readonly${key}`] = obj[key]
  }
  return result
}

// js 步骤
// 1. 返回一个对象
// 2. 遍历obj (js 指的是对象，ts 指的是接口)
// 3. 加上 readonly 前缀
// 4. 通过 key 来获取 obj 的值

/**
 * tss 实现
 */
//1. = {}
//2. [P in keyof T]
//3. readonly [P in keyof T]
//4. T[P]
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
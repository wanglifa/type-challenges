

// js实现
const myPick = (todo, keys) => {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}
/**
 * js 步骤
 */
// 1. 返回一个对象
// 2. 遍历keys
// 3. todo[key] 取值
// 4. 看看 key 在不在 todo 里面

/**
 * ts 实现
 */
// 1. 返回一个对象直接写一个对象
// type MyPic<T, K> = {}

// 2. 遍历keys
// 这里的 K 是 'title' | 'completed' 也就是联合类型，联合类型的遍历用 in
// P 就是 'title' 或者 'completed'
// [P in K]

// 3. todo[key] 取值
// [P in K]: T[P]

// 4. 看看 key 在不在 todo 里面
// K extends keyof T
// keyof 可以获取 T 的所有 key，比如
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }
//keyof Todo // 'title' | 'description' | 'completed'

// extends 关键字对 K 进行约束，也就是 K 必须是 'title' | 'description' | 'completed'
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
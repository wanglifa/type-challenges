/**
 * js 实现
 */
const includes = (T: unknown[], U: unknown) => {
  let result = false
  for(let i = 0; i < T.length; i++) {
    if (T[i] === U) {
      result = true
    }
  }
  return result
}
// 问题 我们遍历数组必须要使用 In 关键字，但是in关键字只能在对象里使用，而我们又不需要返回对象，所以这种方案不适合

// 实现2
const includes2 = (T: unknown[], U: unknown) => {
  if (T.length === 0) {
    return false
  }
  const [first, ...reset] = T
  if (first === U) {
    return true
  } else {
    includes2(reset, U)
  }
}
// 步骤
// 1. 取出第一项,如果第一项等于 U 返回 true

// 2. 不等于就递归

// 最初的实现 type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Reset] ? First extends U ? true : Includes<Reset, U> : false

//   Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
// 上面对于boolean 类型最为 First 的时候，因为 boolean 就相当于 false | true 的联合类型，First 又是一个变量类型，所以会
// 走分布式条件语句就有得到 false => false = true true => false = false 所以结果是 true | false 也就是 boolean
// 解决方法给 First 和 U 都加一层[]
// type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Reset] ? [First] extends [U] ? true : Includes<Reset, U> : false

// 上面的代码虽然boolean的解决了，但是对于
// { a: 'A' } extends { readonly a: 'A' } => true
// true extends boolean => true
// 而我们的用例里是期望 false
// 使用 IsEqual
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T1>() => T1 extends B ? 1 : 2) ? true : false
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Reset] ? IsEqual<First, U> extends true ? true : Includes<Reset, U> : false






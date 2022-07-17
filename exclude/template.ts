
const todo = ['a', 'b', 'c', 'a']
const keys = ['a', 'b']
type r1 = Exclude<'a' | 'b' | 'c', 'c'> // 'b' | 'a'

const myExclude = (T, U: any[]) => {
  const result = []
  for (let i = 0; i < T.length; i++) {
    if (!U.includes(T[i])) {
      result.push(T[i])
    }
  }
  return result
}

// 步骤
// 1. 遍历 T 和遍历 U
// 2. T 里面的每一项跟 U 里面的每一项对比
// 3. 如果T里的某一项和 U 里的某一项相等就啥都不做，否则返回 T里的这一项

// ts
// 1. 因为 T 和 U 都是 联合类型，所以可以使用 extends 来都每一项进行比较，就相当于双重遍历
// type t1 = 'a' | 'b' | 'c' | 'd'
// type t2 = 'a'
// type t4 = t1 extends t2 ? '1' : '2'
// type t3 = MyExclude<t1, t2> // "1" | "2"
type MyExclude<T, U> = T extends U ? never : T
// type l1 = 0 extends 1 ? "1" : "2"

// type z1 = MyExclude<t1, t2>
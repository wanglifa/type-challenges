/**
 * js 实现
 */

const myOmit = (T: object, K: string[]) => {
  for (let key in T) {
    if (K.includes(key)) {
      delete T[key]
    }
  }
}
/**
 * 步骤
 */

// 1. 遍历对象
// 2. 判断当前的对象key在不在K里，在就过滤
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
// 遍历对象 [P in keyof T]
// 过滤key
// as P extends K ? never : P
// 使用 key Remapping in Mapped Types(as)
// 类型重映射：在我们遍历可迭代对象时进行过滤

// // Remove the 'kind' property
// type RemoveKindField<Type> = {
//   [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
// };

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// type KindlessCircle = RemoveKindField<Circle>;
// {
//   radius: number;
// }
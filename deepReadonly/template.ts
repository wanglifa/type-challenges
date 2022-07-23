/**
 * js 实现
 */
const deepReadonly = (T: object) => {
  if(typeof T !== 'object') {
    return 
  } else {
    Object.keys(T).forEach(key => {

    })
  }

}
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// 如何检测一个类型是不是对象或者数组
// 通过 keyof  keyof T extends never => 非对象或者数组

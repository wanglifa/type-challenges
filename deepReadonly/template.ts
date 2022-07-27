/**
 * js 实现
 */
 function test(obj) {
  const deep = (obj) => {
    let result = {};
    if (typeof obj !== "object") {
      result = obj;
    } else {
      for (let key in obj) {
        result[`readonly ${key}`] = deep(obj[key]);
      }
    }
    return result
  };

 return deep(obj);
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// 如何检测一个类型是不是对象或者数组
// 通过 keyof  keyof T extends never => 非对象或者数组

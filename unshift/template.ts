/**
 * js 实现
 */
const unshift = (T: unknown[], U: any) => {
  return [U, ...T]
}

type Unshift<T extends unknown[], U> = [U, ...T]
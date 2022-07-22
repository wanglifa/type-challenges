/**
 * js 实现
 */

const push = (T: unknown[], U: any) => {
  return [...T, U]
}

type Push<T extends unknown[], U> = [...T, U]
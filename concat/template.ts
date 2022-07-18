/**
 * js 实现
 */
const concat = (T: unknown[], U: unknown[]) => {
  return [...T, ...U]
}

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
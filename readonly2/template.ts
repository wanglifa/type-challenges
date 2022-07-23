type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [R in keyof T as R extends K ? never : R]: T[R]
}
type z = Omit<{a: 1}, 'a'>
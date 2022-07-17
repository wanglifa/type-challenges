/**
 * js 实现
 */

// const if = (C,T,F) => {
//   return C ? T : F
// }

type If<C extends boolean, T, F> = C extends true ? T : F
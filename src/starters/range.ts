import { Starter } from '../types'

export function range(start: number, count: number): Starter<number> {
  return function () {
    return {
      *[Symbol.iterator]() {
        for (let i = 0; i < count; i++) {
          yield start + i
        }
      },
    }
  }
}

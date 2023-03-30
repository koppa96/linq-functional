import { Operator } from '../types'

export function skipLast<T>(amount = 1): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const buffer: T[] = []
        for (const element of source) {
          buffer.push(element)
          if (buffer.length > amount) {
            // This is surely not undefined, as the buffer is not empty
            const elementToEmit = buffer.shift()!
            yield elementToEmit
          }
        }
      },
    }
  }
}

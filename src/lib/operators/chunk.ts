import { Operator } from '../types'

export function chunk<T>(size: number): Operator<T, T[]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let chunk: T[] = []
        for (const element of source) {
          chunk.push(element)
          if (chunk.length === size) {
            yield chunk
            chunk = []
          }
        }

        if (chunk.length > 0) {
          yield chunk
        }
      },
    }
  }
}

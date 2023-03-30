import { Operator } from '../types'

export function takeLast<T>(amount = 1): Operator<T, T> {
  return function (source) {
    const buffer: T[] = []
    for (const element of source) {
      buffer.push(element)
      if (buffer.length > amount) {
        buffer.shift()
      }
    }

    return buffer
  }
}

import { Finisher } from '../types'

export function elementAt<T>(index: number): Finisher<T, T> {
  return function (source) {
    if (index < 0) {
      throw new Error('Index out of range.')
    }

    let i = 0
    for (const element of source()) {
      if (i === index) {
        return element
      }
      i++
    }

    throw new Error('Index out of range.')
  }
}

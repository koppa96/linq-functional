import { AsyncFinisher } from '../types'

export function elementAtAsync<T>(index: number): AsyncFinisher<T, T> {
  return async function (source) {
    if (index < 0) {
      throw new Error('Index out of range.')
    }

    let i = 0
    for await (const item of source) {
      if (i === index) {
        return item
      }
      i++
    }

    throw new Error('Index out of range.')
  }
}

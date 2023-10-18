import { AsyncFinisher } from '../types'

export function averageOfAsync<T>(
  selector: (item: T) => number
): AsyncFinisher<T, number> {
  return async function (source) {
    let sum = 0
    let count = 0

    for await (const element of source) {
      sum += selector(element)
      count++
    }

    return sum / count
  }
}

import { Finisher } from '../types'

export function averageOf<T>(
  selector: (item: T) => number
): Finisher<T, number> {
  return function (source) {
    let sum = 0
    let count = 0

    for (const element of source) {
      sum += selector(element)
      count++
    }

    return sum / count
  }
}

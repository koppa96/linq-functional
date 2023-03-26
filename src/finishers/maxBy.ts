import { Comparator, defaultComparator, Finisher } from '../types'

export function maxBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null> {
  return function (source) {
    let max: T | null = null
    let maxValue: R | null = null

    for (const element of source) {
      const result = selector(element)
      if (maxValue === null || comparator(maxValue, result) < 0) {
        max = element
        maxValue = result
      }
    }

    return max
  }
}

import { Comparator, defaultComparator, Finisher } from '../types'

export function minBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, T | null> {
  return function (source) {
    let min: T | null = null
    let minValue: R | null = null

    for (const element of source) {
      const result = selector(element)
      if (minValue === null || comparator(minValue, result) > 0) {
        min = element
        minValue = result
      }
    }

    return min
  }
}

import { defaultEqualityCheck, EqualityCheck, Finisher } from '../types'

export function sequenceEquals<T>(
  other: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    const iterator1 = source()[Symbol.iterator]()
    const iterator2 = other[Symbol.iterator]()

    while (true) {
      const result1 = iterator1.next()
      const result2 = iterator2.next()

      if (result1.done) {
        return !!result2.done
      } else {
        if (result2.done) {
          return false
        } else {
          if (!equalityCheck(result1.value, result2.value)) {
            return false
          }
        }
      }
    }
  }
}

import { defaultEqualityCheck, EqualityCheck, Finisher } from '../types'

/**
 * Checks if the given sequence has the same elements as the queried sequence.
 * @param other The other sequence
 * @param equalityCheck An optional function to check if 2 elements are equal
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   sequenceEquals([1, 2, 3])
 * )
 * console.log(result) // Outputs true
 */
export function sequenceEquals<T>(
  other: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    const iterator1 = source[Symbol.iterator]()
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

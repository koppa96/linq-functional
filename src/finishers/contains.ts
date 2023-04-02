import { EqualityCheck, Finisher, defaultEqualityCheck } from '../types'

export function contains<T>(
  element: T,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    for (const sourceElement of source) {
      if (equalityCheck(sourceElement, element)) {
        return true
      }
    }

    return false
  }
}

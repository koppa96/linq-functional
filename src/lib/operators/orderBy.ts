import { toArray } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { Comparator, Operator, defaultComparator } from '../types'

export function orderBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Operator<T, T> {
  return function (source) {
    return {
      [Symbol.iterator]() {
        const sourceArray = query(from(source), toArray())
        sourceArray.sort((left, right) => {
          return comparator(selector(left), selector(right))
        })
        return sourceArray[Symbol.iterator]()
      },
    }
  }
}

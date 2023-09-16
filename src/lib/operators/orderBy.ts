import { toArray } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { Comparator, Operator, defaultComparator } from '../types'
import { QuickSorter } from '../utils/quickSorter'

export function orderBy<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Operator<T, T> {
  const quickSorter = new QuickSorter(selector, comparator)

  return function (source) {
    return {
      [Symbol.iterator]() {
        const sourceArray = query(from(source), toArray())
        quickSorter.sort(sourceArray)
        return sourceArray[Symbol.iterator]()
      },
    }
  }
}

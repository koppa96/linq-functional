import { Comparator, defaultComparator, Finisher } from '../types'
import { query } from '../query'
import { select } from '../operators/select'
import { max } from './max'
import { from } from '../starters/from'

export function maxOf<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, R | null> {
  return function (source) {
    return query(from(source), select(selector), max(comparator))
  }
}

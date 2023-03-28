import { Comparator, defaultComparator, Finisher } from '../types'
import { query } from '../query'
import { from } from '../starters/from'
import { select } from '../operators/select'
import { min } from './min'

export function minOf<T, R>(
  selector: (item: T) => R,
  comparator: Comparator<R> = defaultComparator
): Finisher<T, R | null> {
  return function (source) {
    return query(source, select(selector), min(comparator))
  }
}

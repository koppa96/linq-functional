import { Comparator, Operator, defaultComparator } from '../types'
import { orderBy } from './orderBy'

export function orderByDescending<T, P>(
  selector: (item: T) => P,
  comparator: Comparator<P> = defaultComparator
): Operator<T, T> {
  return orderBy(selector, (left, right) => comparator(right, left))
}

import { Comparator, defaultComparator, Finisher } from '../types'
import { maxBy } from './maxBy'

export function max<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return maxBy(x => x, comparator)
}

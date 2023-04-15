import { Comparator, defaultComparator, Finisher } from '../types'
import { minBy } from './minBy'

export function min<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return minBy(x => x)
}

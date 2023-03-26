import { Finisher } from '../types'
import { aggregate } from './aggregate'

export function sumOf<T>(selector: (item: T) => number): Finisher<T, number> {
  return aggregate(0, (result, item) => result + selector(item))
}

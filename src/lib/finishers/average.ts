import { Finisher } from '../types'
import { averageOf } from './averageOf'

export function average(): Finisher<number, number> {
  return averageOf(x => x)
}

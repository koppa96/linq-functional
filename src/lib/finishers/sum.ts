import { Finisher } from '../types'
import { sumOf } from './sumOf'

export function sum(): Finisher<number, number> {
  return sumOf(x => x)
}

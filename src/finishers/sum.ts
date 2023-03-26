import { Finisher } from '../types'
import { aggregate } from './aggregate'

export function sum(): Finisher<number, number> {
  return function (source) {
    return aggregate<number, number>(0, (sum, item) => sum + item)(source)
  }
}

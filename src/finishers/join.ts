import { Finisher } from '../types'
import { toArray } from './toArray'

export function join(separator: string): Finisher<string, string> {
  return function (source) {
    return toArray<string>()(source).join(separator)
  }
}

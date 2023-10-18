import { AsyncFinisher } from '../types'
import { averageOfAsync } from './averageOfAsync'

export function averageAsync(): AsyncFinisher<number, number> {
  return averageOfAsync(x => x)
}

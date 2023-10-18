import { EqualityCheck, defaultEqualityCheck } from '../../lib'
import { queryAsync } from '../query'
import { fromAsync } from '../starters/fromAsync'
import { AsyncFinisher } from '../types'
import { anyAsync } from './anyAsync'

export function containsAsync<T>(
  item: T,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): AsyncFinisher<T, boolean> {
  return function (source) {
    return queryAsync(
      fromAsync(source),
      anyAsync(sourceItem => equalityCheck(item, sourceItem))
    )
  }
}

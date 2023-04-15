import { assert, describe, it } from 'vitest'
import { all } from '../../lib'

describe('all', () => {
  it('is true when the iterable is empty', () => {
    const operator = all<number>(value => value < 1)
    const source: number[] = []

    const result = operator(source)

    assert.isTrue(result)
  })

  it('is false when an element does not match the predicate', () => {
    const operator = all<number>(value => value < 1)
    const source = [1, 2]

    const result = operator(source)

    assert.isFalse(result)
  })

  it('is true when all elements match the predicate', () => {
    const operator = all<number>(value => value < 1)
    const source = [0, 1]

    const result = operator(source)

    assert.isFalse(result)
  })
})

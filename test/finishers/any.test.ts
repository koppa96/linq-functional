import { assert, describe, it } from 'vitest'
import { any } from '../../src'

describe('any', () => {
  it('is false when receives an empty iterable', () => {
    const operator = any<number>()
    const source: number[] = []

    const result = operator(source)

    assert.isFalse(result)
  })

  it('is true when the iterable is not empty', () => {
    const operator = any<number>()
    const source = [1]

    const result = operator(source)

    assert.isTrue(result)
  })

  it('is false when no elements match the predicate', () => {
    const operator = any<number>(value => value > 1)
    const source = [1]

    const result = operator(source)

    assert.isFalse(result)
  })

  it('is true when one element matches the predicate', () => {
    const operator = any<number>(value => value > 1)
    const source = [2]

    const result = operator(source)

    assert.isTrue(result)
  })
})

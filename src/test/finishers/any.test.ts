import { describe, expect, it } from 'vitest'
import { any, empty, from, query } from '../../lib'

describe('any', () => {
  it('is false when receives an empty iterable', () => {
    const result = query(empty<number>(), any())

    expect(result).toBe(false)
  })

  it('is true when the iterable is not empty', () => {
    const result = query(from([1]), any())

    expect(result).toBe(true)
  })

  it('is false when no elements match the predicate', () => {
    const result = query(
      from([0, 1]),
      any(value => value > 1)
    )

    expect(result).toBe(false)
  })

  it('is true when one element matches the predicate', () => {
    const result = query(
      from([1, 2]),
      any(value => value > 1)
    )

    expect(result).toBe(true)
  })
})

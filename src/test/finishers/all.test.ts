import { describe, expect, it } from 'vitest'
import { all, empty, from, query } from '../../lib'

describe('all', () => {
  it('is true when the iterable is empty', () => {
    const result = query(
      empty<number>(),
      all(value => value < 1)
    )

    expect(result).toBe(true)
  })

  it('is false when an element does not match the predicate', () => {
    const result = query(
      from([1, 2]),
      all(value => value < 1)
    )

    expect(result).toBe(false)
  })

  it('is true when all elements match the predicate', () => {
    const result = query(
      from([0, 1]),
      all(value => value < 2)
    )

    expect(result).toBe(true)
  })
})

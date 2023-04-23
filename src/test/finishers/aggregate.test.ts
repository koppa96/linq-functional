import { describe, expect, it } from 'vitest'
import { aggregate, empty, from, query } from '../../lib'

describe('aggregate', () => {
  it('returns the seed if the iterable is empty', () => {
    const seed = 0

    const result = query(
      empty<number>(),
      aggregate(seed, (result, item) => result + item)
    )

    expect(result).toBe(seed)
  })

  it('calculates the result if the iterable is not empty', () => {
    const seed = 10

    const result = query(
      from([1, 2, 3]),
      aggregate(10, (result, item) => result + item)
    )

    expect(result).toBe(10 + 1 + 2 + 3)
  })
})

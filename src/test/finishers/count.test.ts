import { describe, expect, it } from 'vitest'
import { count, empty, from, query } from '../../lib'

describe('count', () => {
  it('should return zero for empty collections', () => {
    const result = query(empty<number>(), count())
    expect(result).toBe(0)
  })

  it('should return the amount of elements for non-empty collections', () => {
    const result = query(from([1, 2, 3]), count())
    expect(result).toBe(3)
  })

  it('should return the number of elements that match condition', () => {
    const result = query(
      from([1, 2, 3]),
      count(item => item < 3)
    )
    expect(result).toBe(2)
  })
})

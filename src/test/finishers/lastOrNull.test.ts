import { describe, expect, it } from 'vitest'
import { empty, from, lastOrNull, query } from '../../lib'

describe('lastOrNull', () => {
  it('should return null if the collection is empty', () => {
    const result = query(empty<number>(), lastOrNull())
    expect(result).toBe(null)
  })

  it('should return the last element of the collection', () => {
    const result = query(from([1, 2, 3]), lastOrNull())
    expect(result).toBe(3)
  })

  it('should return null if no elements match condition', () => {
    const result = query(
      from([1, 2, 3]),
      lastOrNull(item => item > 3)
    )

    expect(result).toBe(null)
  })

  it('should return the last element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      lastOrNull(item => item < 3)
    )

    expect(result).toBe(2)
  })
})

import { describe, expect, it } from 'vitest'
import { empty, firstOrNull, from, query } from '../../lib'

describe('firstOrNull', () => {
  it('should return null if the collection is empty', () => {
    const result = query(empty<number>(), firstOrNull())
    expect(result).toBe(null)
  })

  it('should return the first element of the collection', () => {
    const result = query(from([1, 2, 3]), firstOrNull())
    expect(result).toBe(1)
  })

  it('should return null if no elements match condition', () => {
    const result = query(
      from([1, 2, 3]),
      firstOrNull(item => item > 3)
    )

    expect(result).toBe(null)
  })

  it('should return the first element that matches the condition', () => {
    const result = query(
      from([1, 2, 3]),
      firstOrNull(item => item > 2)
    )

    expect(result).toBe(3)
  })
})

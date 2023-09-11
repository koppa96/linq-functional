import { describe, expect, it } from 'vitest'
import { empty, from, min, query } from '../../lib'

describe('min', () => {
  it('should return null if the collection is empty', () => {
    const result = query(empty<number>(), min())
    expect(result).toBe(null)
  })

  it('should return the smallest item in the collection', () => {
    const result = query(from([1, 2, 0, 3]), min())
    expect(result).toBe(0)
  })
})

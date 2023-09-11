import { describe, expect, it } from 'vitest'
import { empty, from, max, query } from '../../lib'

describe('max', () => {
  it('should return null if the collection is empty', () => {
    const result = query(empty<number>(), max())
    expect(result).toBe(null)
  })

  it('should return the largest item in the collection', () => {
    const result = query(from([1, 2, 4, 3]), max())
    expect(result).toBe(4)
  })
})

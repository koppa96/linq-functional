import { describe, expect, it } from 'vitest'
import { elementAt, empty, from, query } from '../../lib'

describe('elementAt', () => {
  it('should throw if the index is less than zero', () => {
    expect(() => {
      query(empty<number>(), elementAt(-1))
    }).toThrow()
  })

  it('should throw if the index is greater than the item count - 1', () => {
    expect(() => {
      query(empty<number>(), elementAt(0))
    }).toThrow()
  })

  it('should return the item at the correct zero based index', () => {
    const result = query(from([1, 2, 3]), elementAt(1))
    expect(result).toBe(2)
  })
})

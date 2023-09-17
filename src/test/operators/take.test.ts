import { describe, expect, it } from 'vitest'
import { from, query, take, toArray } from '../../lib'

describe('take', () => {
  it('should take the first N elements', () => {
    const result = query(from([1, 2, 3]), take(2), toArray())
    expect(result).toEqual([1, 2])
  })

  it('should take all elements if there are less elements in a source', () => {
    const result = query(from([1, 2, 3]), take(5), toArray())
    expect(result).toEqual([1, 2, 3])
  })
})

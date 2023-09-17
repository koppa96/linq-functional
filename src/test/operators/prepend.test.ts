import { describe, expect, it } from 'vitest'
import { from, prepend, query, toArray } from '../../lib'

describe('prepend', () => {
  it('should prepend a single element', () => {
    const result = query(from([1, 2, 3]), prepend(4), toArray())
    expect(result).toEqual([4, 1, 2, 3])
  })

  it('should prepend multiple elements', () => {
    const result = query(from([1, 2, 3]), prepend(4, 5, 6), toArray())
    expect(result).toEqual([4, 5, 6, 1, 2, 3])
  })

  it('should prepend the elements of the provided iterable', () => {
    const result = query(from([1, 2, 3]), prepend([4, 5, 6]), toArray())
    expect(result).toEqual([4, 5, 6, 1, 2, 3])
  })
})

import { describe, expect, it } from 'vitest'
import { append, from, query, toArray } from '../../lib'

describe('append', () => {
  it('should append a single element', () => {
    const result = query(from([1, 2, 3]), append(4), toArray())
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('should append multiple elements', () => {
    const result = query(from([1, 2, 3]), append(4, 5, 6), toArray())
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should append the elements of the provided iterable', () => {
    const result = query(from([1, 2, 3]), append([4, 5, 6]), toArray())
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})

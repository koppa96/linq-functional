import { describe, expect, it } from 'vitest'
import { empty, from, insert, query, toArray } from '../../lib'

describe('insert', () => {
  it('should throw if the index is negative', () => {
    expect(() => {
      query(empty<number>(), insert(-1, 1), toArray())
    }).toThrow()
  })

  it('should throw if the index is after the last element', () => {
    expect(() => {
      query(empty<number>(), insert(1, 1), toArray())
    }).toThrow()
  })

  it('should insert a single element', () => {
    const result = query(from([1, 2]), insert(1, 0), toArray())
    expect(result).toEqual([1, 0, 2])
  })

  it('should insert multiple elements', () => {
    const result = query(from([1, 2]), insert(1, 0, 3), toArray())
    expect(result).toEqual([1, 0, 3, 2])
  })

  it('should insert multiple elements provided in an iterable', () => {
    const result = query(from([1, 2]), insert(1, [0, 3]), toArray())
    expect(result).toEqual([1, 0, 3, 2])
  })
})

import { describe, expect, it } from 'vitest'
import { chunk, empty, from, query, toArray } from '../../lib'

describe('chunk', () => {
  it('should return an empty collection for an empty collection', () => {
    const result = query(empty<number>(), chunk(5), toArray())
    expect(result).toHaveLength(0)
  })

  it('should return a single chunk if there are less items than the chunk size', () => {
    const result = query(from([1, 2, 3]), chunk(5), toArray())

    expect(result).toEqual([[1, 2, 3]])
  })

  it('should return as many chunks as needed to fit the chunked elements', () => {
    const result = query(from([1, 2, 3, 4, 5, 6, 7]), chunk(5), toArray())

    expect(result).toHaveLength(2)
    expect(result).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7],
    ])
  })
})

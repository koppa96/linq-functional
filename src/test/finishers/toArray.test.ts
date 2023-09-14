import { describe, expect, it } from 'vitest'
import { empty, from, query, toArray } from '../../lib'

describe('toArray', () => {
  it('should return an empty array if a collection is empty', () => {
    const result = query(empty<number>(), toArray())

    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(0)
  })

  it('should return the items in an array if the collection is not empty', () => {
    const source = new Set<number>()
    source.add(1)
    source.add(2)
    source.add(3)

    const result = query(from(source), toArray())

    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(3)

    expect(result).includes(1)
    expect(result).includes(2)
    expect(result).includes(3)
  })
})

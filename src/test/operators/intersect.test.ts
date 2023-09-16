import { describe, expect, it } from 'vitest'
import { empty, from, intersect, query, toArray } from '../../lib'

describe('intersect', () => {
  it('should return an empty collection if the source is empty', () => {
    const result = query(empty<number>(), intersect([1, 2, 3]), toArray())
    expect(result).toEqual([])
  })

  it('should return an empty collection if the target is empty', () => {
    const result = query(from([1, 2, 3]), intersect([] as number[]), toArray())
    expect(result).toEqual([])
  })

  it('should return the distinct elements that are present in both collections', () => {
    const result = query(from([1, 2, 3, 2, 5]), intersect([2, 3, 4]), toArray())
    expect(result).toEqual([2, 3])
  })
})

import { describe, expect, it } from 'vitest'
import { crossJoin, empty, from, query, toArray } from '../../lib'

describe('crossJoin', () => {
  it('should return an empty collection if the source is empty', () => {
    const result = query(
      empty<number>(),
      crossJoin(['one, two, three']),
      toArray()
    )
    expect(result).toEqual([])
  })

  it('should return an empty collection if the target sequence is empty', () => {
    const result = query(from([1, 2, 3]), crossJoin([]), toArray())
    expect(result).toEqual([])
  })

  it('should return the cartesian product of two sequences', () => {
    const result = query(
      from([1, 2, 3]),
      crossJoin(['one', 'two', 'three']),
      toArray()
    )

    expect(result).toEqual([
      [1, 'one'],
      [1, 'two'],
      [1, 'three'],
      [2, 'one'],
      [2, 'two'],
      [2, 'three'],
      [3, 'one'],
      [3, 'two'],
      [3, 'three'],
    ])
  })
})

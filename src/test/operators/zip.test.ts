import { describe, expect, it } from 'vitest'
import { from, query, toArray, zip } from '../../lib'

describe('zip', () => {
  it('should pair elements based on their indices', () => {
    const result = query(
      from([1, 2, 3]),
      zip(['one', 'two', 'three']),
      toArray()
    )

    expect(result).toEqual([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ])
  })

  it('should return a result of the length of the source sequence if it contains less elements', () => {
    const result = query(from([1, 2]), zip(['one', 'two', 'three']), toArray())

    expect(result).toEqual([
      [1, 'one'],
      [2, 'two'],
    ])
  })

  it('should return a result of the length of the target sequence if it contains less elements', () => {
    const result = query(from([1, 2, 3]), zip(['one', 'two']), toArray())

    expect(result).toEqual([
      [1, 'one'],
      [2, 'two'],
    ])
  })
})

import { describe, expect, it } from 'vitest'
import { query, toArray } from '../../lib'
import { repeat } from '../../lib/starters/repeat'

describe('repeat', () => {
  it('should return an iterable containing the specified item, the specified times', () => {
    const result = query(repeat(0, 5), toArray())
    expect(result).toEqual([0, 0, 0, 0, 0])
  })
})

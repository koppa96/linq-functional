import { describe, expect, it } from 'vitest'
import { from, query } from '../../lib'

describe('from', () => {
  it('should return the iterable passed to it', () => {
    const source = [1, 2, 3]
    const result = query(from(source))
    expect(result).toBe(source)
  })
})

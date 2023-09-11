import { describe, expect, it } from 'vitest'
import { empty, from, join, query } from '../../lib'

describe('join', () => {
  it('should return empty string for empty collections', () => {
    const result = query(empty<string>(), join())
    expect(result).toBe('')
  })

  it('should join the elements with a comma by default', () => {
    const result = query(from(['apple', 'banana']), join())
    expect(result).toBe('apple,banana')
  })

  it('should join the elements with custom separator', () => {
    const result = query(from(['apple', 'banana']), join('/'))
    expect(result).toBe('apple/banana')
  })
})

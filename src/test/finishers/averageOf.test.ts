import { describe, expect, it } from 'vitest'
import { averageOf } from '../../lib'
import { Person } from '../utils/person'

describe('averageOf', () => {
  it('returns NaN for empty sequence', () => {
    const operator = averageOf<Person>(person => person.age)
    const source: Person[] = []

    const result = operator(source)

    expect(result).toBe(NaN)
  })

  it('returns the average for non-empty sequence', () => {
    const operator = averageOf<Person>(person => person.age)
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = operator(source)

    expect(result).toBe((25 + 23) / 2)
  })
})

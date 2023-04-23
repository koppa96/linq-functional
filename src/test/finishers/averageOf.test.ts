import { describe, expect, it } from 'vitest'
import { averageOf, empty, from, query } from '../../lib'
import { Person } from '../utils/person'

describe('averageOf', () => {
  it('returns NaN for empty sequence', () => {
    const result = query(
      empty<Person>(),
      averageOf(person => person.age)
    )

    expect(result).toBe(NaN)
  })

  it('returns the average for non-empty sequence', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      averageOf(person => person.age)
    )

    expect(result).toBe((25 + 23) / 2)
  })
})

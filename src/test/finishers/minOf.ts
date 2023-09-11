import { describe, expect, it } from 'vitest'
import { empty, from, minOf, query } from '../../lib'
import { Person } from '../utils/person'

describe('minOf', () => {
  it('should return null when the collection is empty', () => {
    const result = query(
      empty<Person>(),
      minOf(person => person.age)
    )

    expect(result).toBe(null)
  })

  it('should return the smallest associated value in the collection', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      minOf(person => person.age)
    )

    expect(result).toBe(23)
  })
})

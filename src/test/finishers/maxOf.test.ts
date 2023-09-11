import { describe, expect, it } from 'vitest'
import { empty, from, maxOf, query } from '../../lib'
import { Person } from '../utils/person'

describe('maxOf', () => {
  it('should return null when the collection is empty', () => {
    const result = query(
      empty<Person>(),
      maxOf(person => person.age)
    )

    expect(result).toBe(null)
  })

  it('should return the largest associated value in the collection', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      maxOf(person => person.age)
    )

    expect(result).toBe(25)
  })
})

import { describe, expect, it } from 'vitest'
import { empty, from, query, sum, sumOf } from '../../lib'
import { Person } from '../utils/person'

describe('sumOf', () => {
  it('should return zero for an empty collection', () => {
    const result = query(
      empty<Person>(),
      sumOf(person => person.age)
    )
    expect(result).toBe(0)
  })

  it('should return the correct sum if the collection is not empty', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      sumOf(person => person.age)
    )
    expect(result).toBe(25 + 23)
  })
})

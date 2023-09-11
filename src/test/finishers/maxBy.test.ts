import { describe, expect, it } from 'vitest'
import { empty, from, maxBy, query } from '../../lib'
import { Person } from '../utils/person'

describe('maxBy', () => {
  it('should return null if the collection is empty', () => {
    const result = query(
      empty<Person>(),
      maxBy(person => person.age)
    )
    expect(result).toBe(null)
  })

  it('should return the item with the largest associated value in the collection', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      maxBy(person => person.age)
    )

    expect(result).toBe(source[0])
  })
})

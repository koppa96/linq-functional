import { describe, expect, it } from 'vitest'
import { empty, from, query, toMap } from '../../lib'
import { Person } from '../utils/person'

describe('toMap', () => {
  it('should return an empty map if the collection is empty', () => {
    const result = query(
      empty<Person>(),
      toMap(person => person.name)
    )

    expect(result).toHaveLength(0)
  })

  it('should return a map with keys selected by the key selector, and values of the original source', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      toMap(person => person.name)
    )

    expect(result.has('John Test')).toBe(true)
    expect(result.has('Jane Test')).toBe(true)
    expect(result).toHaveLength(2)

    expect(result.get('John Test')).equals(source[0])
    expect(result.get('Jane Test')).equals(source[1])
  })

  it('should return a map with keys selected by the key selector, and values selected by the value selector', () => {
    const source: Person[] = [
      { name: 'John Test', age: 25 },
      { name: 'Jane Test', age: 23 },
    ]

    const result = query(
      from(source),
      toMap(
        person => person.name,
        person => person.age
      )
    )

    expect(result.has('John Test')).toBe(true)
    expect(result.has('Jane Test')).toBe(true)
    expect(result).toHaveLength(2)

    expect(result.get('John Test')).equals(source[0].age)
    expect(result.get('Jane Test')).equals(source[1].age)
  })
})

import { describe, expect, it } from 'vitest'
import { contains, empty, from, query } from '../../lib'
import { Person } from '../utils/person'

describe('contains', () => {
  it('returns false if the collection is empty', () => {
    const result = query(empty<number>(), contains(1))
    expect(result).toBe(false)
  })

  it('returns false if the collection is not empty, but the item is not present', () => {
    const result = query(from([1, 2]), contains(3))
    expect(result).toBe(false)
  })

  it('returns true if the collection contains the searched element', () => {
    const result = query(from([1, 2]), contains(2))
    expect(result).toBe(true)
  })

  it('works with custom equality checks', () => {
    const source: Person[] = [
      { name: 'John Test', age: 27 },
      { name: 'Jane Test', age: 9 },
    ]

    const searchedElement: Person = { name: 'John Test', age: 27 }
    const result = query(
      from(source),
      contains(
        searchedElement,
        (item, searchedElement) => item.name === searchedElement.name
      )
    )

    expect(result).toBe(true)
  })
})

import { describe, expect, it } from 'vitest'
import { crossJoin, empty, from, innerJoin, query, toArray } from '../../lib'

interface Person {
  id: number
  name: string
}

interface Dog {
  id: number
  name: string
  personId: number
}

describe('innerJoin', () => {
  it('should return an empty collection if the source is empty', () => {
    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 1,
      },
    ]

    const result = query(
      empty<Person>(),
      innerJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([])
  })

  it('should return an empty collection if the target sequence is empty', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
    ]

    const result = query(
      from(people),
      innerJoin([] as Dog[], (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([])
  })

  it('should return an empty collection if no pairs satisfy the condition', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
    ]

    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 2,
      },
    ]

    const result = query(
      from(people),
      innerJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([])
  })

  it('should return the inner join of the two sequences', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Jane',
      },
    ]

    const dogs: Dog[] = [
      {
        id: 1,
        name: 'Lola',
        personId: 2,
      },
      {
        id: 2,
        name: 'Luna',
        personId: 3,
      },
    ]

    const result = query(
      from(people),
      innerJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        {
          id: 2,
          name: 'Jane',
        },
        {
          id: 1,
          name: 'Lola',
          personId: 2,
        },
      ],
    ])
  })
})

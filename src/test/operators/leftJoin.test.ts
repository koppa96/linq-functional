import { describe, expect, it } from 'vitest'
import { empty, from, innerJoin, leftJoin, query, toArray } from '../../lib'

interface Person {
  id: number
  name: string
}

interface Dog {
  id: number
  name: string
  personId: number
}

describe('leftJoin', () => {
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
      leftJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([])
  })

  it('should join null if the target is empty', () => {
    const people: Person[] = [
      {
        id: 1,
        name: 'John',
      },
    ]

    const result = query(
      from(people),
      leftJoin([] as Dog[], (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        {
          id: 1,
          name: 'John',
        },
        null,
      ],
    ])
  })

  it('should join null to the source if there are no matching pairs', () => {
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
      leftJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        {
          id: 1,
          name: 'John',
        },
        null,
      ],
    ])
  })

  it('should join matching elements', () => {
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
      leftJoin(dogs, (person, dog) => person.id === dog.personId),
      toArray()
    )

    expect(result).toEqual([
      [
        {
          id: 1,
          name: 'John',
        },
        null,
      ],
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

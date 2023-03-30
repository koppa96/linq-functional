import { query } from './query'
import { from } from './starters/from'
import { take } from './operators/take'
import { toArray } from './finishers/toArray'
import { skip } from './operators/skip'
import { select } from './operators/select'
import { toMap } from './finishers/toMap'
import { selectMany } from './operators/selectMany'
import { where } from './operators/where'
import { first } from './finishers/first'
import { last } from './finishers/last'
import { max } from './finishers/max'
import { count } from './finishers/count'
import { groupBy } from './operators/groupBy'
import { skipLast } from './operators/skipLast'
import { takeLast } from './operators/takeLast'
import { reverse } from './operators/reverse'
import { innerJoin } from './operators/innerJoin'

interface Person {
  name: string
  age: number
}

const people: Person[] = [
  { name: 'A', age: 16 },
  { name: 'B', age: 23 },
  { name: 'C', age: 16 },
  { name: 'D', age: 11 },
  { name: 'E', age: 23 },
  { name: 'F', age: 16 },
]

const result = query(
  from([16, 11]),
  innerJoin({
    other: people,
    on: (age, person) => person.age === age,
    into: (age, person) => [age, person.name] as const,
  })
)

for (const [age, name] of result) {
  console.log(`${age}, ${name}`)
}

import { query } from './query'
import { from } from './starters/from'
import { take } from './operators/take'
import { toArray } from './finishers/toArray'
import { skip } from './operators/skip'
import { select } from './operators/select'
import { toMap } from './finishers/toMap'

const result = query(
  from([1, 2, 3, 4, 5, 6]),
  skip(2),
  take(2),
  select(x => x * 2),
  toMap(
    x => `${x}`,
    x => x * 3
  )
)

console.log(result)

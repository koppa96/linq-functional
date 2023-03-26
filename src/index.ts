import { query } from './query'
import { from } from './starters/from'
import { sequenceEquals } from './finishers/sequenceEquals'
import { where } from './operators/where'
import { min } from './finishers/min'
import { select } from './operators/select'

const result = query(
  from([1, 2, 3]),
  where(x => x < 3),
  select(x => x * 2),
  min()
)

console.log(result)

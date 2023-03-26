import { query } from './query'
import { from } from './starters/from'
import { sequenceEquals } from './finishers/sequenceEquals'
import { where } from './operators/where'

const result = query(
  from([1, 2, 3]),
  where(x => x < 3)
)

console.log(result)

---
layout: doc
prev:
  text: Deferred execution
  link: /deferred-execution
next:
  text: Extensibility
  link: /extensibility
---

# Finishers

Some special operators are called `Finisher`s. They are used to calculate aggregated values from queries, or to materialize query results into a builtin collection type.

Materializing your query results can be advantageous when you have a complex query or a large dataset, and you need to iterate over the results multiple times.

A `Finisher` is always the last operator in a query. No other operators can be placed after them. If your query ends with a `Finisher`, the query result is not going to be an iterable, but rather the output of the `Finisher`.

```ts
import { query, from, first } from 'linq-functional'

const numbers = [1, 2, 3]
const result: number = query(
  from(numbers),
  first()
) // 1
```

In this case for example the result is the first item of the query source. When you finish your query with a `Finisher`, it will be executed immediately.

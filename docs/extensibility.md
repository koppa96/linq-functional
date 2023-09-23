---
layout: doc
prev:
  text: Finishers
  link: /finishers
next: false
---

# Extensibility

The main strength of this functional approach is that the library is extensible. Extension can mean wrapping or composing existing operators into a new operator, or creating a completely new one.

## New operator

An operator is just a function that receives a source, as an `Iterable` and returns another `Iterable` as a result.

Let's say that you write some app that has multiple queries that - at some point - need to check if a number is even. Instead of writing `where(item => item % 2 === 0)` every time, you can extract the logic into a new operator.

```ts
import { Operator } from 'linq-functional'

// Will return a function that accepts an Iterable<number>, and result in an Iterable<number>
function isEven(): Operator<number, number> {
  return function (source) {
    return { // Create a new object that has a function called Symbol.iterator, so it implements the `Iterable` interface.
      *[Symbol.iterator]() { // Add a star so you can use the yield keyword
        for (const item of source) {
          yield item
        }
      }
    }
  }
}
```

That's it. Now this operator can be used in exchange of the original `where` query.

```ts
import { query, from } from 'linq-functional'

const numbers = [1, 2, 3, 4, 5]

const evenNumbers = query(from(numbers), isEven())
for (const item of evenNumbers) {
  console.log(item)
} // Outputs: 2, 4
```

## Wrapping

In simpler cases, like the one mentioned before, you can get away by wrapping an existing operator.

```ts
import { where } from 'linq-functional'

function isEven(): Operator<number, number> {
  return where(item => item % 2 === 0)
}
```

## Composition

Let's say that you write some app that has multiple queries that - at some point - need to check if a number is even. Moreover you also need the half of those numbers. That's two operators that need to be combined.

```ts
import { query, from, select } from 'linq-functional'

function halfOfEvenNumbers(): Operator<number, number> {
  return function (source) {
    return query(from(source), isEven(), select(item => item / 2))
  }
}
```

By doing a sub-query in an operator function you can compose existing operators into new ones.

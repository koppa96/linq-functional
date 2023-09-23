---
layout: doc
prev:
  text: Getting started
  link: /getting-started
next:
  text: Finishers
  link: /finishers
---

# Deferred execution

Let's define a query. Let's say you have a collection of people, with name, age, and an array of dogs they own. You want the names of the dogs, whose owners are over 25, in ascending order. You can easily define a query like this:

```ts
import { query, from, where, orderBy, selectMany } from 'linq-functional'

const people = [
  {name: 'John', age: 23, dogs: ['Lola', 'Luna'] },
  {name: 'Jane', age: 27, dogs: ['Max']}
]

const dogsOfPeopleOver25 = query(
  from(people),
  where(person => person.age > 25),
  selectMany(person => person.dogs),
  orderBy(dog => dog)
)
```

At this point, nothing happens. You have defined a query with deferred execution. A query will be evaluated when you iterate over its results. The query function returns an `Iterable`, that can be used to iterate over the results.

```ts
for (const dog of dogsOfPeopleOver25) {
  console.log(dog)
} // Outputs: Max
```

The query is re-evaluated each time you iterate over its results, which means, that if you mutate the query source, you can change its results.

```ts
people.push({name: 'Janet', age: 30, dogs: ['Bella', 'Daisy']})

for (const dog of dogsOfPeopleOver25) {
  console.log(dog)
} // Outputs: Bella, Daisy, Max
```

> **_NOTE:_** Reassigning the `people` variable with a new array will not change the query results, since the original array was passed to the `from` function.

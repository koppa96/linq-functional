---
layout: doc
prev:
  text: Types
  link: /api-reference/types
next:
  text: Operators
  link: /api-reference/operators
---

# Starters

[Starter](/api-reference/types.html#starter) is used to create an iterable. A query must start with a starter operator. This page introduces the builtin functions that create starters.

> **_NOTE:_** You can also define custom starters see [Extensibility](/extensibility.html) for more details.

## Empty

Creates a `Starter` that returns an empty `Iterable`. Can be useful if you need an empty `Iterable` with zero memory allocation.

```ts
function empty<T>(): Starter<T>
```

### Example

```ts
const result = query(empty<number>())

for (const item of result) {
  console.log(item)
}
```

### Output

```text
```

## From

Creates a `Starter` that returns the `Iterable` it receives as an argument. This is the most common query starter, and the main way of transforming the builtin collections into query sources.

```ts
function from<T>(source: Iterable<T>): Starter<T>
```

### Arguments

- `source`: `Iterable<T>` - Contains the items to return

### Example

```ts
const result = query(from([1, 2, 3]))

for (const item of result) {
  console.log(item)
}
```

### Output

```text
1
2
3
```

## Range

Creates a `Starter` that generates an `Iterable` that contains a range of sequential numbers. It uses a generator to achieve this, so the actual numbers are not materialized in a collection.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function range(start: number, count: number): Starter<number>
```

### Arguments

- `start`: `number` - The starting value of the generated `Iterable`
- `count`: `number` - The length of the generated `Iterable`

### Example

```ts
const result = query(range(10, 3))

for (const item of result) {
  console.log(item)
}
```

### Output

```text
10
11
12
```

## Repeat

Creates a `Starter` that generates an `Iterable` that contains a provided item multiple times. It uses a generator to achieve this, so the actual items are not materialized in a collection.

> **_NOTE:_** This operator uses deferred execution. The actual operation will be evaluated each time when the query result is iterated over.

```ts
function repeat<T>(item: T, times: number): Starter<T>
```

### Arguments

- `item`: `T` - The item to repeat
- `times`: `number` - The amount of times to repeat the item

### Example

```ts
const result = query(repeat('hello', 3))

for (const item of result) {
  console.log(item)
}
```

### Output

```text
hello
hello
hello
```

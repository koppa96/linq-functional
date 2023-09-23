---
layout: doc
prev: false
next:
  text: Deferred execution
  link: /deferred-execution
---

# Getting started

## Installation

You can install the library using `npm` which is a package manager bundled with [Node.js](https://nodejs.org).

```sh
npm install linq-functional
```

## Usage

To use the library import the `query` function and any of the pre-defined operators to define a query.

```ts
import { query, from, where } from 'linq-functional'

const numbers = [1, 2, 3, 4, 5]

const evenNumbers = query(from(numbers), where(item => item % 2 === 0))
for (const item of evenNumbers) {
  console.log(item)
} // Outputs: 2, 4
```

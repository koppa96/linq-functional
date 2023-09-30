# Linq-functional

This library provides utility functions for defining queries against builtin JavaScript collections. For more information [visit the docs page](https://koppa96.github.io/linq-functional).

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

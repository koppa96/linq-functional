---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Linq Functional"
  text: "A functional adaptation of C#'s Linq API."
  tagline: (And some new operators)
  actions:
    - theme: brand
      text: Getting started
      link: /getting-started
    - theme: alt
      text: API reference
      link: /api-reference/types

features:
  - title: Typesafe
    details: The API was developed in TypeScript, thus has full type definitions available.
  - title: Deferred execution
    details: Queries will be evaluated when their result is iterated over.
  - title: Extensible
    details: Can be extended easily by adding new operators.
---


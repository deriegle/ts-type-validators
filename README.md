# TS Type Validators

There are a ridiculous amount of Typescript type validation libraries. Each has its advantages and disadvantages and usually was formed out of previous pains with another library.

This repository is meant to hold an exhaustive comparison of Typescript type validation libraries to help you choose the one that's right for you.

## Goals

The primary goal is to write a common list of problems that are solved with these libraries and then provide their solution using all of the validation libraries. This makes it easy to compare each library against another.

**NOTE: We'll also include a "typescript" example which uses just raw TS to write the same validation.**

## Add an Example

1. Add it to the `shared/src/index.ts` in the `Examples` type. Give it a name that explains it well enough and you can also add a description with a comment.
1. This will start to break types in all the examples, you'll need to go fulfill those contracts. If you aren't sure how to solve it in a particular library that's okay, you can put up a Pull Request and we'll be happy to help.
1. Add tests for your new example. You can do this as part of step #2 to help you debug as well. Before merging, the tests should pass against all libraries.

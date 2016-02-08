rx-react experiment
===================

[![Build Status](https://travis-ci.org/iamdanfox/rx-react.svg?branch=master)](https://travis-ci.org/iamdanfox/rx-react)

Having become slightly disillusioned with Redux, I'm experimenting with Reactive Extensions' RxJS as the M in an MV* frontend.

Goals:
------

* Portable UI components

  I'm hoping to build React components that are completely dumb, i.e., they receive data and callbacks as props and know nothing about RxJS.
  I've found that my favourite model library changes quite frequently and 'dumb' React components seem to be the most portable.

* TDD first

  I love how well test-driven development (TDD) works for Java and have been unsatisfied with frontend solutions so far.
  I want my fronted TDD to be effortless and delightful, perhaps even integrated with the UI.
  RxJS's [marble diagram specs][1] are awesome.

* Infinitely composable (or fractal architecture)

  My favourite thing about the Elm architecture is how you can infinitely nest components (including their logic) without having to add increasing amounts of boilerplate.

* Not a new library

  I do not want to make the frontend ecosystem more fragmented by writing a new library.  Instead, I'd like to figure out a guide to structuring a frontend.

* Fast

  No silly perf-compromises allowed.  React is fast and RxJS is fast, there's no need to screw anything up.

* Lightweight

  I'd like to experiment with tree-shaking / enhanced require!



[1]:https://github.com/ReactiveX/RxJS/blob/c01b92f1df5faaa0f8e7e772acad9d6130b05dc0/doc/writing-marble-tests.md#anatomy-of-a-test

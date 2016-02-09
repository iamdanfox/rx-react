"use strict";
/// <reference path="../typings/tsd.d.ts" />

import {Observable, Subject} from "rxjs";

export class SomethingModel {
  public state$: Observable<IModelState>;

  public constructor(private ups$: Observable<{}>, private downs$: Observable<{}>) {
    const positives$: Observable<number> = ups$.mapTo(1)
    const negatives$: Observable<number> = downs$.mapTo(-1)

    this.state$ = positives$.merge(negatives$)
      .scan((acc,y) => {
        return acc + y;
      }, 0)
      .map((count) => {
        return {count};
      })
      .startWith({count: 0})
      // .do((a) => console.log("a", a));
  }
}

export interface IModelState {
  count: number;
}

// import * as Rx from "rxjs";
// import { TestScheduler } from "rxjs/testing/TestScheduler";
// import { expect } from "chai";
//
// function assertDeepEqual(actual, expected) {
//   expect(actual).to.deep.equal(expected);
// }
//
// let values = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   x: 1 + 3, // a + c
//   y: 2 + 4, // b + d
// }
//
// const scheduler = new TestScheduler(assertDeepEqual);
//
// var e1 = scheduler.createHotObservable('---a---b---|', values);
// var e2 = scheduler.createHotObservable('-----c---d---|', values);
// var expected =                         '-----x---y---|';
// console.log(e1);
//
// scheduler.expectObservable(e1.zip(e2, function(x, y) { return x + y; })).toBe(expected, values);

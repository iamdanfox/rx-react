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
      .do((a) => console.log("a", a));
  }
}

export interface IModelState {
  count: number;
}

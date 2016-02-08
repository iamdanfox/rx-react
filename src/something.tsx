"use strict";
/// <reference path="../typings/tsd.d.ts" />

import {Observable, Subject} from "rxjs";

export class SomethingModel {
  public state$: Observable<IModelState>;

  public constructor(private increments$: Observable<{}>) {
    const ones$: Observable<number> = increments$
      .mapTo(1);

    const positives$: Observable<IModelState> = ones$
      .scan((acc,y) => {
        return {
          count: acc.count + y
        };
      }, {count: 0});

    this.state$ = positives$.startWith({count: 0})
      .do((a) => console.log("a", a));
  }

  public static create(): SomethingModel {
    return new this(new Subject());
  }

  public static createInterval(): SomethingModel {
    const interval$ = Observable.interval(200)
      .map((count) => {
        return {count}
      });
    return new this(interval$);
  }
}

export interface IModelState {
  count: number;
}

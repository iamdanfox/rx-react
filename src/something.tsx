"use strict";
/// <reference path="../typings/tsd.d.ts" />

import {Observable, BehaviorSubject} from "rxjs";

export class SomethingModel {
  public state$: Observable<IModelState>;

  public constructor() {
    const initial$ = Observable.of({count: 777});
    const interval$ = Observable.interval(200)
      .map((count) => {
        return {count}
      });

    this.state$ = initial$.merge(interval$)
      .do((a) => console.log("a", a));
  }

  public static create(): SomethingModel {
    return new this();
  }
}

export interface IModelState {
  count: number;
}

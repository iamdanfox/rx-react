"use strict";
/// <reference path="../typings/tsd.d.ts" />

import {Observable, BehaviorSubject} from "rxjs";

export function model() {

  const initial$ = Observable.of({count: 777});
  const interval$ = Observable.interval(200)
  .map((count) => {
    return {count}
  });

  const state$ = initial$.merge(interval$);

  return { state$ };
}

export interface IModelState {
  count: number;
}

export interface IModel {
  state$: Observable<IModelState>
}

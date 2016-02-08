"use strict";
/// <reference path="../typings/tsd.d.ts" />

import { SomethingModel, IModelState } from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';
import { Subscription, Subject } from "rxjs";

class RxApp extends React.Component<{}, IModelState> {

  public constructor() {
    super();
    this.increment$ = new Subject();
    this.model = new SomethingModel(this.increment$);
    this.state = {} as IModelState;
  }

  private increment$: Subject<{}>;

  private increment() {
    this.increment$.next({});
  }

  public componentDidMount() {
    this.subscription = this.model.state$
      .subscribe((state) => this.setState(state));
  }

  public componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;

  private model: SomethingModel;

  public render() {
    return (
      <div onClick={() => this.increment()}>
        Click me! {this.state.count}
      </div>
    );
  }
}

render(<RxApp />, document.getElementById("root"));

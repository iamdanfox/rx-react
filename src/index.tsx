"use strict";
/// <reference path="../typings/tsd.d.ts" />

import { SomethingModel, IModelState } from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';
import { Subscription, Subject } from "rxjs";

class RxApp extends React.Component<{}, IModelState> {

  private increment$ = new Subject();

  private decrement$ = new Subject();

  public constructor() {
    super();
    this.model = new SomethingModel(this.increment$, this.decrement$);
    this.state = {} as IModelState;
  }

  public componentWillMount() {
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
      <div>
        Click me! {this.state.count}
        <button onClick={this.increment$.next.bind(this.increment$)}>Up</button>
        <button onClick={this.decrement$.next.bind(this.decrement$)}>Down</button>
      </div>
    );
  }
}

render(<RxApp />, document.getElementById("root"));

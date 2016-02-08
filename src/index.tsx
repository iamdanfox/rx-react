"use strict";
/// <reference path="../typings/tsd.d.ts" />

import { SomethingModel, IModelState } from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';
import { Subscription } from "rxjs";

class RxApp extends React.Component<{}, IModelState> {

  public constructor() {
    super();
    this.model = SomethingModel.create();
    this.state = {} as IModelState;
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
    return <div>Hello! {this.state.count}</div>;
  }
}

render(<RxApp />, document.getElementById("root"));

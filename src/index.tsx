"use strict";
/// <reference path="../typings/tsd.d.ts" />

import { model, IModel, IModelState } from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';
import { Subscription } from "rxjs";

class App extends React.Component<{}, IModelState> {

  public constructor() {
    super();
    this.model = model();
    this.state = {} as IModelState;
  }

  public componentDidMount() {
    this.subscription = this.model.state$
      // .do((a) => console.log("a", a))
      .subscribe((state) => this.setState(state));
  }

  public componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;

  private model: IModel;

  public render() {
    return <div>Hello! {this.state.count}</div>;
  }
}

render(<App />, document.getElementById("root"));

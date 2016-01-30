/// <reference path="../typings/tsd.d.ts" />

import x from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';

console.log(x);

interface IAppProps {
  message: string;
}

class App extends React.Component<IAppProps, {}> {

  public constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    return <div>{this.props.message}</div>;
  }
}

render(<App message="This is a prop" />, document.getElementById("root"));

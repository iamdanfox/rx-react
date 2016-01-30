/// <reference path="../typings/tsd.d.ts" />

import x from './something.tsx';
import * as React from 'react';
import { render } from 'react-dom';

console.log(x);

render(<div>Hello, world!</div>, document.getElementById("root"));

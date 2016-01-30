/// <reference path="typings/tsd.d.ts" />

import x from './src/something.tsx';
import * as React from 'react';
import { render } from 'react-dom';

console.log(x);

const element = React.createElement("div", null, "HELLO");
// const element2 = <div>HELLOOO</div>;

render(element, document.getElementById("root"));

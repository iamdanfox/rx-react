/// <reference path="../typings/mocha/mocha.d.ts" />

import { Promise } from "es6-promise";
import { expect } from "chai";
import { Subject } from "rxjs";
import { SomethingModel } from "./something.tsx";

describe("SomethingModel", () => {
  it("should increase from 0 to 1 when an up event happens", (done) => {

    let ups$ = new Subject();
    const model = new SomethingModel(ups$, new Subject());
    const expected = [{count: 0}, {count: 1}];

    var result = model.state$.take(2).forEach(function (x) {
      expect(x).to.deep.equal(expected.shift());
    }, null, Promise)
    .then(done);

    ups$.next({});

    expect(typeof result.then).to.equal('function');
  });
});

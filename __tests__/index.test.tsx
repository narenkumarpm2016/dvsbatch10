import { shallow } from "enzyme";
import * as React from "react";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows content in a <h1> tag', () => {
    const app = shallow(<App />);
    expect(app.find("h1")).toHaveLength(1);
  });
});

import React from "react";
import { render } from "react-dom";
import { compose } from "recompose";
import { Provider } from "unistore/react";

import CatStore from "./stores/CatStore";
import Cat from "./components/Cat";
import Box from "./components/Box";
import Fish from "./components/Fish";
import withWalkingControl from "./controls/withWalkingControl";
import withJumpingControl from "./controls/withJumpingControl";
import withLickingControl from "./controls/withLickingControl";

const withControls = compose(
  withWalkingControl,
  withJumpingControl,
  withLickingControl
);

const ControllableCat = withControls(Cat);

const App = () => (
  <div>
    <ControllableCat />
    <div
      style={{
        marginTop: "-34px"
      }}
    >
      <Fish />
      <div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  </div>
);

render(
  <Provider store={CatStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

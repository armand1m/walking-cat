import React from "react";
import { render } from "react-dom";
import { Provider, connect } from "unistore/react";
import { compose } from "recompose";

import CatStore from "./stores/CatStore";
import CatActions from "./actions/CatActions";
import withControls from "./controls/withControls";

import Cat from "./components/Cat";
import Box from "./components/Box";
import Fish from "./components/Fish";
import Floor from "./components/Floor";
import Scenario from "./components/Scenario";

const withStateControl = compose(
  connect("state", CatActions), // inject state and actions
  withControls // inject controls
);

const StatefulCat = withStateControl(Cat);

const App = () => (
  <Scenario>
    <Provider store={CatStore}>
      <StatefulCat />
    </Provider>
    <Floor>
      <Fish />
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
      <Box />
    </Floor>
  </Scenario>
);

render(<App />, document.getElementById("root"));

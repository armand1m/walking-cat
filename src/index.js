import React from "react";
import { render } from "react-dom";
import { Provider } from "unistore/react";

import CatStore from "./stores/CatStore";
import Cat from "./components/Cat";
import Scenario from "./components/Scenario";
import Box from "./components/Box";
import Floor from "./components/Floor";
import Fish from "./components/Fish";
import withControls from "./controls/withControls";

const ControllableCat = withControls(Cat);

const App = () => (
  <Scenario>
    <ControllableCat />
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

render(
  <Provider store={CatStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

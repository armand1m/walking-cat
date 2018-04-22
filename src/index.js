import React from "react";
import { render } from "react-dom";
import Cat from "./components/Cat";
import withWalkingSkill from "./components/Skills/withWalkingSkill";
import withWalkingControl from "./components/Controls/withWalkingControl";

const WalkingCat = withWalkingSkill(Cat);
const ControllableCat = withWalkingControl(WalkingCat);

const App = () => <ControllableCat />;

render(<App />, document.getElementById("root"));

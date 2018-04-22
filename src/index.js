import React from "react";
import { render } from "react-dom";

import Cat from "./components/Cat";
import withWalkingSkill from "./components/Skills/withWalkingSkill";
import withWalkingControl from "./components/Controls/withWalkingControl";
import * as WalkingStates from "./components/States/walking";

const WalkingCat = withWalkingSkill(Cat, WalkingStates);
const ControllableCat = withWalkingControl(WalkingCat);

render(<ControllableCat />, document.getElementById("root"));

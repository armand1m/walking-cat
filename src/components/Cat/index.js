import React from "react";
import cn from "classnames";
import * as WalkingStates from "../States/walking";
import "./index.css";

const Cat = ({ state }) => (
  <div
    className={cn({
      "cat__state--normal": state === WalkingStates.NORMAL,
      "cat__state--walking-1": state === WalkingStates.WALKING_1,
      "cat__state--walking-2": state === WalkingStates.WALKING_2
    })}
  />
);

Cat.displayName = "Cat";

export default Cat;

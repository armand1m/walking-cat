import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import * as CatStates from "../../states/CatStates";

import "./index.css";
import "./normal.css";
import "./walking.css";
import "./licking.css";
import "./jumping.css";

const Cat = ({ state }) => (
  <div
    className={cn({
      Cat: true,
      "Cat--normal": state === CatStates.NORMAL,
      "Cat--walking": state === CatStates.WALKING,
      "Cat--licking": state === CatStates.LICKING,
      "Cat--jumping": state === CatStates.JUMPING
    })}
  />
);

Cat.displayName = "Cat";

Cat.propTypes = {
  state: PropTypes.string.isRequired
};

export default Cat;

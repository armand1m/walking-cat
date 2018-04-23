import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import * as CatStates from "../../states/CatStates";
import { connect } from "unistore/react";

import "./index.css";
import "./walking.css";
import "./jumping.css";
import "./licking.css";

const Cat = ({ state }) => (
  <div
    className={cn({
      Cat: true,
      [`Cat__state--${CatStates.NORMAL}`]: state === CatStates.NORMAL,
      [`Cat__state--${CatStates.WALKING}`]: state === CatStates.WALKING,
      [`Cat__state--${CatStates.LICKING}`]: state === CatStates.LICKING,
      [`Cat__state--${CatStates.JUMPING}`]: state === CatStates.JUMPING
    })}
  />
);

Cat.displayName = "Cat";

Cat.propTypes = {
  state: PropTypes.string.isRequired
};

const EnhancedCat = connect("state")(Cat);

export default EnhancedCat;

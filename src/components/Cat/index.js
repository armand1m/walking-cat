import React from "react";
import PropTypes from "prop-types";
import getWalkingClassFor from "../Classes/getWalkingClassFor";
import walkingStatesPropType from "../PropTypes/walkingStates";

import "./index.css";

const Cat = ({ state, states }) => (
  <div className={getWalkingClassFor("cat", state, states)} />
);

Cat.displayName = "Cat";

Cat.propTypes = {
  state: PropTypes.string.isRequired,
  states: walkingStatesPropType.isRequired
};

export default Cat;

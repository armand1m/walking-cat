import React, { Fragment } from "react";
import { connect } from "unistore/react";

import Button from "../components/Button";
import actions from "../actions/CatActions";
import * as CatStates from "../states/CatStates";

const withWalkingControl = WrappedComponent => {
  const WalkingControl = ({ state, walk, stop, ...props }) => {
    const isNormal = state === CatStates.NORMAL;
    const onClick = isNormal ? walk : stop;

    const description = isNormal ? "Walk" : "Stop";

    return (
      <Fragment>
        <WrappedComponent {...props} />
        <Button onClick={onClick}>{description}</Button>
      </Fragment>
    );
  };

  WalkingControl.displayName = `withWalkingControl(${
    WrappedComponent.displayName
  })`;

  return connect("state", actions)(WalkingControl);
};

export default withWalkingControl;

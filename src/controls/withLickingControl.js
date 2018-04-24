import React, { Fragment } from "react";
import { connect } from "unistore/react";

import Button from "../components/Button";
import actions from "../actions/CatActions";
import * as CatStates from "../states/CatStates";

const withLickingControl = WrappedComponent => {
  const LickingControl = ({ state, lick, stop, ...props }) => {
    const isLicking = state === CatStates.LICKING;
    const onClick = isLicking ? stop : lick;
    const description = isLicking ? "Stop Licking" : "Start Licking";

    return (
      <Fragment>
        <Button onClick={onClick}>{description}</Button>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };

  LickingControl.displayName = `withLickingControl(${
    WrappedComponent.displayName
  })`;

  return connect("state", actions)(LickingControl);
};

export default withLickingControl;

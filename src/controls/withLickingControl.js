import React, { Fragment } from "react";

import Button from "../components/Button";
import * as CatStates from "../states/CatStates";

const withLickingControl = WrappedComponent => {
  const LickingControl = ({ lick, stop, ...props }) => {
    const isLicking = props.state === CatStates.LICKING;
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

  return LickingControl;
};

export default withLickingControl;

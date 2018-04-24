import React, { Fragment } from "react";

import Button from "../components/Button";
import * as CatStates from "../states/CatStates";

const withWalkingControl = WrappedComponent => {
  const WalkingControl = ({ walk, stop, ...props }) => {
    const isNormal = props.state === CatStates.NORMAL;
    const onClick = isNormal ? walk : stop;
    const description = isNormal ? "Walk" : "Stop";

    return (
      <Fragment>
        <Button onClick={onClick}>{description}</Button>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };

  WalkingControl.displayName = `withWalkingControl(${
    WrappedComponent.displayName
  })`;

  return WalkingControl;
};

export default withWalkingControl;

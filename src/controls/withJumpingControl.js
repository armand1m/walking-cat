import React, { Fragment } from "react";
import Button from "../components/Button";

const withJumpingControl = WrappedComponent => {
  const JumpingControl = ({ jump, ...props }) => (
    <Fragment>
      <Button onClick={jump}>Jump</Button>
      <WrappedComponent {...props} />
    </Fragment>
  );

  JumpingControl.displayName = `withJumpingControl(${
    WrappedComponent.displayName
  })`;

  return JumpingControl;
};

export default withJumpingControl;

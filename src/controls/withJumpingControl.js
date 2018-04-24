import React, { Fragment } from "react";
import { connect } from "unistore/react";

import Button from "../components/Button";
import actions from "../actions/CatActions";

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

  return connect("state", actions)(JumpingControl);
};

export default withJumpingControl;

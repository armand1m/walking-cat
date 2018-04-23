import React, { Fragment } from "react";
import Button from "../components/Button";
import actions from "../actions/CatActions";
import { connect } from "unistore/react";

const withJumpingControl = WrappedComponent => {
  const JumpingControl = ({ jump, ...props }) => (
    <Fragment>
      <WrappedComponent {...props} />
      <Button onClick={jump}>Jump</Button>
    </Fragment>
  );

  JumpingControl.displayName = `withJumpingControl(${
    WrappedComponent.displayName
  })`;

  return connect("state", actions)(JumpingControl);
};

export default withJumpingControl;

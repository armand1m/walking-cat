import { compose } from "recompose";

import withWalkingControl from "./withWalkingControl";
import withJumpingControl from "./withJumpingControl";
import withLickingControl from "./withLickingControl";

const withControls = compose(
  withWalkingControl,
  withJumpingControl,
  withLickingControl
);

export default withControls;

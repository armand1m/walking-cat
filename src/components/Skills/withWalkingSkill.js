import React from "react";
import PropTypes from "prop-types";
import * as WalkingStates from "../States/walking";

const getNextState = currentState => {
  switch (currentState) {
    case WalkingStates.NORMAL:
      return WalkingStates.WALKING_1;
    case WalkingStates.WALKING_1:
      return WalkingStates.WALKING_2;
    case WalkingStates.WALKING_2:
      return WalkingStates.WALKING_1;
    default:
      return WalkingStates.NORMAL;
  }
};

const withWalkingSkill = WrappedComponent =>
  class extends React.PureComponent {
    static get displayName() {
      return `withWalkingSkill(${WrappedComponent.displayName})`;
    }

    static get propTypes() {
      return {
        isWalking: PropTypes.bool,
        speed: PropTypes.number
      };
    }

    static get defaultProps() {
      return {
        isWalking: false,
        speed: 200
      };
    }

    constructor(props) {
      super(props);

      this.state = {
        currentState: WalkingStates.NORMAL
      };
    }

    tick() {
      const { isWalking } = this.props;

      switch (isWalking) {
        case true:
          return this.setState(({ currentState }) => ({
            currentState: getNextState(currentState)
          }));

        default:
          return this.setState({
            currentState: WalkingStates.NORMAL
          });
      }
    }

    componentDidMount() {
      const { speed } = this.props;

      this.interval = setInterval(() => this.tick(), speed);
    }

    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    render() {
      const { currentState } = this.state;

      return <WrappedComponent state={currentState} />;
    }
  };

export default withWalkingSkill;

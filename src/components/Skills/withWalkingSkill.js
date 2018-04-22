import React from "react";
import PropTypes from "prop-types";

const getNextState = (currentState, WalkingStates) => {
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

const withWalkingSkill = (WrappedComponent, WalkingStates) =>
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
      switch (this.props.isWalking) {
        case true:
          return this.setState(({ currentState }) => ({
            currentState: getNextState(currentState, WalkingStates)
          }));

        default:
          return this.setState({
            currentState: getNextState(null, WalkingStates)
          });
      }
    }

    componentDidMount() {
      const { speed } = this.props;

      this.interval = setInterval(() => this.tick(), speed);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <WrappedComponent
          state={this.state.currentState}
          states={WalkingStates}
        />
      );
    }
  };

export default withWalkingSkill;

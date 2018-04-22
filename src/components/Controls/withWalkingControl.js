import React, { Fragment } from "react";
import Button from "../Button";

const withWalkingControl = WrappedComponent =>
  class extends React.Component {
    static get displayName() {
      return `withWalkingControl(${WrappedComponent.displayName})`;
    }

    constructor(props) {
      super(props);

      this.state = {
        isWalking: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState(prevState => ({
        isWalking: !prevState.isWalking
      }));
    }

    render() {
      const { isWalking } = this.state;

      return (
        <Fragment>
          <WrappedComponent isWalking={isWalking} />
          <div className="btn-group">
            <Button onClick={this.toggle}>Toggle</Button>
          </div>
        </Fragment>
      );
    }
  };

export default withWalkingControl;

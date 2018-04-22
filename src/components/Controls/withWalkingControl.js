import React, { Fragment } from "react";

const Button = props => <button {...props} className="btn btn-primary" />;

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

      this.walk = this.walk.bind(this);
      this.stop = this.stop.bind(this);
    }

    walk() {
      this.setState({ isWalking: true });
    }

    stop() {
      this.setState({ isWalking: false });
    }

    render() {
      const { isWalking } = this.state;

      return (
        <Fragment>
          <WrappedComponent isWalking={isWalking} />
          <div class="btn-group" role="group">
            <Button onClick={this.walk}>Walk</Button>
            <Button onClick={this.stop}>Stop</Button>
          </div>
        </Fragment>
      );
    }
  };

export default withWalkingControl;

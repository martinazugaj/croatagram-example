import React from "react";
import PropTypes from "prop-types";

class DummyClassComponent extends React.Component {
  render() {
    return <>Bok, {this.props.ime}</>;
  }
}

DummyClassComponent.propTypes = {
  ime: PropTypes.string,
};

DummyClassComponent.defaultProps = {
  ime: "---",
};

export default DummyClassComponent;

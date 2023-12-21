import PropTypes from "prop-types";

function DummyFunctionComponent({ name }) {
  return (
    <>
      <span>My name is {name}</span>
    </>
  );
}

DummyFunctionComponent.propTypes = {
  name: PropTypes.string,
};

DummyFunctionComponent.defaultProps = {
  name: "Bezimeni",
};

export default DummyFunctionComponent;

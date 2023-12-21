import React from "react";

class CommentItem extends React.Component {
  render() {
    return <p>{this.props.comment}</p>;
  }
}

export default CommentItem;

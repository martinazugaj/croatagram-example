//napraviti novu klasnu komponentu, imat ce svoj state
//input u koji upisujemo tekst, klikom na button generira se lista komentara
import React from "react";
import CommentItem from "../CommentItem/CommentItem";

class Comments extends React.Component {
  state = { comment: [], newItem: "" };

  setNewItem = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addNewItem = () => {
    if (this.state.newItem === "") return;
    let { comment } = this.state;
    comment.push(this.state.newItem);
    this.setState({
      comment: comment,
      newItem: "",
    });
  };

  render() {
    const { comment } = this.state;

    return (
      <>
        <div>
          <input
            value={this.state.newItem}
            onChange={(e) => this.setNewItem(e)}
          ></input>
          <button onClick={this.addNewItem}>Add comment</button>
        </div>
        {comment.length === 0 ? (
          <p>No comments.</p>
        ) : (
          comment.map((c) => <CommentItem comment={c} />)
        )}
      </>
    );
  }
}

export default Comments;

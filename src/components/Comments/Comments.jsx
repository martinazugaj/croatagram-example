import React from "react";
import "./Comments.scss";
import { Link } from "react-router-dom";

class Comments extends React.Component {
  state = {
    comments: [],
    comment: "",
  };

  addComment = () => {
    if (this.state.comments.length === 0) {
      const comment = {
        text: this.state.comment,
        avatar: this.avatars[this.randomIndex(0, this.avatars.length)],
        username: this.usernames[this.randomIndex(0, this.usernames.length)],
      };
      this.setState({
        comments: [comment],
      });
    } else {
      const { comments } = this.state;
      const comment = {
        text: this.state.comment,
        avatar: this.avatars[this.randomIndex(0, this.avatars.length)],
        username: this.usernames[this.randomIndex(0, this.usernames.length)],
      };
      this.setState({
        comments: [...comments, comment],
      });
    }
    this.setState({ comment: "" });
  };

  randomIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  avatars = [
    "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg",
    "https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg",
  ];

  usernames = [
    "londoner324",
    "berliner436563",
    "nonameuser1",
    "randomuser345",
    "nameuser2",
  ];

  render() {
    const { comments } = this.state;

    return (
      <>
        <div className="c-comments">
          <div>
            <input
              placeholder="Enter your comment"
              type="text"
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
            <button disabled={!this.state.comment} onClick={this.addComment}>
              Comment
            </button>
            <Link to={"/comments"}>Show all</Link>
          </div>
          <div>
            {!comments.length ? (
              <p>No comments</p>
            ) : (
              comments.map((comment, index) => {
                return (
                  <div key={index} className="c-comments__item">
                    <img height={36} width={36} src={comment.avatar}></img>
                    <span className="c-comments__item__text">
                      {comment.username}
                    </span>
                    <span>{comment.text}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Comments;

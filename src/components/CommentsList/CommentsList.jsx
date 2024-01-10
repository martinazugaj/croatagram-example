import { useState, useEffect } from "react";
import "./CommentsList.scss";
import { useNavigate } from "react-router-dom";

export default function CommentsList() {
  const [comments, setComments] = useState();

  const navigate = useNavigate();

  const openSingleComment = (commentId) => {
    navigate(`/comments/${commentId}`);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=25`)
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <>
      <div className="c-comments-list">
        {comments && (
          <ul>
            {comments.map((comment) => (
              <li
                onClick={() => openSingleComment(comment.id)}
                key={comment.id}
                className="c-comments-list__item"
              >
                {comment.body}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

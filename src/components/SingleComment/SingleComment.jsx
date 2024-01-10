import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleComment() {
  const [comment, setComment] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  const openPost = () => {
    navigate(`/comments/${id}/${comment.postId}`);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((comment) => setComment(comment));
  }, []);

  if (!comment) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <div>
        <p>Email: {comment.email}</p>
        <p>Body: {comment.body}</p>
        <p>Name: {comment.name}</p>
        <button onClick={openPost}>Show post</button>
      </div>
    </>
  );
}

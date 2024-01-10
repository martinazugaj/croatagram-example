import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = useState();

  const { id, postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, []);

  return (
    <>
      <div>
        <p>Id komentara: {id}</p>
        <p>Id posta: {postId}</p>
        {post && <p>Post: {post.id}</p>}
        {post && <Link to={`/profile/${post.userId}`}>Show user profile</Link>}
      </div>
    </>
  );
}

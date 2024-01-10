import PostHeader from "../PostHeader/PostHeader";
import PostMain from "../PostMain/PostMain";
import PostFooter from "../PostFooter/PostFooter";
import "./Post.scss";
import Comments from "../Comments/Comments";

function Post({ post }) {
  return (
    <div className="c-post">
      <PostHeader
        nickname={post.user_nickname}
        location={post.user_location}
        avatar_url={post.user_image}
      />
      <PostMain image_src={post.src} image_caption={post.caption} />
      <PostFooter no_of_likes={post.likes} />
      <Comments />
    </div>
  );
}

export default Post;

import "./PostMain.scss";
import PropTypes from "prop-types";

function PostMain({ image_src, image_caption }) {
  return (
    <div className="c-post-main">
      <img className="c-post-main__img" src={image_src}></img>
      <p className="c-post-main__caption">{image_caption}</p>
    </div>
  );
}

PostMain.propTypes = {
  image_src: PropTypes.string,
  image_caption: PropTypes.string,
};

PostMain.defaultProps = {
  image_src:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
  image_caption: "No caption.",
};

export default PostMain;

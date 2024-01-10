import { useNavigate } from "react-router-dom";
import "./PostHeader.scss";
import PropTypes from "prop-types";

function PostHeader({ nickname, location, avatar_url, user_id }) {
  const navigate = useNavigate();

  const openProfile = () => {
    navigate(`/profile/${user_id}`);
  };

  return (
    <div className="c-post-header">
      <img src={avatar_url} width={64}></img>
      <div className="c-post-header__text">
        <p className="c-post-header__text--main" onClick={openProfile}>
          {nickname}
        </p>
        <p className="c-post-header__text--secondary">{location}</p>
      </div>
    </div>
  );
}

PostHeader.propTypes = {
  nickname: PropTypes.string,
  location: PropTypes.string,
  avatar_url: PropTypes.string,
  user_id: PropTypes.number,
};

PostHeader.defaultProps = {
  nickname: "NICKNAME",
  location: "No location",
  avatar_url:
    "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
};

export default PostHeader;

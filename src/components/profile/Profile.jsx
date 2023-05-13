import PropTypes from "prop-types";
import css from "./Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
  <div className={css.profile}>
    <div>
      <img
        src={avatar}
        alt={`${username} avatar`}
      />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span> {followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span> {views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span> {likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;

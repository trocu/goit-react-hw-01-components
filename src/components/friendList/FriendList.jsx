import PropTypes from "prop-types";
import FriendListItem from "../friendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return <ul className={css.friendList}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

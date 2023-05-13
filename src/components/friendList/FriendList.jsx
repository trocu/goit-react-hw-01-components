import PropTypes from "prop-types";
import FriendListItem from "../friendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return <ul className={css.friendList}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = { friends: PropTypes.array };

export default FriendList;

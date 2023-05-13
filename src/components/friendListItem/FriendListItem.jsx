// import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const checkStatus = clsx("status", isOnline ? "isOnline" : "isOffline");
  console.log(checkStatus);
  return (
    <li key={id}>
      <span className="{checkStatus}"></span>
      <img
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p>{name}</p>
    </li>
  );
};

// FriendListItem.propTypes = {};

export default FriendListItem;

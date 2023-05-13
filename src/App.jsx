import "./App.css";
import Profile from "./components/profile/Profile";
import user from "/src/data/user.json";
import Statistics from "./components/statistics/Statistics";
import data from "/src/data/data.json";
import FriendList from "./components/friendList/FriendList";
import FriendListItem from "./components/friendListItem/FriendListItem";
import friends from "/src/data/friends.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics stats={data} />
      <FriendList friends={friends}>
        <FriendListItem name={friends.name} />
      </FriendList>
    </>
  );
}

export default App;

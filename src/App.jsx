import "./App.css";
import Profile from "./components/profile/Profile";
import user from "/src/data/user.json";
import Statistics from "./components/statistics/Statistics";
import data from "/src/data/data.json";
import FriendList from "./components/friendList/FriendList";
import friends from "/src/data/friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "/src/data/transactions.json";

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

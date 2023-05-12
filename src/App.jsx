import "./App.css";
import Profile from "./components/profile/Profile";
import user from "/src/data/user.json";
import Statistics from "./components/statistics/Statistics";
import data from "/src/data/data.json";

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
    </>
  );
}

export default App;

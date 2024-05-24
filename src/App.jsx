import "./App.css";
import FriendList from "./Components/FriendList/FriendList";
import Profile from "./Components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;

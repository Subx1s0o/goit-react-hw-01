import FriendList from "./componentss/FriendList/FriendList";
import Profile from "./componentss/Profile/Profile";
import TransactionHistory from "./componentss/TransactionHistory/TransactionHistory";
import "./css/App.css";
import friends from "./friends.json";
import transactions from "./transactions.json";
import userData from "./userData.json";
//comment
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
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

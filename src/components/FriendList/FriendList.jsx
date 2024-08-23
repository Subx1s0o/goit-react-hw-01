import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./friendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsUl}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

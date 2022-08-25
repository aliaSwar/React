import React, { Component } from "react";
import UserItem from "./UserItem";
class UserCard extends Component {
  render() {
    return (
      <div>
        <ui className="list-group">
          <UserItem media="facebook" img="https://picsum.photos/200/300?random=1"/>
          <UserItem media="youtub"  img="https://picsum.photos/200/300?random=2"/>
          <UserItem media="linkedIn"  img="https://picsum.photos/200/300?random=3"/>
        </ui>
      </div>
    );
  }
}
export default UserCard;

import React from "react";
import User from "./User";
import "./User.css"
const UserList = (props) => {
  return (
    <div>
      {props.item.map((user) => (
        <div className="Profile">
          {<User username={user.name} email={user.email} phone={user.phone} />}
        </div>
      ))}
    </div>
  );
};

export default UserList;

import React from "react";

const User = (props) => {
  return (
    <div>
      <h4>{props.username}</h4>

      <div className="Address">
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
      </div>
    </div>
  );
};

export default User;

import React from "react";

const UserAgent: React.FC = () => {
  return (
    <React.Fragment>
      <h3>UserAgent</h3>
      <p>{navigator.userAgent}</p>
    </React.Fragment>
  );
}

export default UserAgent;
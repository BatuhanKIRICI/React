import React from "react";

const ProfileCard = (props) => {
  //const title = props.title;
  //const handle = props.handle;

  const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
      <hr />
    </div>
  );
};

export default ProfileCard;

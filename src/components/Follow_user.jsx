import React from "react";
import User from "./User";
import followuserData from "../followuserData";

export default function follow_user() {
  return (
    <div className="follow_div">
      <h4>People you may know</h4>
      {followuserData.map((user) => {
        return (
          <User
            Key={user.id}
            name={user.user_name}
            img={user.user_img}
            detail={user.user_detail}
          />
        );
      })}
      <hr />
      <a id="see-all" href="/">
        See All
      </a>
    </div>
  );
}

import Image from "next/image";
import React from "react";

const DropDownChat = (props) => {
  const { avatar, userName, timeAgo } = props;
  return (
    <li className="flex drop-down_item gap-sm bg-hover">
      <Image
        src={avatar}
        alt={userName}
        className="user-image"
        width={50}
        height={50}
        quality={100}
        objectFit="cover"
      />
      <div className="drop-down-content flex">
        <h5 className="drop-down-username">{userName}</h5>
        <p className="drop-down-times">{timeAgo}</p>
      </div>
    </li>
  );
};

export default DropDownChat;

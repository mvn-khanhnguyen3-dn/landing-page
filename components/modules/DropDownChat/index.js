import Image from "next/image";
import React from "react";

const DropDownChat = (props) => {
  const { avatar, userName, timeAgo } = props;
  return (
    <li className="flex drop-down_item gap-md bg-hover">
      <Image
        src={avatar}
        alt=""
        width={44}
        height={44}
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

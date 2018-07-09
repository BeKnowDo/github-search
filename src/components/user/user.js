import React from "react";
import { ImgSc } from "./styles";

const UserImage = props => {
  return <ImgSc src={props.avatar} />;
};

export default UserImage;

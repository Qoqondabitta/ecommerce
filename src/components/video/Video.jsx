import React, { useState } from "react";
import { Main, Videos, Blur, Content } from "./style";
import video from "../../assets/images/video.mp4";
import Title from "../generics/title/Title";
import { forVideoTitle } from "../../constants/video";
import { useSelector } from "react-redux";

const Video = () => {
  const { value } = useSelector((store) => store.language);
  const child=forVideoTitle[0]
  return (
    <Main className="center">
      <Blur></Blur>
      <Videos src={video} loop autoPlay muted />
      <Content>
        <Title type="videoTitle">
          {value == "ENG"
            ? child.title[0]
            : value == "UZB"
            ? child.title[1]
            : child.title[2]}
        </Title>
        <Title type="videoTitle">
          {value == "ENG"
            ? child.subTitle[0]
            : value == "UZB"
            ? child.subTitle[1]
            : child.subTitle[2]}
        </Title>
      </Content>
    </Main>
  );
};

export default Video;

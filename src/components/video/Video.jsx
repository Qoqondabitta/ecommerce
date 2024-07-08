import React, { useState } from "react";
import { Main, Videos, Blur, Content } from "./style";
import video from "../../assets/images/video.mp4";
import Title from "../generics/title";
import Button from "../generics/button/Button";
import { forVideoTitle } from "../../constants/video";
import { useSelector } from "react-redux";

const Video = () => {
  const { value } = useSelector((store) => store.language);
  const child = forVideoTitle[0];
  return (
    <Main className="">
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
        <Title type="videoText" color="white">
          {value == "ENG"
            ? child.text[0]
            : value == "UZB"
            ? child.text[1]
            : child.text[2]}
        </Title>
        <Button type="soon">
          {value == "ENG"
            ? child.buttonText[0]
            : value == "UZB"
            ? child.buttonText[1]
            : child.buttonText[2]}
        </Button>
      </Content>
    </Main>
  );
};

export default Video;

import React, { useRef, useState } from "react";
import {
  Container,
  Hero,
  Image,
  Input,
  Label,
  Orders,
  ProfilePhoto,
} from "./style";
import { IoCameraOutline } from "react-icons/io5";
import main from "../../../assets/images/just/main.jpg";

const Account = () => {
  const fileref = useRef();
  const [file, setFile] = useState(null);
  const getFile = (e) => {
    setFile(e.target.value, "file");
  };
  const changeURL = () => {
    const picture = document.getElementById("img-file");
    const folder = document.getElementById("bg-file");

    picture.src = URL.createObjectURL(folder.files[0]);
  };
  // console.log(fileref.current.value, "filessss");
  return (
    <Container>
      <Hero>
        <ProfilePhoto bg={file} className="center">
          <Image src={main} id="img-file" />
          <Label for="bg-file" className="cursor">
            <IoCameraOutline color="black" size="1.5rem" />
          </Label>
          <Input
            type="file"
            accept="image/jpeg, image/png, image/webp, image/jpg, image/avif"
            onChange={changeURL}
            id="bg-file"
          />
        </ProfilePhoto>
        <Orders></Orders>
      </Hero>
    </Container>
  );
};

export default Account;

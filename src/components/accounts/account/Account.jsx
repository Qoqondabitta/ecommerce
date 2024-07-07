import React, { useRef, useState } from "react";
import {
  Container,
  Hero,
  Image,
  Input,
  Title,
  Mask,
  Orders,
  ProfilePhoto,
} from "./style";
import { IoCameraOutline } from "react-icons/io5";
import main from "../../../assets/images/just/main.jpg";
import { useSelector } from "react-redux";
import { Item, Link, List } from "../../navbars/secondNav/style";
import Footer from "../../footer/Footer";
import BlackNav from "../../navbars/blackNavbar/Nav";
// import { Title } from "../../generics/title/Title";

const Account = () => {
  const { value } = useSelector((store) => store.language);
  const fileref = useRef();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const getFile = (e) => {
    setFile(e.target.value, "file");
  };
  const changeURL = () => {
    const picture = document.getElementById("img-file");
    const folder = document.getElementById("bg-file");
    setShow(!show);
    picture.src = URL.createObjectURL(folder.files[0]);
  };
  const showFile = () => {
    setShow(!show);
  };
  return (
    <Container>
      <BlackNav />
      <Hero>
        <ProfilePhoto className="columnCenter">
          <Image src={main} id="img-file" className="cursor" />
          <Mask for="bg-file" className="cursor" onClick={showFile}>
            {value == "ENG"
              ? "Update Photo"
              : value == "UZB"
              ? "Rasmni Almashtiring"
              : "Обновить фото"}
          </Mask>
          {show && (
            <Input
              type="file"
              accept="image/jpeg, image/png, image/webp, image/jpg, image/avif"
              onChange={changeURL}
              id="bg-file"
            />
          )}
        </ProfilePhoto>
        <Orders>
          <Title>Abdulakhad Turgunaliev</Title>
          <List style={{ width: "100%"}} className="justifyEnd">
            <Item>
              <Link style={{ color: "black" }}>Liked Products</Link>
            </Item>
            <Item>
              <Link style={{ color: "black" }}>Chosen Products</Link>
            </Item>
            <Item>
              <Link style={{ color: "black" }}>Orders</Link>
            </Item>
          </List>
        </Orders>
      </Hero>
      <Footer />
    </Container>
  );
};

export default Account;

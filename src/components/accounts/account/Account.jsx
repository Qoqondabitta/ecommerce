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
  List
} from "./style";
import main from "../../../assets/images/just/main.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Item, Link } from "../../navbars/secondNav/style";
import Footer from "../../footer/Footer";
import BlackNav from "../../navbars/blackNavbar/Nav";
import Like from "./userLike/Like";
// import a from "../"
import { accountProperties } from "../../../constants/account/basket.js";
import { changeProperty } from "../../../redux/properties";
import Cart from "./userCart/Cart";
import "./account.css"
import UserOrder from "./userOrder/UserOrder";

const Account = () => {
  const { value } = useSelector((store) => store.language);
  const {data} = useSelector((store) => store.properties);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const fullname = localStorage.getItem("fullname")
  const defineproperty = (property) => {
    dispatch(changeProperty(property));
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
  console.log(data, "data name");
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
          <Title>
            {value == "ENG"
              ? "Welcome "
              : value == "UZB "
              ? "Xush Kelibsiz "
              : "Добро пожаловать "}
            {fullname}
          </Title>
          <List style={{ width: "100%" }} className="justifyEnd">
            {accountProperties.map((v, i) => (
              <Item
                color="true"
                className="cursor"
                key={i}
                id={v.definers == data && "activeData"}
                onClick={() => defineproperty(v.definers)}
              >
                <Link
                // style={{ color: "black" }}
                >
                  {value == "ENG"
                    ? v.properties[0]
                    : value == "UZB"
                    ? v.properties[1]
                    : v.properties[2]}
                </Link>
              </Item>
            ))}
          </List>
          {data == "like" ? (
            <Like />
          ) : data == "cart" ? (
            <Cart />
          ) : (
            <UserOrder />
          )}
        </Orders>
      </Hero>
    </Container>
  );
};

export default Account;

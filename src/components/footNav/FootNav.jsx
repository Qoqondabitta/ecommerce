import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import "../navbars/secondNav/secondNav.css";
import { GrHomeRounded } from "react-icons/gr";
import { toggleBurger } from "../../redux/burger";
import { useDispatch } from "react-redux";
import { Container, IconBox } from "./style";
import { NavLink } from "react-router-dom";

const FootNav = () => {
  const dispatch = useDispatch();
  return (
    <Container className="center">
      <IconBox className="center">
        <NavLink to="/account" style={{ textDecoration: "none" }}>
          <FaRegHeart color="black" size="1em" />
        </NavLink>
      </IconBox>
      <IconBox className="center">
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <LuUser color="black" size="1.2em" />
        </NavLink>
      </IconBox>
      <IconBox className="center">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <GrHomeRounded color="black" size="1.2em" />
        </NavLink>
      </IconBox>
      <IconBox className="center">
        <HiOutlineMenu
          color="black"
          onClick={() => dispatch(toggleBurger())}
          size="1.2em"
        />
      </IconBox>
      <IconBox className="center">
        <NavLink to="/account" style={{ textDecoration: "none" }}>
          <IoCartOutline color="black" size="1.2em" />
        </NavLink>
      </IconBox>
    </Container>
  );
};

export default FootNav;

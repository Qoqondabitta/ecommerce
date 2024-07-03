import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import "../navbars/secondNav/secondNav.css";
import { GrHomeRounded } from "react-icons/gr";
import { toggleBurger } from "../../redux/burger";
import { useDispatch } from "react-redux";
import { Container } from "./style";

const FootNav = () => {
    const dispatch = useDispatch()
  return (
    <Container>
      <FaRegHeart color="black" style={{ width: "20%" }} size="1.1em" />
      <LuUser color="black" size="1.2em" style={{ width: "20%" }} />
      <GrHomeRounded color="black" size="1.2em" style={{ width: "20%" }} />
      <HiOutlineMenu color="black" onClick={()=>dispatch(toggleBurger())} size="1.2em" style={{ width: "20%" }} />
      <IoCartOutline color="black" size="1.2em" style={{ width: "20%" }} />
    </Container>
  );
};

export default FootNav;

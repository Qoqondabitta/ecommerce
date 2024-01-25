import React from "react";
import { Container, Input, Language, Parts, SearchContainer, Wrapper, Logo } from "./style";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.png"
import "./design.css"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Parts>
          <Language>En</Language>
          <SearchContainer>
            <Input type="text" placeholder="Search" />
            <CiSearch />
          </SearchContainer>
        </Parts>
        <Parts>
          <Logo src={logo} />
        </Parts>
        <Parts>
          <button className="btn">check</button>
        </Parts>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

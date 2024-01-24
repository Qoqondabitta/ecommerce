import React from "react";
import { Container, Input, Parts, SearchContainer, Wrapper } from "./style";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Parts>
          <SearchContainer>
            <CiSearch />
            <Input type="text" placeholder="Search" />
          </SearchContainer>
        </Parts>
        <Parts></Parts>
        <Parts></Parts>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

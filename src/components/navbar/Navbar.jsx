import React from "react";
import {
  Container,
  Parts,
  SearchContainer,
  Search,
  Round,
  Shop,
  Combine,
  Title,
  Top,
  Center,
  Bottom,
  Post,
} from "./style";
import { CiSearch } from "react-icons/ci";
import "./design.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector} from "react-redux";
// import { increment, decrement } from "../../redux/Counter";
import Input from "../generics/input/Input";
import logo from "../../assets/images/logo.jpg";
import Drop from "../dropdown/Drop";


const Navbar = () => {
  const counter = useSelector((store) => store.counter);
  // const dispatch = useDispatch();

  return (
    <Container className="center">
      <div className="wrapper">
        <Search>
          <Drop />
          <SearchContainer>
            <Input type="search" placeholder="Search" />
            <CiSearch />
          </SearchContainer>
        </Search>
        <Parts>
          {" "}
          <Combine>
            <Post src={logo} />
            <Title>
              <Top>XON</Top>
              <Center>Online</Center>
              <Bottom>Market</Bottom>
            </Title>
          </Combine>
        </Parts>
        <Shop>
          <PiShoppingCartLight size="1.8em" />
          <Round className="center">{counter.data}</Round>
        </Shop>
      </div>
    </Container>
  );
};

export default Navbar;

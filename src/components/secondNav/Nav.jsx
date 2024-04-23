import React from "react";
import { Container, Item, Link, List, Main, Xon } from "./style";
import { Icon, Round, Shop } from "./style";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import Drop from "../dropdown/Drop";

const Nav = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <Main className="center">
      <Container>
        <Xon>XON</Xon>
        <List className="">
          <Item>
            <Link>Home</Link>
          </Item>
          <Item>
            <Link>Women</Link>
          </Item>
          <Item>
            <Link>Men</Link>
          </Item>
          <Item>
            <Link>Kids</Link>
          </Item>
          <Item>
            <Link>Perfume</Link>
          </Item>
        </List>
        <Shop>
          <Drop />
          <Icon className="center">
            <BsFillSuitHeartFill color="red" size="1.3em" />
          </Icon>
          <Icon className="center">
            <PiShoppingCartLight color="white" size="1.6em" />
            <Round className="center">{counter.data}</Round>
          </Icon>
        </Shop>
      </Container>
    </Main>
  );
};

export default Nav;

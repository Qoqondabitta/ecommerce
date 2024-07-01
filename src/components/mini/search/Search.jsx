import React, { useState } from "react";
import { Bunker } from "../../generics";
import { Item, List, MediaText, Text } from "./style";
import { Input } from "../../generics";
import {
  searchDropListconstants,
  searchDropMedia,
} from "../../../constants/searchDrop/searchDrop";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { toggleSearch } from "../../../redux/search";

const Search = ({ st }) => {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.search);
  const { value } = useSelector((store) => store.language);
  return (
    <Bunker type="searchDrop">
      <Bunker type="searchDropFirst">
        <Input type="mainSearch" placeholder="Search" />
        <IoClose
          color="black"
          className="cursor"
          size="1.5em"
          onClick={() => dispatch(toggleSearch())}
        />
      </Bunker>
      <Bunker type="searchDropSecond">
        {searchDropListconstants.map((v, i) => (
          <List key={i}>
            <Item size="main">
              {value == "ENG" ? v.h[0] : value == "UZB" ? v.h[1] : v.h[2]}
            </Item>
            {v.l.map((val, ind) => (
              <Item key={ind}>
                <IoSearch color="black" size="1.1em" />
                <Text>
                  {value == "ENG"
                    ? val.n[0]
                    : value == "UZB"
                    ? val.n[1]
                    : val.n[2]}
                </Text>{" "}
              </Item>
            ))}
          </List>
        ))}
      </Bunker>
      <Bunker type="searchDropMedia">
        <List>
          {searchDropMedia.map((v, i) => (
            <MediaText key={i}>
              {value == "ENG" ? v.p[0] : value == "UZB" ? v.p[1] : v.p[2]}
            </MediaText>
          ))}
        </List>
      </Bunker>
    </Bunker>
  );
};

export default Search;

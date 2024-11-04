import React, { useState } from "react";
import {
  SearchImages,
  ImageSuggestions,
  Item,
  List,
  MediaText,
  SuggestionsWrapper,
  Text,
  SearchMediaWrapper,
  Container,
  SearchDrop,
  FirstCol,
  SecondCol,
  Suggestions,
  DropMedia,
} from "./style";
import {
  searchDropListconstants,
  searchDropMedia,
} from "../../../constants/searchDrop/searchDrop";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { toggleSearch } from "../../../redux/search";
import { resultList } from "../../../constants/searchDrop/searchResults";
import "./search.css";
import InputGroup from "../input/Input";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../../redux/collection";

const Search = React.memo(({ st }) => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);
  const { value } = useSelector((store) => store.language);
  const getValue = (e) => {
    let res = resultList.filter((v) => {
      let l = value == "ENG" ? v.n[0] : value == "UZB" ? v.n[1] : v.n[2];
      return l.toLowerCase().localeCompare(e.target.value.toLowerCase()) == 0;
    });
    setInputValue(e.target.value);
    return setList(res);
  };
  return (
    <SearchDrop>
      <FirstCol onClick={getValue}>
        <InputGroup onChange={getValue} />
        <IoClose
          color="black"
          className="cursor movetop"
          size="1.5em"
          onClick={() => dispatch(toggleSearch())}
        />
      </FirstCol>
      {!inputValue && (
        <SecondCol>
          {searchDropListconstants.map((v, i) => (
            <List key={i}>
              <Item size="main">
                {value == "ENG" ? v.h[0] : value == "UZB" ? v.h[1] : v.h[2]}
              </Item>
              {v.l.map((val, ind) => (
                <NavLink
                  key={ind}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => {
                    dispatch(changeCollection(val?.d));
                    dispatch(toggleSearch());
                  }}
                  to="/collection"
                >
                  <Item>
                    <IoSearch color="black" size="1.1em" />
                    <Text>
                      {value == "ENG"
                        ? val.n[0]
                        : value == "UZB"
                        ? val.n[1]
                        : val.n[2]}
                    </Text>{" "}
                  </Item>
                </NavLink>
              ))}
            </List>
          ))}
        </SecondCol>
      )}
      <SuggestionsWrapper>
        <Suggestions>
          {list.map((v, i) => (
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              key={i}
              onClick={() => dispatch(toggleSearch())}
              to={v?.page}
            >
              <Item onClick={() => dispatch(changeCollection(v?.l))}>
                <IoSearch color="black" size="1.1em" />
                <Text>
                  {value == "ENG" ? v.n[0] : value == "UZB" ? v.n[1] : v.n[2]}
                </Text>
              </Item>
            </NavLink>
          ))}
        </Suggestions>
        <ImageSuggestions>
          {list.map((v, i) => (
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              key={i}
              onClick={() => dispatch(changeCollection(v?.l))}
              to={v?.page}
            >
              <SearchImages src={v.url} />
            </NavLink>
          ))}
        </ImageSuggestions>
      </SuggestionsWrapper>
      {!inputValue && (
        <DropMedia>
          {searchDropMedia.map((v, i) => (
            <NavLink
              to="/collection"
              onClick={() => {
                dispatch(changeCollection(v?.d));
                dispatch(toggleSearch());
              }}
              style={{ textDecoration: "none", color: "black" }}
              key={i}
            >
              <MediaText>
                {value == "ENG" ? v.p[0] : value == "UZB" ? v.p[1] : v.p[2]}
              </MediaText>
            </NavLink>
          ))}
        </DropMedia>
      )}
    </SearchDrop>
  );
});

export default Search;

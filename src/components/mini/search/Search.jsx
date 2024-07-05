import React, { useRef, useState } from "react";
import { Bunker } from "../../generics";
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
import { Input } from "../../generics";
import {
  searchDropListconstants,
  searchDropMedia,
} from "../../../constants/searchDrop/searchDrop";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { toggleSearch } from "../../../redux/search";
import { resultList } from "../../../constants/searchDrop/searchResults";
import grey from "../../../assets/images/greyJacket.avif";
import "./search.css";
import InputGroup from "../input/Input";

const Search = ({ st }) => {
  const searchRef = useRef();
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);
  const search = useSelector((store) => store.search);
  const { value } = useSelector((store) => store.language);
  const getValue = (e) => {
    let res = resultList.filter((v) => {
      return v.n.toLowerCase().localeCompare(e.target.value.toLowerCase()) == 0;
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
        </SecondCol>
      )}
      <SuggestionsWrapper>
        <Suggestions>
          {list.map((v, i) => (
            <Item key={i}>
              <IoSearch color="black" size="1.1em" />
              <Text>{v.n}</Text>
            </Item>
          ))}
        </Suggestions>
        <ImageSuggestions>
          {list.map((v, i) => (
            <SearchImages key={i} src={v.url} />
          ))}
        </ImageSuggestions>
      </SuggestionsWrapper>
      {!inputValue && (
        <DropMedia>
          {searchDropMedia.map((v, i) => (
            <MediaText key={i}>
              {value == "ENG" ? v.p[0] : value == "UZB" ? v.p[1] : v.p[2]}
            </MediaText>
          ))}
        </DropMedia>
      )}
    </SearchDrop>
  );
};

export default Search;

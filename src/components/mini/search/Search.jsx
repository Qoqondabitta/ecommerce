import React, { useRef, useState } from "react";
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
import { resultList } from "../../../constants/searchDrop/searchResults";

const Search = ({ st }) => {
  const searchRef = useRef();
  const [list, setList] = useState(resultList);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);
  const search = useSelector((store) => store.search);
  const { value } = useSelector((store) => store.language);
  //   console.log(searchRef.current, "searchRef");
  const getValue = (e) => {
      let res = resultList.filter((v) => {
      return v.n.toLowerCase().localeCompare(e.target.value.toLowerCase())==0;
    //   return v.n.toLowerCase()==e.target.value.toLowerCase();
    });
    setInputValue(e.target.value);
    return setList(res);
    };
    const changeList = (e)=>{
return 
    }
  return (
    <Bunker type="searchDrop">
      <Bunker type="searchDropFirst" onClick={getValue}>
        <Input
          ref={searchRef}
          onChange={getValue}
          type="mainSearch"
          placeholder="Search"
        />
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
        {list.map((v, i) => (
          <Item key={i}>
            <IoSearch color="black" size="1.1em" />
            <Text>{v.n}</Text>
          </Item>
        ))}
      </Bunker>

      {!inputValue && (
        <Bunker type="searchDropMedia">
          {/* <List> */}
          {searchDropMedia.map((v, i) => (
            <MediaText key={i}>
              {value == "ENG" ? v.p[0] : value == "UZB" ? v.p[1] : v.p[2]}
            </MediaText>
          ))}
          {/* </List> */}
        </Bunker>
      )}
    </Bunker>
  );
};

export default Search;

import React from "react";
import "./sitemap.css";
import {
  Box,
  Container,
  Headings,
  ListBottom,
  ListFull,
  ListWrap,
  Main,
  MainTitle,
  Wraps,
} from "./style";
import { NavLink } from "react-router-dom";
import sitemapUrls from "../../constants/componentsContants/sitemap/sitemap";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import { changeCollection } from "../../redux/collection";

const SiteMap = () => {
  const l = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="center">
        <Box className="col-center-start">
          {sitemapUrls.map((v, i) => (
            <Wraps key={i} className="columnStart">
              <MainTitle>
                {l == "ENG" ? v.mt[0] : l == "UZB" ? v.mt[1] : v.mt[2]}
              </MainTitle>
              <ListWrap className="start-between">
                {v.l.map((r, i) => (
                  <ListFull key={i} className="columnStart">
                    <Headings>
                      {l == "ENG" ? r.h[0] : l == "UZB" ? r.h[1] : r.h[2]}
                    </Headings>
                    <ListBottom className="columnStart">
                      {r.li.map((val, i) => (
                        <NavLink
                          key={i}
                          onClick={() => dispatch(changeCollection(val.ic))}
                          to="/collection"
                          className="list-links"
                        >
                          {l == "ENG"
                            ? val.st[0]
                            : l == "UZB"
                            ? val.st[1]
                            : val.st[2]}
                        </NavLink>
                      ))}
                    </ListBottom>
                  </ListFull>
                ))}
              </ListWrap>
            </Wraps>
          ))}
        </Box>
      </Container>
      <Footer />
    </Main>
  );
};

export default SiteMap;

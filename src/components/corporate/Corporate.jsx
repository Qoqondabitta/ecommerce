import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { Box, Container, LegalTableTitle, LegalText, LegalGreyStick } from "../legal/style";
import "./corporate.css"
import { corporatefirsttextstore, corporatesecondtextstore } from "../../constants/componentsContants/corporate";

const Corporate = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <LegalTableTitle>
          {l == "ENG"
            ? "Table of Contents"
            : l == "UZB"
            ? "Mundarija"
            : "Оглавление"}
        </LegalTableTitle>
        <LegalGreyStick></LegalGreyStick>
        <div className="corporate-text-wrapper center">
          {corporatefirsttextstore.map((v, i) => (
            <LegalText key={i}>
              {l == "ENG" ? v.t[0] : l == "UZB" ? v.t[1] : v.t[2]}
            </LegalText>
          ))}
        </div>
        <Box className="columnStart">
          <h1 className="corporate-second-big-text">
            {l == "ENG"
              ? "XON BRAND S.P.A"
              : l == "UZB"
              ? "XON BRAND S.P.A"
              : "XON BRAND S.P.A"}
          </h1>
          <p className="corporate-thick-text">
            {l == "ENG"
              ? "Xon Brand S.P.A"
              : l == "UZB"
              ? "Xon Brand S.P.A"
              : "Xon Brand S.P.A"}
          </p>
          {corporatesecondtextstore.map((v, i) => (
            <LegalText key={i}>
              {l == "ENG" ? v.t[0] : l == "UZB" ? v.t[1] : v.t[2]}
            </LegalText>
          ))}
        </Box>
        <Box className="columnStart">
          <h1 className="corporate-second-big-text">
            {l == "ENG"
              ? "XON BRAND S.P.A"
              : l == "UZB"
              ? "XON BRAND S.P.A"
              : "XON BRAND S.P.A"}
          </h1>
          <p className="corporate-thick-text">
            {l == "ENG"
              ? "Xon Brand S.P.A"
              : l == "UZB"
              ? "Xon Brand S.P.A"
              : "Xon Brand S.P.A"}
          </p>
          {corporatesecondtextstore.map((v, i) => (
            <LegalText key={i}>
              {l == "ENG" ? v.t[0] : l == "UZB" ? v.t[1] : v.t[2]}
            </LegalText>
          ))}
        </Box>
      </Container>
      <Footer />
    </Main>
  );
};

export default Corporate;

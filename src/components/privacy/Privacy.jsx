import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  LegalGreyStick,
  LegalTableTitle,
  LegalText,
} from "../legal/style";
import { privacytext } from "../../constants/componentsContants/privacy";

const Privacy = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <LegalTableTitle>
          {l == "ENG"
            ? "Privacy Policy"
            : l == "UZB"
            ? "Mundarija"
            : "политика конфиденциальности"}
        </LegalTableTitle>
        <LegalGreyStick></LegalGreyStick>
        <Box className="columnStart">
          {privacytext.map((v, i) => (
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

export default Privacy;

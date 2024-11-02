import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import {
  Box,
  Container,
  LegalGeneralText,
  LegalGreyStick,
  LegalTableTitle,
  LegalText,
} from "./style";
import { useSelector } from "react-redux";
import { legaltext } from "../../constants/componentsContants/legal";

const Legal = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <LegalTableTitle>
          {l == "ENG" ? "Table of Contents" : l == "UZB" ? "Mundarija" : ""}
        </LegalTableTitle>
        <LegalGreyStick></LegalGreyStick>
        <LegalText>
          {l == "ENG"
            ? "General Terms and Conditions of Use of the Website"
            : l == "UZB"
            ? "Veb-saytdan foydalanishning umumiy shartlari"
            : "Общие положения и условия использования веб-сайта"}
        </LegalText>
        <LegalText>
          {l == "ENG"
            ? "General Conditions of Sale"
            : l == "UZB"
            ? "Sotishning umumiy shartlari"
            : "Общие условия продажи"}
        </LegalText>
        <Box className="columnStart">
          <LegalGeneralText>
            {l == "ENG"
              ? "General Terms and Conditions of Use of the Website"
              : l == "UZB"
              ? "Veb-saytdan foydalanishning umumiy shartlari"
              : "Общие положения и условия использования веб-сайта"}
          </LegalGeneralText>
          {legaltext.map((v, i) => (
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

export default Legal;

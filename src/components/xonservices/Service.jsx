import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import {
  Container,
  ServiceBox,
  ServiceGreyStick,
  ServiceImage,
  ServiceMediaWrapper,
  ServiceMediaWrapperChildBox,
  ServiceMediaWrapperChildBoxCutter,
  ServiceNameTitle,
  ServiceTableTitle,
  ServiceText,
  ServiceThickSmallTitle,
  TextBunker,
} from "./style";
import { useSelector } from "react-redux";
import { service } from "../../constants/componentsContants/service";

const Services = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <ServiceTableTitle>
          {l == "ENG"
            ? "XON Services"
            : l == "UZB"
            ? "XON Xizmatlari"
            : "Услуги XON"}
        </ServiceTableTitle>
        <ServiceThickSmallTitle>
          {l == "ENG"
            ? "Personolize your experience"
            : l == "UZB"
            ? "O'z Tajribangizni Shaxsiylashtiring"
            : "Персонализируйте свой опыт"}
        </ServiceThickSmallTitle>
        <ServiceGreyStick></ServiceGreyStick>
        {service.map((v, i) => (
          <ServiceBox key={i} className="columnCenter">
            <ServiceNameTitle>
              {l == "ENG" ? v.s[0] : l == "UZB" ? v.s[1] : v.s[2]}
            </ServiceNameTitle>
            <ServiceText>
              {l == "ENG" ? v.d[0] : l == "UZB" ? v.d[1] : v.d[2]}
            </ServiceText>
            <ServiceMediaWrapper>
              {v.ch.map((r, i) => (
                <ServiceMediaWrapperChildBox key={i} className="columnCenter">
                  <ServiceImage src={r.imgurl} />
                  <TextBunker className="columnCenter">
                    <ServiceThickSmallTitle>
                      {l == "ENG" ? r.t[0] : l == "UZB" ? r.t[1] : r.t[2]}
                    </ServiceThickSmallTitle>
                    <ServiceText>
                      {l == "ENG" ? r.rt[0] : l == "UZB" ? r.rt[1] : r.rt[2]}
                    </ServiceText>
                  </TextBunker>
                  {r.sv && (
                    <ServiceMediaWrapperChildBoxCutter></ServiceMediaWrapperChildBoxCutter>
                  )}
                </ServiceMediaWrapperChildBox>
              ))}
            </ServiceMediaWrapper>
          </ServiceBox>
        ))}
      </Container>
      <Footer />
    </Main>
  );
};

export default Services;

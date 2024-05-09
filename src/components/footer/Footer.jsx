import React from "react";
import { Container, Input, Item, List, Main, Parts, Row, Text, XON } from "./style";
import {
  companyFooter,
  countryFooter,
  detailsFooter,
  helpFooter,
  serviceFooter,
} from "../../constants/footer";
import "./footer.css"
import { Info, TextWrapper, Text as Texts } from "../sliders/kids/style";

const Footer = () => {
  return (
    <Main>
      <Container>
        <Row>
          <List flex="1">
            {helpFooter.map((v, id) => (
              <Item
                key={id}
                botmar={v.botMar}
                underline={v.underline}
                capital={v.capital}
                color={v.color}
                heights="20px"
                fontSize={v?.size}
              >
                {v.name}
              </Item>
            ))}
          </List>
          <List flex="1">
            {/* © 2021 - Tod */}
            {companyFooter.map((v, id) => (
              <Item
                key={id}
                botmar={v.botMar}
                underline={v.underline}
                capital={v.capital}
                color={v.color}
                heights="20px"
                fontSize={v?.size}
              >
                {v.name}
              </Item>
            ))}
          </List>
          <List flex="2">
            {detailsFooter.map((v, id) => (
              <Item
                key={id}
                widths="true"
                color={v.color}
                botmar={v.botMar}
                underline={v.underline}
                capital={v.capital}
                gap="20px"
                className="columnStart"
              >
                {v.name}
                {v.privacy && (
                  <Text capital={v.capital} color={v.text.color}>
                    {`${v.text.script}`}
                  </Text>
                )}
                <section className="form-group topMar">
                  <Input type="text" placeholder={v.placeHolder.title} />
                  <label className="form-label">{v.placeHolder.title}</label>
                </section>
              </Item>
            ))}
          </List>
        </Row>
        <Row>
          {/* {serviceFooter.map(v => <Parts>{serviceFooter.map(v=><Item>v.</Item>) }</Parts>)} */}
          <Parts className="columnStart">
            {serviceFooter.map((v, id) => (
              <Item
                key={id}
                underline={v.underline}
                heights="true"
                color={v.color}
              >
                {v.text}
              </Item>
            ))}
          </Parts>
          <Parts className="columnStart">
            {countryFooter.map((v, id) => (
              <Item
                underline={v.underline}
                key={id}
                heights="true"
                color={v.color}
              >
                {v.text}
              </Item>
            ))}
          </Parts>
          {/* <TextWrapper>
            <Texts className="justifyStart kid">
              <Info>Different Colors</Info>
              <Info>Different Styles </Info>
              <Info>Special Offers</Info>
              <Info>For Different Ages</Info>
              <Info>Different Colors</Info>
            </Texts>
          </TextWrapper> */}
        </Row>
        <XON>XON BRAND</XON>
      </Container>
    </Main>
  );
};

export default Footer;

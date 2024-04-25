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

const Footer = () => {
  return (
    <Main>
      <Container>
        <Row>
          <List flex="1">
            {helpFooter.map((v) => (
              <Item
                botMar={v.botMar}
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
            {companyFooter.map((v) => (
              <Item
                botMar={v.botMar}
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
            {detailsFooter.map((v) => (
              <Item
                widths="true"
                color={v.color}
                botMar={v.botMar}
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
                <Input placeholder={v.placeHolder.title} />
              </Item>
            ))}
          </List>
        </Row>
        <Row>
          {/* {serviceFooter.map(v => <Parts>{serviceFooter.map(v=><Item>v.</Item>) }</Parts>)} */}
          <Parts className="columnStart">
            {serviceFooter.map((v) => (
              <Item underline={v.underline} heights="true" color={v.color}>
                {v.text}
              </Item>
            ))}
          </Parts>
          <Parts className="columnStart">
            {countryFooter.map((v) => (
              <Item underline={v.underline} heights="true" color={v.color}>
                {v.text}
              </Item>
            ))}
          </Parts>
        </Row>
        <XON>XON BRAND</XON>
        <section>
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <label className="form-label">Full Name</label>
          </div>
          <div className="form-group">
            <input type="text" placeholder="E-mail" />
            <label className="form-label">E-mail</label>
          </div>
        </section>
      </Container>
    </Main>
  );
};

export default Footer;

import React from "react";
import { Container, Item, List, Main, Row } from "./style";
import { companyFooter, detailsFooter, helpFooter } from "../../constants/footer";

const Footer = () => {
  return (
    <Main>
      <Container>
        <Row>
          <List>
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
          <List>
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
                  <List>
                      {detailsFooter.map(v => <Item>{v.name}</Item>)}
          </List>
        </Row>
      </Container>
    </Main>
  );
};

export default Footer;

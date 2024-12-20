import React from "react";
import {
  Container,
  Input,
  Item,
  List,
  Main,
  Parts,
  FooterRows,
  Text,
  XON,
} from "./style";
import {
  companyFooter,
  detailsFooter,
  helpFooter,
  serviceFooter,
} from "../../constants/footer";
import "./footer.css";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../mini/contact/Contact";
import { toggleContact } from "../../redux/contact";
import { NavLink } from "react-router-dom";
import { changeProperty } from "../../redux/properties";

const Footer = () => {
  const { value } = useSelector((store) => store.language);
  const c = useSelector((store) => store.contactSlice.value);
  const co = useSelector((store) => store.countrySlice.value);
  const dispatch = useDispatch();
  return (
    <Main>
      <Container>
        <FooterRows lists="true">
          <List flex="1">
            {helpFooter.map((v, id) => (
              <NavLink
                to={v?.urlToPage}
                onClick={() => dispatch(changeProperty(v?.propertyDefiner))}
                key={id}
                style={{ textDecoration: "none" }}
              >
                <Item
                  botmar={v.botMar}
                  underline={v.underline}
                  capital={v.capital}
                  onClick={() =>
                    v.name[0] == "Contact Us" && dispatch(toggleContact())
                  }
                  className="pointer"
                  color={v.color}
                  heights="20px"
                  fontSize={v?.size}
                >
                  {value == "ENG"
                    ? v.name[0]
                    : value == "UZB"
                    ? v.name[1]
                    : v.name[2]}
                </Item>
              </NavLink>
            ))}
          </List>
          <List flex="1">
            {/* © 2021 - Tod */}
            {companyFooter.map((v, id) => (
              <NavLink
                key={id}
                to={v?.urlToPage}
                style={{ textDecoration: "none" }}
              >
                <Item
                  botmar={v.botMar}
                  underline={v.underline}
                  capital={v.capital}
                  color={v.color}
                  heights="20px"
                  fontSize={v?.size}
                >
                  {value == "ENG"
                    ? v.name[0]
                    : value == "UZB"
                    ? v.name[1]
                    : v.name[2]}
                </Item>
              </NavLink>
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
                // capital
                gap="20px"
                className="columnStart"
              >
                {value == "ENG"
                  ? v.name[0]
                  : value == "UZB"
                  ? v.name[1]
                  : v.name[2]}

                {v.privacy && (
                  <Text capital={v.capital} color={v.text.color}>
                    {/* {`${v.text.script}`} */}
                    {value == "ENG"
                      ? `${v.text.script[0]}`
                      : value == "UZB"
                      ? `${v.text.script[1]}`
                      : `${v.text.script[2]}`}
                  </Text>
                )}
                <section className="form-group topMar">
                  <Input
                    type="text"
                    placeholder={
                      value == "ENG"
                        ? v.placeHolder.title[0]
                        : value == "UZB"
                        ? v.placeHolder.title[1]
                        : v.placeHolder.title[2]
                    }
                  />
                  <label className="form-label">
                    {value == "ENG"
                      ? v.placeHolder.title[0]
                      : value == "UZB"
                      ? v.placeHolder.title[1]
                      : v.placeHolder.title[2]}
                    {/* {v.placeHolder.title} */}
                  </label>
                </section>
              </Item>
            ))}
          </List>
        </FooterRows>
        <FooterRows>
          {/* {serviceFooter.map(v => <Parts>{serviceFooter.map(v=><Item>v.</Item>) }</Parts>)} */}
          <Parts className="columnStart">
            {serviceFooter.map((v, id) => (
              <NavLink
                key={id}
                to={v?.urlToPage}
                style={{ textDecoration: "none" }}
              >
                <Item underline={v.underline} heights="true" color={v.color}>
                  {value == "ENG"
                    ? v.text[0]
                    : value == "UZB"
                    ? v.text[1]
                    : v.text[2]}
                </Item>
              </NavLink>
            ))}
          </Parts>
          <Parts className="columnStart"></Parts>
        </FooterRows>
        <XON>{value == "RUS" ? "XOH БРЕНД" : "XON BRAND"}</XON>
      </Container>
      <Contact classHeadline={c == true && "openContact"} />
    </Main>
  );
};

export default Footer;

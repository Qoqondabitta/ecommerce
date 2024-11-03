import React from "react";
import "./contact.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactItems,
  ContactLinks,
  ContactUs,
  Container,
  Item,
  List,
} from "./style";
import {contactConstants} from "../../../constants/componentsContants/contact/contactData.jsx"
import { IoClose } from "react-icons/io5";
import { toggleContact } from "../../../redux/contact";

const Contact = ({ classHeadline }) => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  return (
    <>
      <Container className={`${classHeadline} contact`}>
        <List>
          <IoClose
            className="pointer closeContact"
            color="white"
            size="2em"
            onClick={() => dispatch(toggleContact())}
          />
          <ContactUs>
            {l == "ENG"
              ? "Contact us"
              : l == "UZB"
              ? "Aloqaga Chiqing"
              : "Свяжитесь с нами"}
          </ContactUs>
          {contactConstants.map((v, i) => (
            <ContactItems key={i}>
              <ContactLinks className="pointer" href={v.linkingUrl}>
                {v.icon} {l == "ENG" ? v.f[0] : l == "UZB" ? v.f[1] : v.f[2]}
              </ContactLinks>
              <Item>{l == "ENG" ? v.s[0] : l == "UZB" ? v.s[1] : v.s[2]}</Item>
            </ContactItems>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Contact;

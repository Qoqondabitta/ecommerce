import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import {
    Box,
  Container,
  EthicFirstTitle,
  EthicSecondTitle,
  EthicText,
  EthicThirdTitle,
} from "./style";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { ethictexts } from "../../constants/componentsContants/ethic";

const Ethics = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <Box>
          <EthicFirstTitle>
            {l == "ENG"
              ? "Forword By"
              : l == "UZB"
              ? "Ikki Og'iz So'z"
              : "Переслать по"}
          </EthicFirstTitle>
          <EthicSecondTitle>
            {l == "ENG"
              ? "Raupov Lazizjon"
              : l == "UZB"
              ? "Raupov Lazizjon"
              : "Raupov Laqzizjon"}
          </EthicSecondTitle>
          <EthicThirdTitle>
            {l == "ENG"
              ? "Chairman and Chief Executive Officer"
              : l == "UZB"
              ? "Rais va bosh ijrochi direktor"
              : "Председатель и главный исполнительный директор"}
          </EthicThirdTitle>
          {ethictexts.map((v, i) => (
            <EthicText>
              {l == "ENG" ? v.t[0] : l == "UZB" ? v.t[1] : v.t[2]}
            </EthicText>
          ))}
        </Box>
      </Container>
      <Footer />
    </Main>
  );
};

export default Ethics;

import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import { Container, EqualText, EqualTitle } from "./style";
import { useSelector } from "react-redux";

const Equilibrium = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <EqualTitle>
          {l == "ENG"
            ? "XON Equibilirium"
            : l == "UZB"
            ? "XON Muozanati"
            : "XOH Равновесие"}
        </EqualTitle>
        <EqualText>
          {l == "ENG"
            ? "The XON Equilibrium global program aims to support industry change and foster unity through social action. It enhances the company’s commitment to deliver sustainable social impact across communities and the fashion industry. Launched in 2019, the XON Equilibrium global program now includes three key initiatives."
            : l == "UZB"
            ? "XON Equilibium global dasturi sanoat o'zgarishini qo'llab-quvvatlash va ijtimoiy harakatlar orqali birlikni mustahkamlashga qaratilgan. Bu kompaniyaning jamoalar va moda sanoatida barqaror ijtimoiy ta'sir ko'rsatish majburiyatini oshiradi. 2019-yilda boshlangan XON Equilibrium global dasturi endi uchta asosiy tashabbusni o‘z ichiga oladi."
            : "Глобальная программа XON Equilibrium направлена ​​на поддержку изменений в отрасли и укрепление единства посредством социальных действий. Это усиливает приверженность компании обеспечению устойчивого социального воздействия на сообщества и индустрию моды. Глобальная программа XON Equilibrium, запущенная в 2019 году, теперь включает в себя три ключевые инициативы."}
        </EqualText>
      </Container>
      <Footer />
    </Main>
  );
};

export default Equilibrium;

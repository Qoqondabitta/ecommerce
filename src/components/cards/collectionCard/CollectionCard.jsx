import React from "react";
import { Container, Data, Icon, Subtitle } from "./style";
import { GoHeart as Heart } from "react-icons/go";
import cardimg from "../../../assets/images/collection/men/collectioncard10.jpeg";
import cardimg2 from "../../../assets/images/collection/men/collectioncard10alternative.webp";
import { useSelector } from "react-redux";
import { collectioncardconstants } from "../../../constants/componentsContants/collection";

const CollectionCard = ({list}) => {
  const { value } = useSelector((store) => store.language);
  return (
    <>
      {list.map((v, i) => (
        <Container
          bgimg={v?.bg}
          position={v?.position}
          place={v?.place}
          alternative={v?.a}
          width={v?.w}
        >
          <Icon>
            <Heart color="black" size="1.4rem" />
          </Icon>
          {v?.su && (
            <Subtitle underline="true">
              {value == "ENG" ? v?.su[0] : value == "UZB" ? v?.su[1] : v?.su[2]}
            </Subtitle>
          )}
          <Data width={v?.w}>
            {v?.f && (
              <Subtitle>
                {value == "ENG" ? v?.f[0] : value == "UZB" ? v?.f[1] : v?.f[2]}
              </Subtitle>
            )}
            {v?.s && <Subtitle style={{ marginTop: "20px" }}>10$</Subtitle>}
            {v?.t && (
              <Subtitle underline="true">
                {value == "ENG" ? v?.t[0] : value == "UZB" ? v?.t[1] : v?.t[2]}
              </Subtitle>
            )}
          </Data>
        </Container>
      ))}
    </>
  );
};

export default CollectionCard;

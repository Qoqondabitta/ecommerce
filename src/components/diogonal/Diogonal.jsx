import React from 'react'
import "./diogonal.css"
import {Button, Container, Long, Main, Parts} from "./styel"
import back from "../../assets/images/bottomCard/back2.jpg";
import back1 from "../../assets/images/bottomCard/back3.avif";

const Diogonal = () => {
  return (
    <Main className="center">
      <Container className="center">
        <Long></Long>
        <Parts img={back1} className='center' position="top">
          <Button right="true">Learn More</Button>
        </Parts>
        {/* <Parts img={back1} style={{backgroundImage: `url(../../assets/images/bottomCard.back1.jpg)`}}>  */}
        <Parts img={back}> 
          <Button left="true">Learn More</Button>
        </Parts>
      </Container>
    </Main>
  );
}

export default Diogonal
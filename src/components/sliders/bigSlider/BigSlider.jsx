import React from "react";
import { Container, Main } from "./style";
const DoubleSlider = React.lazy(() => import("../doubleSlider/Double"));
const Video = React.lazy(() => import("../../video/Video"));
const Kids = React.lazy(() => import("../kids/Kids"));
import { ArrowWrapper } from "../doubleSlider/style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./bigSlider.css";
const FullScreenSlider = React.lazy(() =>
  import("../fullScreenSlider/FullScreenSlider")
);
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/order";

const BigSlider = () => {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);

  return (
    <Main className="center">
      <Container className="center">
        {order.value == 0 ? (
          <React.Suspense
            fallback={<React.Fragment>Loading...</React.Fragment>}
          >
            <FullScreenSlider />
          </React.Suspense>
        ) : order.value == 1 ? (
          <React.Suspense
            fallback={<React.Fragment>Loading...</React.Fragment>}
          >
            <DoubleSlider />
          </React.Suspense>
        ) : order.value == 2 ? (
          <React.Suspense
            fallback={<React.Fragment>Loading...</React.Fragment>}
          >
            <Kids />
          </React.Suspense>
        ) : (
          <React.Suspense
            fallback={<React.Fragment>Loading...</React.Fragment>}
          >
            <Video />
          </React.Suspense>
        )}
      </Container>
      {/* Arrows */}
      <ArrowWrapper
        className="center"
        left="true"
        onClick={() => dispatch(decrement())}
      >
        <MdKeyboardArrowLeft
          color="white"
          size="2em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      <ArrowWrapper className="center" onClick={() => dispatch(increment())}>
        <MdKeyboardArrowRight
          color="white"
          size="2em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      {/* Arrows */}
    </Main>
  );
};

export default BigSlider;

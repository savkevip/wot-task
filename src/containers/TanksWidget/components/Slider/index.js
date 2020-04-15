import { findIndex, size } from "lodash/fp";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Details from "./components/Details";
import Button from "../../../../common/ui/Button";
import { getIconImageSrc } from "../../../../utils/path";
import {
  Container,
  ButtonWrapper,
  ButtonLabel,
  LeftArrowIcon,
  RightArrowIcon,
  SliderContainer,
  SliderWrapper,
  NoData,
} from "./style";

export default function Slider({ tanks }) {
  const startIndex = Math.floor(size(tanks) / 2);
  const [currentTank, setCurrentTank] = useState(tanks[startIndex]);
  const currentIndex = findIndex(currentTank, tanks);

  useEffect(() => setCurrentTank(tanks[startIndex]), [tanks]);

  const goLeft = () => {
    const newIndex = currentIndex - 1;
    setCurrentTank(tanks[newIndex]);
  };

  const goRight = () => {
    const newIndex = currentIndex + 1;
    setCurrentTank(tanks[newIndex]);
  };

  const translateXValue = currentIndex * (100 / size(tanks));

  return (
    <Container>
      <ButtonWrapper>
        {currentIndex > 0 && (
          <Button className="slider-btn-left" onClick={goLeft}>
            <LeftArrowIcon src={getIconImageSrc("left")} />
            <ButtonLabel>Previous</ButtonLabel>
          </Button>
        )}
        {currentIndex < size(tanks) - 1 && (
          <Button className="slider-btn-right" onClick={goRight}>
            <ButtonLabel>Next</ButtonLabel>
            <RightArrowIcon src={getIconImageSrc("right")} />
          </Button>
        )}
      </ButtonWrapper>
      {size(tanks) ? (
        <>
          <SliderContainer>
            <SliderWrapper x={translateXValue}>
              {tanks.map((tank, index) => (
                <Card
                  key={tank.id}
                  tank={tank}
                  active={currentIndex === index}
                />
              ))}
            </SliderWrapper>
          </SliderContainer>
          <Details />
        </>
      ) : (
        <NoData>No available tanks commander!</NoData>
      )}
    </Container>
  );
}

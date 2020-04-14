import Icon from "../../../../common/ui/Icon";
import styled from "styled-components";
import colors from "../../../../utils/colors";

export const Container = styled.div`
  width: 100%;
`;

const Button = styled(Icon)`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export const ButtonLabel = styled.span`
  margin: 0 15px;
`;

export const LeftArrowIcon = styled(Button)``;

export const RightArrowIcon = styled(Button)``;

export const SliderContainer = styled.div`
  position: relative;
  max-width: 310px;
  height: 195px;
  margin: 0 auto;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 195px;
    outline: 1px solid ${colors.font};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translateX(-${(props) => props.x}%);
`;

export const NoData = styled.h3`
  text-align: center;
`;

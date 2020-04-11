import Icon from "../../common/ui/Icon";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  min-width: 310px;
  width: 310px;
  min-height: 195px;
  height: 195px;
  background: url(${props => props.url});
  ${props => props.selected && `border: 1px solid;`}
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px 15px;
  transition: .3s;
  box-sizing: border-box;
  cursor: pointer;
  
  &:hover {
    border: 1px solid;
    transform: scaleX(1.1);
    z-index: 10;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Tier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${props => `color: ${props.color};`}
`;

export const TierIcon = styled(Icon)`
  margin-right: 5px;
  margin-top: -5px;
`;

export const TierLabel = styled.span`
`;

export const PremiumIcon = styled(Icon)`
`;

export const TankImage = styled.img``;

export const NameLabel = styled.span`
  width: 100%;
  text-align: right;
`;

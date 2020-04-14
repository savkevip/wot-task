import styled from "styled-components";
import Icon from "../../../../../../common/ui/Icon";

export const Container = styled.div`
  min-width: 310px;
  min-height: 195px;
  background: url(${(props) => props.url});
  background-size: cover;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  transition: opacity 300ms linear,
    transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  opacity: ${(props) => (props.active ? 1 : 0.3)};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0.8)")};
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
  ${(props) => `color: ${props.color};`}
`;

export const TierIcon = styled(Icon)`
  margin-right: 5px;
  margin-top: -5px;
`;

export const TierLabel = styled.span``;

export const PremiumIcon = styled(Icon)``;

export const TankImage = styled.img``;

export const NameLabel = styled.span`
  width: 100%;
  text-align: right;
`;

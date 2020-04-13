import styled from "styled-components";
import colors from "../../../utils/colors";

export const Container = styled.div`
  margin: 10px 0;
  position: relative;
  font-size: 16px;
  min-width: 200px;
`;

export const SelectElement = styled.div`
  width: 100%;
  appearance: none;
  display: block;
  padding: 10px;
  background: url(${props => props.url}) no-repeat 90% center;
  background-size: 10px;
  background-color: ${colors.main};
  color: ${colors.button};
  border: 1px solid ${colors.button};
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-sizing: border-box;
  transition: .3s;
  
  &:hover {
    color: ${colors.font};
    border: 1px solid ${colors.font};
  }
`;

export const Dropdown = styled.div`
  margin-top: 10px;
  width: 100%;
  color: ${colors.button};
  border: 1px solid ${colors.button};
  border-radius: 5px;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.main};
`;

export const DropdownItem = styled.span`
  margin: 5px 0;
  text-transform: uppercase;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    color: ${colors.font};
  }
`;

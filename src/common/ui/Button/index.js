import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${colors.button};
  border-radius: 5px;
  background-color: ${colors.main};
  color: ${colors.button};
  font-size: 16px;
  text-transform: uppercase;
  min-width: 150px;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    background-color: ${colors.button};
    color: ${colors.font};
  }
`;

export default function Button({ label, onClick, ...other }) {
    return <Component {...other} onClick={onClick}>{label}</Component>
}

import React from "react"
import styled from "styled-components";

const Component = styled.img`
  width: 20px;
  height: 20px;
`;

export default function Icon(props) {
    return <Component {...props} />
}

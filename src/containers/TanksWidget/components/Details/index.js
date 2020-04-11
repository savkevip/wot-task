import React from "react";
import styled from "styled-components";
import colors from "../../../../utils/colors";

const Container = styled.div`
    width: 400px;
    height: 100%;
    top: 0;
    left: ${props => props.active ? "0" : "-400px"};
    overflow: hidden;
    background-color: ${colors.subMain};
    box-shadow: 5px 5px 10px ${colors.subMain};
    position: fixed;
    z-index: 11;
    opacity: ${props => props.active ? 1 : 0};
    transition: all 0.25s;
`;

export default function Details({ tank, setSelected }) {

    return (
        <Container active={tank}>
            <span onClick={() => setSelected("")}>Close</span>
            {tank && (
                <span>{tank.name}</span>
            )}
        </Container>
    )
}

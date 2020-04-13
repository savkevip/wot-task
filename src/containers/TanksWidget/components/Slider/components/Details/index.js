import React from "react";
import Button from "../../../../../../common/ui/Button";
import Icon from "../../../../../../common/ui/Icon";
import { getIconImageSrc } from "../../../../../../utils/helpers";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 15px;
`;
const Text = styled.span`
  margin-left: 10px;
`;

export default function Details({ tank }) {
    const randomizeValue = () => Math.floor(Math.random() * 100) + 1;

    return (
        <Container>
            <Label>
                <Icon src={getIconImageSrc("time")} />
                <Text>
                    Gun Traverse Time: {randomizeValue()}
                </Text>
            </Label>
            <Label>
                <Icon src={getIconImageSrc("aim")} />
                <Text>
                    Aiming time: {randomizeValue()}
                </Text>
            </Label>
            <Button>
                <Icon src={getIconImageSrc("battle")} />
                <Text>
                    Battle
                </Text>
            </Button>
        </Container>
    )
}

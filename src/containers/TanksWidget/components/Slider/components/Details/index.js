import React from "react";
import Button from "../../../../../../common/ui/Button";
import Icon from "../../../../../../common/ui/Icon";
import { getIconImageSrc } from "../../../../../../utils/path";
import { Container, Label, Text } from "./style";

export default function Details() {
  const randomizeValue = () => Math.floor(Math.random() * 100) + 1;

  return (
    <Container>
      <Label>
        <Icon src={getIconImageSrc("time")} />
        <Text>Gun Traverse Time: {randomizeValue()}</Text>
      </Label>
      <Label>
        <Icon src={getIconImageSrc("aim")} />
        <Text>Aiming time: {randomizeValue()}</Text>
      </Label>
      <Button
        className="battle-btn"
        onClick={() => alert("Loading please wait...")}
      >
        <Icon src={getIconImageSrc("battle")} />
        <Text>Battle</Text>
      </Button>
    </Container>
  );
}

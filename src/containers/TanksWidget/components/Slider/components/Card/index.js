import React from "react";
import {
  getIconImageSrc,
  getNationImageSrc,
  getTankImageSrc,
  getTierNumber,
} from "../../../../../../utils/helpers";
import {
  Container,
  CardHeader,
  NameLabel,
  PremiumIcon,
  TankImage,
  Tier,
  TierIcon,
  TierLabel,
} from "./style";
export default function Card({
  tank: { id, tier, name, nation, premium },
  active,
}) {
  return (
    <Container key={id} active={active} url={getNationImageSrc(nation)}>
      <CardHeader>
        <Tier>
          <TierIcon src={getIconImageSrc("tier")} alt="tier" />
          <TierLabel>{getTierNumber(tier)}</TierLabel>
        </Tier>
        {premium && <PremiumIcon src={getIconImageSrc("star")} alt="premium" />}
      </CardHeader>
      <TankImage src={getTankImageSrc(`${nation}-${id}`)} alt={name} />
      <NameLabel>{name}</NameLabel>
    </Container>
  );
}

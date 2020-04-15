import React from "react";
import { getTierNumber } from "../../../../../../utils/helpers";
import {
  getIconImageSrc,
  getNationImageSrc,
  getTankImageSrc,
} from "../../../../../../utils/path";
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
          <TierIcon
            className="tier-icon-image"
            src={getIconImageSrc("tier")}
            alt="tier"
          />
          <TierLabel>{getTierNumber(tier)}</TierLabel>
        </Tier>
        {premium && <PremiumIcon src={getIconImageSrc("star")} alt="premium" />}
      </CardHeader>
      <TankImage
        className="model-image"
        src={getTankImageSrc(`${nation}-${id}`)}
        alt={name}
      />
      <NameLabel>{name}</NameLabel>
    </Container>
  );
}

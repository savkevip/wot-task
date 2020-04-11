import React, { useContext } from "react";
import Filters from "./components/Filters";
import Header from "../../common/Header";
import "react-awesome-slider/dist/styles.css";
import { StoreContext } from "../../store";
import { getNationImageSrc, getTankImageSrc, getTierNumber, getIconImageSrc } from "../../utils/helpers";
import {
    Container,
    CardWrapper,
    Card,
    NameLabel,
    TankImage,
    CardHeader,
    Tier,
    TierIcon,
    TierLabel,
    PremiumIcon
} from "./style";

export default function TanksWidget() {
    const { tanks, setTanks, getTanks } = useContext(StoreContext);

    return (
        <Container>
            <Header />
            <Filters tanks={tanks} setTanks={setTanks} getTanks={getTanks} />
            <CardWrapper>
                {tanks.map(({ id, nation, name, tier, premium }) => (
                    <Card key={id} url={getNationImageSrc(nation)}>
                        <CardHeader>
                            <Tier>
                                <TierIcon src={getIconImageSrc("tier")} alt="tier" />
                                <TierLabel>{getTierNumber(tier)}</TierLabel>
                            </Tier>
                            {premium && <PremiumIcon src={getIconImageSrc("star")} alt="premium" />}
                        </CardHeader>
                        <TankImage src={getTankImageSrc(`${nation}-${id}`)} alt={name} />
                        <NameLabel>{name}</NameLabel>
                    </Card>
                ))}
            </CardWrapper>
        </Container>
    )
}

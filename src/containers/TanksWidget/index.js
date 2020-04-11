import React, { useContext, useState } from "react";
import Filters from "./components/Filters";
import Header from "../../common/Header";
import "react-awesome-slider/dist/styles.css";
import Details from "./components/Details";
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
    const [selected, setSelected] = useState("");

    const handleSelect = id => {
        if (id === selected) return setSelected("");
        return setSelected(id);
    };

    const tank = tanks.find(t => t.id === selected);
    return (
        <Container>
            <Header />
            <Filters tanks={tanks} setTanks={setTanks} getTanks={getTanks} />
            <Details tank={tank} setSelected={setSelected} />
            <CardWrapper>
                {tanks.map(({ id, nation, name, tier, premium }) => (
                    <Card
                        key={id}
                        selected={id === selected}
                        url={getNationImageSrc(nation)}
                        onClick={() => handleSelect(id)}
                    >
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

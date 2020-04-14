import { size, map } from "lodash/fp";
import React, { useContext, useState } from "react";
import Filters from "./components/Filters";
import Slider from "./components/Slider";
import Header from "../../common/Header";
import { StoreContext } from "../../store";
import { getFilteredTanks } from "../../utils/helpers";
import premiums from "../../utils/premiums";
import { Container, Title } from "./style";

export default function TanksWidget() {
    const { tanks } = useContext(StoreContext);
    const [filters, setFilters] = useState({});
    const [nation, setNation] = useState([]);
    const [tier, setTier] = useState({});
    const [premium, setPremium] = useState(premiums[2]);

    const filterActions = {
        nation: setNation,
        tier: setTier,
        premium: setPremium
    };

    const handleSelectFilter = (type, selected) => {
        filterActions[type](selected);
        setFilters({ ...filters, [type]: selected });
    }

    const handleClearFilter = filter => {
        handleSelectFilter(filter.type, {});
        const newFilters = { ...filters };
        delete newFilters[filter.type];
        setFilters(newFilters);
    };

    const filteredTanks = size(filters) ? getFilteredTanks(tanks, filters) : tanks;
    console.log(filters);

    return (
        <Container>
            <Header />
            <Title>WOT Garage</Title>
            <Filters
                nation={nation}
                tier={tier}
                premium={premium}
                filters={[]}
                onSelectFilter={handleSelectFilter}
                onClearFilter={handleClearFilter}
            />
            <Slider tanks={filteredTanks} />
        </Container>
    )
}

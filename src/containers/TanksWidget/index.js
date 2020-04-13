import { filter, find, size, map } from "lodash/fp";
import React, { useContext, useState } from "react";
import Filters from "./components/Filters";
import Slider from "./components/Slider";
import Header from "../../common/Header";
import { StoreContext } from "../../store";
import { getFilters } from "../../utils/helpers";
import { Container, Title } from "./style";

export default function TanksWidget() {
    const { tanks } = useContext(StoreContext);
    const [filters, setFilters] = useState({});
    const [nation, setNation] = useState("");
    const [tier, setTier] = useState("");
    const [premium, setPremium] = useState("");

    const filterActions = {
        nation: setNation,
        tier: setTier,
        premium: setPremium
    };

    const handleSelectFilter = (type, selected) => {
        filterActions[type](selected);
        setFilters({ ...filters, [type]: selected.value });
    }

    const handleClearFilter = filter => {
        handleSelectFilter(filter.type, {});
        const newFilters = { ...filters };
        delete newFilters[filter.type];
        setFilters(newFilters);
    };

    const activeFilters = getFilters(filters);
    const filteredTanks = size(filters) ? filter(activeFilters)(tanks) : tanks;
    const labelFilters = map(f => ({ type: f[0], value: f[1] }))(Object.entries(filters));

    return (
        <Container>
            <Header />
            <Filters
                nation={nation}
                tier={tier}
                premium={premium}
                filters={labelFilters}
                onSelectFilter={handleSelectFilter}
                onClearFilter={handleClearFilter}
            />
            <Title>Garage</Title>
            <Slider tanks={filteredTanks} />
        </Container>
    )
}

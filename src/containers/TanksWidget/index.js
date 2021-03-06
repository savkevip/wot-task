import { size } from "lodash/fp";
import React, { useContext, useState } from "react";
import Filters from "./components/Filters";
import Slider from "./components/Slider";
import Header from "../../common/Header";
import { StoreContext } from "../../store";
import {
  getFilteredTanks,
  getFilterLabels,
  clearFilter,
  clearedNewFilter,
} from "../../utils/helpers";
import { Container, Title } from "./style";

export default function TanksWidget() {
  const { tanks } = useContext(StoreContext);
  const [filters, setFilters] = useState({});
  const [nation, setNation] = useState([]);
  const [tier, setTier] = useState({});
  const [premium, setPremium] = useState();

  const filterActions = {
    nation: setNation,
    tier: setTier,
    premium: setPremium,
  };

  const handleSelectFilter = (type, selected) => {
    filterActions[type](selected);
    setFilters({ ...filters, [type]: selected });
  };

  const handleClearFilter = (currentFilter) => {
    const newFilters = clearFilter(currentFilter, filters);
    const newSelected = clearedNewFilter(currentFilter, nation);
    setFilters(newFilters);
    filterActions[currentFilter.type](newSelected);
  };

  const filteredTanks = size(filters)
    ? getFilteredTanks(tanks, filters)
    : tanks;
  const filterLabels = getFilterLabels(filters);

  return (
    <Container>
      <Header />
      <Title>WOT Garage</Title>
      <Filters
        nation={nation}
        tier={tier}
        premium={premium}
        filters={filterLabels}
        onSelectFilter={handleSelectFilter}
        onClearFilter={handleClearFilter}
      />
      <Slider tanks={filteredTanks} />
    </Container>
  );
}

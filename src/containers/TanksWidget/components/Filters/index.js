import React, { useState } from "react";
import Select from "../../../../common/ui/Select";
import nations from "../../../../utils/nations";
import romanNumbers from "../../../../utils/romanNumbers";
import styled from "styled-components";
import colors from "../../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 15px;
`;

const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const FiltersWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  height: 28px;
`;

const Filter = styled.span`
  margin-right: 15px;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 10px;
  background: ${colors.button};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Filters({ tanks, setTanks, getTanks }) {
    const [filters, setFilters] = useState([]);
    const [nation, setNation] = useState("");
    const [tier, setTier] = useState("");
    const [premium, setPremium] = useState("");

    const filterActions = {
        nation: setNation,
        tier: setTier,
        premium: setPremium
    };

    const handleSelect = (type, selected) => {
        filterActions[type](selected);
        setFilters([ ...filters, { type, value: selected } ]);
    }

    const clearFilter = filter => {
        handleSelect(filter.type, "");
        const newFilters = filters.filter(f => f.value !== filter.value);
        setFilters(newFilters);
    };

    return (
        <Container>
            <ActionWrapper>
                <Select
                    label="select nation"
                    selected={nation}
                    onSelect={handleSelect}
                    items={nations}
                    type="nation"
                />
                <Select
                    label="select tier"
                    selected={tier}
                    onSelect={handleSelect}
                    items={romanNumbers}
                    type="tier"
                />
                <Select
                    label="select premium"
                    selected={premium}
                    onSelect={handleSelect}
                    items={["yes", "no"]}
                    type="premium"
                />
            </ActionWrapper>
            <FiltersWrapper>
                {filters.map((filter, index) => <Filter key={`${filter.value}${index}`} onClick={() => clearFilter(filter)}>{`${filter.value} x`}</Filter>)}
            </FiltersWrapper>
        </Container>
    )
}

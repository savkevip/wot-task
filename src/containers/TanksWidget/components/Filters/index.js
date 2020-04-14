import React from "react";
import Select from "../../../../common/ui/Select";
import nations from "../../../../utils/nations";
import tiers from "../../../../utils/tiers";
import premiums from "../../../../utils/premiums";
import { ActionWrapper, Container, Filter, FiltersWrapper } from "./style";

export default function Filters({
  nation,
  tier,
  premium,
  filters,
  onSelectFilter,
  onClearFilter,
}) {
  return (
    <Container>
      <ActionWrapper>
        <Select
          label="select nation"
          selected={nation}
          onSelect={onSelectFilter}
          items={nations}
          type="nation"
          multi
        />
        <Select
          label="select tier"
          selected={tier}
          onSelect={onSelectFilter}
          items={tiers}
          type="tier"
        />
        <Select
          label="is premium"
          selected={premium}
          onSelect={onSelectFilter}
          items={premiums}
          type="premium"
        />
      </ActionWrapper>
      <FiltersWrapper>
        {filters.map((filter, index) => (
          <Filter
            key={`${filter.value}${index}`}
            onClick={() => onClearFilter(filter)}
          >{`${filter.label} x`}</Filter>
        ))}
      </FiltersWrapper>
    </Container>
  );
}

import {
  isUndefined,
  filter,
  compose,
  includes,
  map,
  size,
  forEach,
  omit,
} from "lodash/fp";
import tiers from "./tiers";

export function getTierNumber(tier) {
  return tiers[tier - 1].label;
}

function filterByNation(tanks, nation) {
  if (isUndefined(nation)) return tanks;
  return size(nation)
    ? filter((t) => includes(t.nation, nation))(tanks)
    : tanks;
}

function filterByTier(tanks, tier) {
  if (isUndefined(tier)) return tanks;
  return filter((t) => t.tier >= tier)(tanks);
}

function filterByPremium(tanks, premium) {
  if (isUndefined(premium)) return tanks;
  return filter({ premium })(tanks);
}

function mapFilterValues(filters) {
  const f = {};
  if (!isUndefined(filters["nation"])) {
    f["nation"] = map((f) => f.value)(filters["nation"]);
  }
  if (!isUndefined(filters["tier"])) {
    f["tier"] = filters["tier"].value;
  }
  if (!isUndefined(filters["premium"])) {
    f["premium"] = filters["premium"].value;
  }
  return f;
}

export function getFilteredTanks(tanks, filters) {
  const f = mapFilterValues(filters);
  return compose(
    (tanks) => filterByPremium(tanks, f.premium),
    (tanks) => filterByTier(tanks, f.tier),
    (tanks) => filterByNation(tanks, f.nation)
  )(tanks);
}

export function getFilterLabels(filters) {
  const f = [];
  if (!isUndefined(filters.nation)) {
    forEach((n) =>
      f.push({
        ...n,
        type: "nation",
      })
    )(filters.nation);
  }
  if (!isUndefined(filters.tier)) {
    f.push({
      ...filters.tier,
      type: "tier",
    });
  }
  if (!isUndefined(filters.premium)) {
    f.push({
      ...filters.premium,
      type: "premium",
    });
  }
  return f;
}

export function clearFilter(currentFilter, filters) {
  let newFilters = { ...filters };
  if (currentFilter.type === "nation") {
    newFilters.nation = filter((f) => f.value !== currentFilter.value)(
      filters.nation
    );
    if (!size(newFilters.nation)) {
      newFilters = omit(currentFilter.type, newFilters);
    }
  } else {
    newFilters = omit(currentFilter.type, newFilters);
  }
  return newFilters;
}

export function clearedNewFilter(currentFilter, nation) {
  let value = {};
  if (currentFilter.type === "nation") {
    value = filter((n) => n.value !== currentFilter.value)(nation);
  }
  return value;
}

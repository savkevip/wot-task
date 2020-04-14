import { isUndefined, filter, compose, includes, map, size } from "lodash/fp";
import tiers from "./tiers";
const pathToImages = require.context('../assets/images/');

export function getNationImageSrc(nation) {
    return pathToImages(`./nations/${nation}.png`);
}

export function getTankImageSrc(model) {
    return pathToImages(`./tanks/${model}.png`);
}

export function getIconImageSrc(name) {
    return pathToImages(`./icons/${name}.svg`);
}

export function getTierNumber(tier) {
    return tiers[tier - 1].label;
}

function filterByNation(tanks, nation) {
    if (isUndefined(nation)) return tanks;
    return size(nation) ? filter(t => includes(t.nation, nation))(tanks) : tanks;
}

function filterByTier(tanks, tier) {
    if (isUndefined(tier)) return tanks;
    return filter(t => t.tier >= tier)(tanks);
}

function filterByPremium(tanks, premium) {
    if (isUndefined(premium)) return tanks;
    return filter({ premium })(tanks);
}

function getFilters(filters) {
    const f = {};
    if (!isUndefined(filters["nation"])) {
        f["nation"] = map(f => f.value)(filters["nation"]);
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
    const f = getFilters(filters);
    return  compose(
        tanks => filterByPremium(tanks, f.premium),
        tanks => filterByTier(tanks, f.tier),
        tanks => filterByNation(tanks, f.nation)
    )(tanks);
}

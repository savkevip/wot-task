import { isUndefined } from "lodash/fp";
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
    return tiers[tier -1].label;
}

export function getFilters(filters) {
    const f = {};
    if (!isUndefined(filters["nation"])) {
        f["nation"] = filters["nation"];
    }
    if (!isUndefined(filters["tier"])) {
        f["tier"] = filters["tier"];
    }
    if (!isUndefined(filters["premium"])) {
        f["premium"] = filters["premium"];
    }
    return f;
}

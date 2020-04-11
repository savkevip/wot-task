import romanNumbers from "./romanNumbers";
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
    return romanNumbers[tier -1];
}

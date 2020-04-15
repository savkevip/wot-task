const pathToImages = require.context("../assets/images/");

export function getNationImageSrc(nation) {
  return pathToImages(`./nations/${nation}.png`);
}

export function getTankImageSrc(model) {
  return pathToImages(`./tanks/${model}.png`);
}

export function getIconImageSrc(name) {
  return pathToImages(`./icons/${name}.svg`);
}

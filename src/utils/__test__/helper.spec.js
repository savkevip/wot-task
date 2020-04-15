import {
  clearFilter,
  getFilterLabels,
  clearedNewFilter,
  getTierNumber,
  getFilteredTanks,
} from "../helpers";
import { tanks } from "../../data/tanks.json";

const filters = {
  nation: [
    { label: "USA", value: "usa" },
    { label: "Czech", value: "czech" },
  ],
  tier: { label: "III", value: 3 },
  premium: { label: "Yes", value: true },
};

describe("clearFilter", function () {
  it("should clear premium filter", function () {
    const currentFilter = { label: "Yes", value: true, type: "premium" };
    const response = clearFilter(currentFilter, filters);
    expect({
      nation: [
        { label: "USA", value: "usa" },
        { label: "Czech", value: "czech" },
      ],
      tier: { label: "III", value: 3 },
    }).toMatchObject(response);
  });

  it("should return filter labels", function () {
    const response = getFilterLabels(filters);
    expect([
      { label: "USA", value: "usa", type: "nation" },
      { label: "Czech", value: "czech", type: "nation" },
      { label: "III", value: 3, type: "tier" },
      { label: "Yes", value: true, type: "premium" },
    ]).toEqual(response);
  });

  it("should map filter after clear", function () {
    const currentNation = { label: "USA", value: "usa", type: "nation" };
    const response = clearedNewFilter(currentNation, filters.nation);
    expect([{ label: "Czech", value: "czech" }]).toMatchObject(response);
  });

  it("should filter tanks", function () {
    const currentFilters = {
      nation: [
        { label: "USA", value: "usa" },
        { label: "USSR", value: "ussr" },
      ],
      tier: { label: "VIII", value: 8 },
      premium: { label: "Yes", value: true },
    };
    const response = getFilteredTanks(tanks, currentFilters);
    expect(2).toEqual(response.length);
  });
});

describe("getTierNumber", function () {
  it("should return roman number", function () {
    const response = getTierNumber(3);
    expect("III").toEqual(response);
  });
});

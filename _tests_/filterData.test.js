import { describe, it, expect } from "vitest";

const mockData = [
  {
    name: "Testland",
    people: [
      {
        name: "Alice",
        animals: [{ name: "Tiger" }, { name: "Panther" }],
      },
      {
        name: "Bob",
        animals: [{ name: "Canary" }],
      },
    ],
  },
];

describe("filterData", () => {
  it("filters animals by pattern", () => {
    const result = filterData(mockData, "ry");
    expect(result).toEqual([
      {
        name: "Testland",
        people: [
          {
            name: "Bob",
            animals: [{ name: "Canary" }],
          },
        ],
      },
    ]);
  });

  it("returns empty if no match", () => {
    const result = filterData(mockData, "aaa");
    expect(result).toEqual([]);
  });
});

describe("CountData", () => {
  it("counts people and animals correctly", () => {
    const result = countData(mockData);
    expect(result).toEqual([
      {
        name: "Testland [2]",
        people: [
          {
            name: "Alice [2]",
            animals: [{ name: "Tiger" }, { name: "Panther" }],
          },
          {
            name: "Bob [1]",
            animals: [{ name: "Canary" }],
          },
        ],
      },
    ]);
  });
});

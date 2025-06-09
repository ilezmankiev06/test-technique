import { describe, it, expect } from "vitest";
import { countData } from "./countData.js";

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

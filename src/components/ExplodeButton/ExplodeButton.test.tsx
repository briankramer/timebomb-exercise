import { render, screen } from "@testing-library/react";
import { ExplodeButton } from "./ExplodeButton"

describe("ExplodeButton", () => {
  it("displays 'Explode' text on initialization", () => {
    render(
      <ExplodeButton
        isCountingDownList={[null, null, null, null]}
        setIsCountingDownList={() => {}}
      />
    );

    const explodeText = screen.getByText("Explode");
    expect(explodeText).toBeDefined();
  });

  it("displays 'Waiting to explode...' text when bombs are counting down", () => {
    render(
      <ExplodeButton
        isCountingDownList={[false, true, false, false]}
        setIsCountingDownList={() => {}}
      />
    );

    const explodeText = screen.getByText("Waiting to explode...");
    expect(explodeText).toBeDefined();
  });

  it("displays 'All bombs exploded' text when bombs are all exploded", () => {
    render(
      <ExplodeButton
        isCountingDownList={[false, false, false, false]}
        setIsCountingDownList={() => {}}
      />
    );

    const explodeText = screen.getByText("All bombs exploded");
    expect(explodeText).toBeDefined();
  });

  it("displays explode button in red background color when all finished", () => {
    render(
      <ExplodeButton
        isCountingDownList={[false, false, false, false]}
        setIsCountingDownList={() => {}}
      />
    );
    const explodedClass = document.querySelector(".explode-button:disabled");
    expect(explodedClass).toBeTruthy();
  })

  it("displays explode button in lavender background color when initialized", () => {
    render(
      <ExplodeButton
        isCountingDownList={[null, false, false, false]}
        setIsCountingDownList={() => {}}
      />
    );
    const explodedClass = document.querySelector(".explode-button:disabled");
    expect(explodedClass).toBeFalsy();
  });

  it("displays explode button in lavender background color when countdown is running", () => {
    render(
      <ExplodeButton
        isCountingDownList={[true, false, false, false]}
        setIsCountingDownList={() => {}}
      />
    );
    const explodedClass = document.querySelector(".explode-button:disabled");
    expect(explodedClass).toBeFalsy();
  })
});

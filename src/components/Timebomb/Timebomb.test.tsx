import { render, screen } from "@testing-library/react";
import { Timebomb } from "./Timebomb";
import { describe, it, vi } from 'vitest';

describe("Timebomb", () => {
  it("displays the bomb name", () => {
    render(
      <Timebomb
        name="Bomb Z"
        isCountingDownList={[false]}
        index={0}
        secondsToCountdown={0}
        setIsCountingDown={() => {}}
      />
    );

    const bombName = screen.getByText("Bomb Z");
    expect(bombName).toBeDefined();
  });

  it("displays the seconds until explosion", () => {
    render(
      <Timebomb
        secondsToCountdown={15}
        isCountingDownList={[false]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={() => {}}
      />
    );
    const secondsToExplode = screen.getByText("15 seconds");
    expect(secondsToExplode).toBeDefined();
  });

  it("displays 'second' wording when count is one", () => {
    render(
      <Timebomb
        secondsToCountdown={1}
        isCountingDownList={[false]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={() => {}}
      />
    );
    const secondsToExplode = screen.getByText("1 second");
    expect(secondsToExplode).toBeDefined();
  });

  it("displays 'Exploded' when count is 0", () => {
    render(
      <Timebomb
        secondsToCountdown={0}
        isCountingDownList={[false]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={() => {}}
      />
    );
    const explodedText = screen.getByText("Exploded");
    expect(explodedText).toBeDefined();
  });

  it("displays 'Exploded' in red text", () => {
    render(
      <Timebomb
        secondsToCountdown={0}
        isCountingDownList={[false]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={() => {}}
      />
    );
    const explodedClass = document.querySelector(".exploded");
    expect(explodedClass).toBeTruthy();
  });

  it("calls setIsCountingDown with false when finished", () => {
    const setIsCountingDown = vi.fn();
    render(
      <Timebomb
        secondsToCountdown={1}
        isCountingDownList={[true]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={setIsCountingDown}
      />
    );
    
    setTimeout(() => {
      expect(setIsCountingDown).toHaveBeenCalledWith(false);
    }, 1000);
  });

  it("calls setIsCountingDown with true when running", () => {
    const setIsCountingDown = vi.fn();
    render(
      <Timebomb
        secondsToCountdown={5}
        isCountingDownList={[true]}
        index={0}
        name="Bomb Z"
        setIsCountingDown={setIsCountingDown}
      />
    );
    
    setTimeout(() => {
      expect(setIsCountingDown).toHaveBeenCalledWith(true);
    }, 1000);
  });
});

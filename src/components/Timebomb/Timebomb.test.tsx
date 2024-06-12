import { render, screen } from "@testing-library/react";
import { Timebomb, getRandomIntBetween10And20 } from "./Timebomb"

describe("Timebomb", () => {
  test('getRandomIntBetween10And20', () => {
    const randomInt = getRandomIntBetween10And20();
    expect(randomInt).toBeGreaterThanOrEqual(10);
    expect(randomInt).toBeLessThanOrEqual(20);
  });

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
    expect(bombName).toBeInTheDocument();
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
    expect(secondsToExplode).toBeInTheDocument();
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
    expect(secondsToExplode).toBeInTheDocument();
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
    expect(explodedText).toBeInTheDocument();
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
  })
});

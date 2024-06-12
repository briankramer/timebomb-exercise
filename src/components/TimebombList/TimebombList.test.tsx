import { render, screen } from "@testing-library/react";
import { TimebombList } from "./TimebombList"

describe("TimebombList", () => {  
    it("displays four bombs", () => {
        render(
          <TimebombList
            isCountingDown={[false, false, false, false]}
            setIsCountingDown={() => {}}
          />
        );
        const bombD = screen.getByText("Bomb D");
        expect(bombD).toBeInTheDocument();
      });
});

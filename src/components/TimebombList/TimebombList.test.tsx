import { render, screen } from "@testing-library/react";
import { TimebombList } from "./TimebombList"

describe("TimebombList", () => {  
    it("displays four bombs", () => {
        render(
          <TimebombList
            isCountingDownList={[false, false, false, false]}
            setIsCountingDownList={() => {}}
          />
        );
        const bombD = screen.getByText("Bomb D");
        expect(bombD).toBeInTheDocument();
      });
});

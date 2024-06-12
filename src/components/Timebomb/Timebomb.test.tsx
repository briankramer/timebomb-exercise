import { render, screen } from "@testing-library/react";
import { createContext } from "react";
import { ContextProps, Context } from "../../../Context";
import { FooterInfo } from "../FooterInfo";

type MockContextProps = Partial<ContextProps>;
const MockContext = createContext<MockContextProps>({});

describe("Timebomb", () => {
  it("displays the bomb name", () => {
    // jest.mock("../../../Context", () => {
    //   // const {createContext} = require('react');
    //   const MainContextMock = createContext({} as any);
    //   return { Context: MainContextMock };
    render(
      <MockContext.Provider value={{ footerInfo: "CopyRight 2021" }}>
        <Timebomb name="Bomb Z" />
      </MockContext.Provider>
    );
    // });

    // screen.debug();
    expect(screen.toHaveTextContent("Bomb Z"));
  });
});

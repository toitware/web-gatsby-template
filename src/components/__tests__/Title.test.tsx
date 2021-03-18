import { render, screen } from "@testing-library/react";
import React from "react";
import Title from "../Title";

describe("Title", () => {
  it("renders correctly", () => {
    const result = render(<Title>title content</Title>);

    expect(result.container.firstChild).toMatchSnapshot();

    expect(screen.getByText("title content")).toBeInstanceOf(HTMLHeadingElement);
  });
});

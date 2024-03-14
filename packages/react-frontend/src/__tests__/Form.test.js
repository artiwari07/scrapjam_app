import React from "react";
import "@testing-library/jest-dom/extend-expect";

import Form from "../Form";
import { render, fireEvent } from "@testing-library/react";

describe("Form component", () => {
  it("Renders + Button", () => {
    const { getByText } = render(<Form />);
    const addButton = getByText("+");
    expect(addButton).toBeInTheDocument();
  });

  it("Renders Title, Date, Submit when + button is clicked", () => {
    const { getByText, queryByText } = render(<Form />);

    expect(queryByText("Entry Title")).toBeNull();
    expect(queryByText("Date")).toBeNull();
    expect(queryByText("Submit")).toBeNull();

    fireEvent.click(getByText("+"));

    expect(getByText("Entry Title")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });
});

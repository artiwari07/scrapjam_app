import React from "react";
import "@testing-library/jest-dom/extend-expect";

import Form from "../Form";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Form component", () => {
  it("Renders + Button", () => {
    render(<Form />);
    const addButton = screen.getByText("+");
    expect(addButton).toBeInTheDocument();
  });

  it("Renders Title, Date, Submit when + button is clicked", () => {
    render(<Form />);

    expect(screen.queryByText("Entry Title")).toBeNull();
    expect(screen.queryByText("Date")).toBeNull();
    expect(screen.queryByText("Submit")).toBeNull();

    fireEvent.click(screen.getByText("+"));

    expect(screen.getByText("Entry Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});

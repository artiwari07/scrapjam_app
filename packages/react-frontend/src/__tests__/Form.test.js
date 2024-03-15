import React from "react";
import "@testing-library/jest-dom/extend-expect";

import Form from "../Form";
import { render, fireEvent, screen } from "@testing-library/react";

describe("VIEW", () => {
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

describe("INPUT", () => {
  it("UPDATE NAME AND DATE", () => {
    render(<Form />);
    fireEvent.click(screen.getByText("+"));

    expect(screen.getByText("Entry Title")).toBeInTheDocument();

    const nameInput = screen.getByLabelText("Entry Title");
    fireEvent.change(nameInput, { target: { value: "New Title" } });
    expect(nameInput.value).toBe("New Title");

    expect(screen.getByText("Date")).toBeInTheDocument();

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "2024-03-15" } });
    expect(dateInput.value).toBe("2024-03-15");
  });
});

describe("SUBMIT", () => {
  it("CHECKS SUBMIT", () => {
    const handleSubmitMock = jest.fn();

    render(<Form handleSubmit={handleSubmitMock} />);

    fireEvent.click(screen.getByText("+"));

    // Enter values into the input fields
    const nameInput = screen.getByLabelText("Entry Title");
    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(nameInput, { target: { value: "Morro Bay Adventures" } });
    fireEvent.change(dateInput, { target: { value: "3/15/24" } });

    // Click the submit button
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Check if handleSubmit is called with the correct entry object
    expect(handleSubmitMock).toHaveBeenCalledWith({
      name: "Morro Bay Adventures",
      date: "3/15/24",
    });
  });
});

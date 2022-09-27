import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import selectEvent from "react-select-event";

import { render, fireEvent, screen } from "@testing-library/react";
import { mockFetchCityNames, mockGetWeatherByDate } from "api/mocks";
import axios from "axios";
import reducers from "reducers";
import { storeData } from "reducers/calendar/mocks";
import getStore from "store/getStore";
import "@testing-library/jest-dom";

import Calendar from "./Calendar";

jest.useFakeTimers().setSystemTime(new Date("2022-08-27"));
jest.mock("axios");

describe("Calendar component", () => {
  test("should render all days of the week", () => {
    render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    expect(screen.getByRole("table")).toHaveTextContent("Sunday");
    expect(screen.getByRole("table")).toHaveTextContent("Monday");
    expect(screen.getByRole("table")).toHaveTextContent("Tuesday");
    expect(screen.getByRole("table")).toHaveTextContent("Wednesday");
    expect(screen.getByRole("table")).toHaveTextContent("Thursday");
    expect(screen.getByRole("table")).toHaveTextContent("Friday");
    expect(screen.getByRole("table")).toHaveTextContent("Saturday");
  });

  test("should display the current month data", () => {
    render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    expect(screen.queryByText("September of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("cell-0-0")).toHaveTextContent("28"); //first calendar day
    expect(screen.getByTestId("cell-4-6")).toHaveTextContent("1"); //last calendar day
  });

  test("should go to the previous month when clicking on <", () => {
    render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    expect(screen.queryByText("September of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("cell-0-0")).toHaveTextContent("28");
    expect(screen.getByTestId("cell-4-6")).toHaveTextContent("1");

    fireEvent.click(screen.getByAltText("previous month"));
    expect(screen.queryByText("September of 2022")).not.toBeInTheDocument();
    expect(screen.queryByText("August of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("cell-0-0")).toHaveTextContent("31");
    expect(screen.getByTestId("cell-4-6")).toHaveTextContent("3");
  });

  test("should go to the next month when clicking on >", () => {
    render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    expect(screen.queryByText("September of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("cell-0-0")).toHaveTextContent("28");
    expect(screen.getByTestId("cell-4-6")).toHaveTextContent("1");

    fireEvent.click(screen.getByAltText("next month"));
    expect(screen.queryByText("September of 2022")).not.toBeInTheDocument();
    expect(screen.queryByText("October of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("cell-0-0")).toHaveTextContent("25");
    expect(screen.getByTestId("cell-4-6")).toHaveTextContent("29");
  });

  test("should highlight the current day", () => {
    render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    expect(screen.queryByText("September of 2022")).toBeInTheDocument();
    expect(screen.getByTestId("today")).toHaveTextContent("27");
  });

  test.skip("should add a reminder", async () => {
    const container = render(
      <ReduxProvider store={getStore(reducers)}>
        <Calendar />
      </ReduxProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Add reminder/i }));

    fireEvent.change(screen.getByTestId("content"), {
      target: { value: "just a reminder" },
    });
    expect(screen.getByTestId("content")).toHaveValue("just a reminder");

    fireEvent.change(screen.getByTestId("date"), {
      target: { value: "09/14/2022 12:00:00" },
    });
    expect(screen.getByTestId("date")).toHaveValue("09/14/2022");
    expect(screen.getByTestId("time")).toHaveValue("12:00 PM");

    // Unfortunately, I was not able to make the React Testing Library work with the React-Select library
    axios.get.mockResolvedValueOnce(mockFetchCityNames);
    fireEvent.change(container.getByRole("combobox"), {
      target: { value: "Lond" },
    });
    await selectEvent.select(container.getByRole("combobox"), "London");

    axios.get.mockResolvedValueOnce(mockGetWeatherByDate);
    expect(screen.getByText("Save")).toBeEnabled();
    fireEvent.click(screen.getByText("Save"));

    expect(screen.findByText("Reminder created successfully!")).toBeTruthy();
    expect(screen.findByText("just a reminder")).toBeTruthy();
  });

  test("should delete a reminder", async () => {
    render(
      <ReduxProvider store={getStore(reducers, storeData)}>
        <Calendar />
      </ReduxProvider>
    );
    const reminder = screen.getByText("just a reminder");
    expect(reminder).toBeTruthy();

    fireEvent.click(reminder);
    expect(screen.getByText("August 31, 12 AM - Athens")).toBeTruthy();
    expect(
      screen.getByText(
        "Rain, Partially cloudy - Partly cloudy throughout the day with late afternoon rain."
      )
    ).toBeTruthy();

    fireEvent.click(screen.getByText("Delete"));
    expect(
      screen.getByText("Are you sure you want to delete it?")
    ).toBeTruthy();

    fireEvent.click(screen.getByText("Yes"));
    expect(screen.queryByText("just a reminder")).toBeFalsy();
  });

  test("should edit a reminder", () => {
    render(
      <ReduxProvider store={getStore(reducers, storeData)}>
        <Calendar />
      </ReduxProvider>
    );
    const reminder = screen.getByText("just a reminder");
    expect(reminder).toBeTruthy();

    fireEvent.click(reminder);
    expect(screen.getByText("August 31, 12 AM - Athens")).toBeTruthy();
    expect(
      screen.getByText(
        "Rain, Partially cloudy - Partly cloudy throughout the day with late afternoon rain."
      )
    ).toBeTruthy();

    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByText("Edit reminder")).toBeTruthy();
    fireEvent.change(screen.getByTestId("content"), {
      target: { value: "just an edited reminder" },
    });
    axios.get.mockResolvedValueOnce(mockGetWeatherByDate);
    expect(screen.getByText("Save")).toBeEnabled();
    fireEvent.click(screen.getByText("Save"));

    expect(screen.findByText("Reminder updated successfully!")).toBeTruthy();
    expect(screen.findByText("just an edited reminder")).toBeTruthy();
  });
});

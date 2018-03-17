import React from "react";
import { LAST_MONTHS } from "../constants/constants";
import { FormControl } from "react-bootstrap";

const MonthSelector = ({
  onSelectMonth,
}) => (
  <FormControl componentClass="select"
                onChange={event => onSelectMonth(event.target.value)}>
    {LAST_MONTHS.map(({ monthName, monthVal }) => (
      <option key={monthVal} value={monthVal}>{monthName}</option>
    ))}
  </FormControl>
);

export default MonthSelector;
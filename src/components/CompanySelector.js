import React from "react";
import { FormControl } from "react-bootstrap";

const CompanySelector = ({
  companies,
  onSelectCompany,
}) => (
  <FormControl componentClass="select" 
               onChange={event => onSelectCompany(event.target.value)}>
    <option value=''>Companies</option>
    {companies.map(({ id, name }) => (
      <option key={id} value={id}>{name}</option>
    ))}
  </FormControl>
);

export default CompanySelector;
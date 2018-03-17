import React from "react";
import { shallow } from "enzyme";
import MostActiveCompaniesContainer from "../containers/MostActiveCompaniesContainer";
import MostActiveCompanies from "../components/MostActiveCompanies";

describe("Most Active Companies", () => {
  const { store } = global;

  test("should list most active companies for month", () => {
    const wrapper = shallow(<MostActiveCompaniesContainer store={store} />);
    const conversationMonth = 2;
    const mostActiveCompanies = [{ id: "2", name: "CompanyB", activity: 1 }];

    wrapper.find(MostActiveCompanies).prop("setMonth")(conversationMonth);
    wrapper.update();

    expect(wrapper.find(MostActiveCompanies).prop("companies")).toEqual(
      mostActiveCompanies
    );
  });
});

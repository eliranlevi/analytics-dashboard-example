import React from "react";
import { shallow } from "enzyme";
import MostActiveUsersContainer from "../containers/MostActiveUsersContainer";
import MostActiveUsers from "../components/MostActiveUsers";
import MostActiveCompaniesContainer from "../containers/MostActiveCompaniesContainer";
import MostActiveCompanies from "../components/MostActiveCompanies";

describe("Most Active Users", () => {
  const { store } = global;

  test("should list most active users for selected company", () => {
    const wrapper = shallow(<MostActiveUsersContainer store={store} />);
    const companiesWrapper = shallow(<MostActiveCompaniesContainer store={store} />);
    const companyId = "2";
    const conversationMonth = 2;
    const mostActiveUsers = [
      {
        numOfConversations: 1,
        user: {
          company_id: companyId,
          email: "Jack@email.com",
          name: {
            first: "Jack",
            last: "Hill",
          },
        },
      },
      {
        numOfConversations: 0,
        user: {
          company_id: "2",
          email: "Dan@email.com",
          name: { 
            first: "Dan", 
            last: "Dunn",
          },
        },
      },
    ];

    companiesWrapper.find(MostActiveCompanies).prop("setMonth")(conversationMonth);
    companiesWrapper.find(MostActiveCompanies).prop("setCompany")(companyId);
    wrapper.update();

    expect(wrapper.find(MostActiveUsers).prop("users")).toEqual(
      mostActiveUsers
    );
  });
});

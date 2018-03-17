import React from "react";
import { shallow } from "enzyme";
import InactiveUsersContainer from "../containers/InactiveUsersContainer";
import CompanySelector from "../components/CompanySelector";
import InactiveUsers from "../components/InactiveUsers";
import { getInactiveCompanyId } from "../selectors/common";

describe("Inactive Users", () => {
  const { store } = global;

  test("should list most inactive users for selected company", () => {
    const wrapper = shallow(<InactiveUsersContainer store={store} />);
    const companyId = "2";
    const inactiveUsersPercent = [
      {
        inactiveUsersPercent: "50.00",
        month: "2",
      },
    ];

    wrapper
      .dive()
      .find(CompanySelector)
      .prop("onSelectCompany")(companyId);

    wrapper.update();

    expect(wrapper.find(InactiveUsers).prop("inactiveUsersPercent")).toEqual(
      inactiveUsersPercent
    );
  });
});

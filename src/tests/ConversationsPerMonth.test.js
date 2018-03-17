import React from "react";
import { shallow } from "enzyme";
import ConversationsPerMonthContainer from "../containers/ConversationsPerMonthContainer";
import ConversationsPerMonth from "../components/ConversationsPerMonth";

describe("Conversations Per Month", () => {
  const { store } = global;

  test("should list conversations per month", () => {
    const wrapper = shallow(<ConversationsPerMonthContainer store={store} />);
    const conversations = [
      {
        month: 2,
        numOfConversations: 1,
      },
    ];

    expect(wrapper.find(ConversationsPerMonth).prop("conversations")).toEqual(conversations);
  });
});

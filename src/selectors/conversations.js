import { createSelector } from "reselect";
import { getConversationsByEmail } from "./common";
import { flatten, orderBy } from "lodash";
import moment from "moment";

export const getConversations = createSelector(
  getConversationsByEmail,
  conversationsByEmail => Object.values(conversationsByEmail),
);

export const getNumOfConversationsPerMonth = createSelector(
  [getConversations],
  conversations => {
    const conversationsByMonth = flatten(conversations).reduce((acc, conversation) => {
        const month = moment(conversation.date).month();

        return {
          ...acc,
          [month]: (acc[month] || 0) + 1,
        };
      }, 
      {}
    );

    ;

    return orderBy(
      Object.keys(conversationsByMonth).map(month => ({
        month: +month,
        numOfConversations: conversationsByMonth[month],
      })),
      'month',
    );
  }
);
import * as actions from '../actions/event';

import { EventActionTypes } from '../types/event/actionTypes';
import { EventCardType, EventType } from '../../types/event';

type EventState = {
  list: Array<EventCardType>;
  eventScreen: EventType | null;
  loading: boolean;
};

const eventDefaultState: EventState = {
  list: [],
  eventScreen: null,
  loading: false
};

const event = (state = eventDefaultState, action: EventActionTypes): EventState => {
  switch (action.type) {
    case actions.LOAD_EVENT_LIST_REQUEST:
      return { ...state, loading: true };

    case actions.LOAD_EVENT_LIST_SUCCESS:
      return { ...state, list: action.data, loading: false };

    case actions.CLEAR_EVENT_LIST:
      return { ...state, list: [] };

    default:
      return { ...state };
  }
};

export default event;

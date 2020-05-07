import * as actions from '../../actions/event';

import { EventCardType, EventType } from '../../../types/event';

export type EventListLoadDataRequestAction = {
  type: typeof actions.LOAD_EVENT_LIST_REQUEST;
};

export type EventListLoadDataErrorAction = {
  type: typeof actions.LOAD_EVENT_LIST_FAILURE;
  error: Error;
};

export type EventListLoadDataSuccessAction = {
  type: typeof actions.LOAD_EVENT_LIST_SUCCESS;
  data: Array<EventCardType>;
};

export type EventListClearData = {
  type: typeof actions.CLEAR_EVENT_LIST;
};

export type EventLoadRequestAction = {
  type: typeof actions.LOAD_EVENT_REQUEST;
  id: number;
};

export type EventLoadErrorAction = {
  type: typeof actions.LOAD_EVENT_FAILURE;
  error: Error;
};

export type EventLoadSuccessAction = {
  type: typeof actions.LOAD_EVENT_SUCCESS;
  data: EventType;
};

export type EventActionTypes =
  | EventListLoadDataRequestAction
  | EventListLoadDataErrorAction
  | EventListLoadDataSuccessAction
  | EventLoadRequestAction
  | EventLoadErrorAction
  | EventLoadSuccessAction
  | EventListClearData;

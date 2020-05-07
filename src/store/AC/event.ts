import * as actions from '../actions/event';

import { EventActionTypes } from '../types/event/actionTypes';
import { EventCardType, EventType } from '../../types/event';

export const loadEventList = (): EventActionTypes => ({
  type: actions.LOAD_EVENT_LIST_REQUEST
});

export const loadEventListErrorAction = (error: Error): EventActionTypes => ({
  type: actions.LOAD_EVENT_LIST_FAILURE,
  error
});

export const loadEventListSuccessAction = (data: Array<EventCardType>): EventActionTypes => ({
  type: actions.LOAD_EVENT_LIST_SUCCESS,
  data
});

export const loadEvent = (id: number): EventActionTypes => ({
  type: actions.LOAD_EVENT_REQUEST,
  id
});

export const loadEventErrorAction = (error: Error): EventActionTypes => ({
  type: actions.LOAD_EVENT_FAILURE,
  error
});

export const loadEventSuccessAction = (data: EventType): EventActionTypes => ({
  type: actions.LOAD_EVENT_SUCCESS,
  data
});

export const clearEventList = (): EventActionTypes => ({
  type: actions.CLEAR_EVENT_LIST
});

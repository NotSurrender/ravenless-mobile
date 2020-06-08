import * as actions from '../actions/club';

import { ClubActionTypes } from '../types/club/actionTypes';
import { ClubCardType } from '../../types/club';

type ClubState = {
  list: Array<ClubCardType>;
  clubScreen: ClubCardType | null;
  loading: boolean;
};

const clubDefaultState: ClubState = {
  list: [],
  clubScreen: null,
  loading: false
};

export const club = (state = clubDefaultState, action: ClubActionTypes) => {
  switch (action.type) {
    case actions.LOAD_CLUB_LIST_REQUEST:
      return { ...state, loading: true };

    case actions.LOAD_CLUB_LIST_SUCCESS:
      return { ...state, list: action.data, loading: false };

    default:
      return state;
  }
};

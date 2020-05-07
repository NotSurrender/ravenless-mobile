import * as actions from '../actions/club';

import { ClubActionTypes } from '../types/club/actionTypes';
import { ClubCardType } from '../../types/club';

export const loadClubList = (): ClubActionTypes => ({
  type: actions.LOAD_CLUB_LIST_REQUEST
});

export const loadClubListErrorAction = (error: Error): ClubActionTypes => ({
  type: actions.LOAD_CLUB_LIST_FAILURE,
  error
});

export const loadClubListSuccessAction = (data: Array<ClubCardType>): ClubActionTypes => ({
  type: actions.LOAD_CLUB_LIST_SUCCESS,
  data
});

import * as actions from '../../actions/club';

import { ClubCardType } from '../../../types/club';

export type ClubListLoadDataRequestAction = {
  type: typeof actions.LOAD_CLUB_LIST_REQUEST;
};

export type ClubListLoadDataErrorAction = {
  type: typeof actions.LOAD_CLUB_LIST_FAILURE;
  error: Error;
};

export type ClubListLoadDataSuccessAction = {
  type: typeof actions.LOAD_CLUB_LIST_SUCCESS;
  data: Array<ClubCardType>;
};

export type ClubActionTypes =
  | ClubListLoadDataRequestAction
  | ClubListLoadDataErrorAction
  | ClubListLoadDataSuccessAction;

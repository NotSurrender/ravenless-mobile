import { delay, put, takeEvery } from 'redux-saga/effects';
import * as AC from '../AC/club';
import { LOAD_CLUB_LIST_REQUEST } from '../actions/club';

import { ClubCardType } from '../../types/club';

const DATA: Array<ClubCardType> = [
  {
    id: 1,
    name: 'Блатной клуб',
    description: 'Клуб криминальных авторитетов'
  },
  {
    id: 2,
    name: 'Починки тудэй',
    description: 'Клуб футбольных фанатов'
  },
  {
    id: 3,
    name: 'Рандомный клуб',
    description: 'Описание рандомного клуба'
  },
  {
    id: 4,
    name: 'Рандомный клуб',
    description: 'Описание рандомного клуба'
  }
];

function* fetchClubList() {
  try {
    yield delay(1000);
    yield put(AC.loadClubListSuccessAction(DATA));
  } catch (error) {
    yield put(AC.loadClubListErrorAction(error));
  }
}

function* ClubSaga() {
  yield takeEvery(LOAD_CLUB_LIST_REQUEST, fetchClubList);
}

export default ClubSaga;

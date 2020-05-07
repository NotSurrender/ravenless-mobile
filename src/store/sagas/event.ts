import { delay, put, takeEvery } from 'redux-saga/effects';
import * as AC from '../AC/event';
import { LOAD_EVENT_LIST_REQUEST, LOAD_EVENT_REQUEST } from '../actions/event';

import { EventCardType } from '../../types/event';

const DATA_LIST: Array<EventCardType> = [
  {
    id: 1,
    name: 'Поход в кино',
    avatar: 'artem',
    organizer: 'Артем',
    place: 'Кинотеатр Космик в Ясенево',
    description: 'Идем на фильм Газгольдер 3, Витя проставляется, а иначе я ему бью ебало',
    clubName: 'Блатной чат',
    membersAmount: 10
  },
  {
    id: 2,
    name: 'Картинг',
    place: 'Где-то за мкадом',
    avatar: 'vitya',
    organizer: 'Витя',
    description: 'Собираемся покатать часик на картинге',
    clubName: 'Блатной чат',
    membersAmount: 10
  },
  {
    id: 3,
    name: 'День рождения Матвея',
    avatar: 'artem',
    organizer: 'Артем',
    place: 'Баня',
    description: 'Будем топить друг друга, будет весело',
    clubName: 'Починки тудэй',
    membersAmount: 12
  }
];

function* fetchEventList() {
  try {
    yield delay(1000);
    yield put(AC.loadEventListSuccessAction(DATA_LIST));
  } catch (error) {
    yield put(AC.loadEventListErrorAction(error));
  }
}

function* fetchEvent() {
  try {
    yield delay(1000);
    yield put(AC.loadEventSuccessAction(DATA));
  } catch (error) {
    yield put(AC.loadEventErrorAction(error));
  }
}

function* eventSaga() {
  yield takeEvery(LOAD_EVENT_LIST_REQUEST, fetchEventList);
  yield takeEvery(LOAD_EVENT_REQUEST, fetchEvent);
}

export default eventSaga;

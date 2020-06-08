import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadEvent } from '../store/AC/event';

import { Preloader } from '../components/Preloader';
import EventComponent from '../components/EventComponent';

import { EventNavProps } from '../navigation/EventParamList';
import { AppState } from '../store';

const EventScreen: FC<EventNavProps<'EventScreen'>> = ({ route }) => {
  const data = useSelector(({ event }: AppState) => event.eventScreen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEvent(route.params.id));
  }, [dispatch]);

  if (!data) {
    return <Preloader />;
  }

  return <EventComponent data={data} />;
};

export default EventScreen;

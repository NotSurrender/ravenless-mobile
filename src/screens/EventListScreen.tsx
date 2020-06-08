import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { loadEventList, clearEventList } from '../store/AC/event';

import { Preloader } from '../components/Preloader';
import EventList from '../components/EventList';

import { AppState } from '../store';

const EventListScreen: FC = () => {
  const loading = useSelector(({ event }: AppState) => event.loading);
  const data = useSelector(({ event }: AppState) => event.list);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(loadEventList());

      return () => {
        dispatch(clearEventList());
      };
    }, [])
  );

  if (loading) {
    return <Preloader />;
  }

  return <EventList data={data} />;
};

export default EventListScreen;

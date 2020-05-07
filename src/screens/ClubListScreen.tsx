import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadClubList } from '../store/AC/club';

import { ActivityIndicator } from 'react-native';

import Center from '../components/Center';
import ClubList from '../components/ClubList';

import { AppState } from '../store';

const ClubListScreen: FC = () => {
  const loading = useSelector((state: AppState) => state.club.loading);
  const data = useSelector((state: AppState) => state.club.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClubList());
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return <ClubList data={data} />;
};

export default ClubListScreen;

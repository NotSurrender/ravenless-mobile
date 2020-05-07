import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import AppActivityIndicator from '../components/AppActivityIndicator';
import Club from '../components/Club';

import { ClubNavProps } from '../navigation/ClubParamList';
import { AppState } from '../store';

const ClubScreen: FC<ClubNavProps<'Club'>> = () => {
  const loading = useSelector((state: AppState) => state.club.loading);
  const data = useSelector((state: AppState) => state.club.clubScreen);

  if (loading) {
    return <AppActivityIndicator />;
  }

  return <Club data={data} />;
};

export default ClubScreen;

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ClubParamList = {
  ClubList: undefined;
  Club: undefined;
};

export type ClubNavProps<T extends keyof ClubParamList> = {
  navigation: StackNavigationProp<ClubParamList, T>;
  route: RouteProp<ClubParamList, T>;
};

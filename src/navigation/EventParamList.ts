import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type EventParamList = {
  CreateEventScreen: undefined;
  EventListScreen: undefined;
  EventScreen: { id: number };
};

export type EventNavProps<T extends keyof EventParamList> = {
  navigation: StackNavigationProp<EventParamList, T>;
  route: RouteProp<EventParamList, T>;
};

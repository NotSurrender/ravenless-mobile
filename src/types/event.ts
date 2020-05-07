export type EventCardType = {
  id: number;
  name: string;
  avatar: string;
  organizer: string;
  place: string;
  description: string;
  membersAmount: number;
  clubName: string;
};

export type EventMember = {
  id: number;
  name: string;
};

export type EventType = EventCardType & {
  address: string;
  members: Array<EventMember>;
};

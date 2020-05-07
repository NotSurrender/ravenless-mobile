import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    height: 224,
    marginTop: 16,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 4,
    shadowColor: 'rgba(186, 186, 186, 0.3)',
    shadowOpacity: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingRight: 20,
    paddingBottom: 4,
    paddingLeft: 16
  },
  chevronIcon: {
    color: '#292929'
  },
  divider: {
    height: 6,
    backgroundColor: 'black',
    opacity: 0.2
  },
  headerTitle: {
    fontSize: 14,
    color: '#292929'
  },
  body: {
    flex: 1,
    padding: 16
  },
  organizerBlock: {
    height: 'auto',
    flexDirection: 'row'
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 100
  },
  organizerData: {
    marginLeft: 12
  },
  organizerName: {
    fontSize: 14,
    fontWeight: '600'
  },
  clubName: {
    fontSize: 12,
    color: '#9b9b9b'
  },
  description: {
    flex: 1,
    justifyContent: 'center'
  },
  d: {}
});

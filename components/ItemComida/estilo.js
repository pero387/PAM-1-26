import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 96,
    height: 96,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  },
  desc: {
    color: '#444'
  }
});

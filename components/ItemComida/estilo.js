import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffaf2',
    borderRadius: 14,
    marginVertical: 6,
    marginHorizontal: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f3dbc1',
  },
  image: {
    width: 82,
    height: 82,
    backgroundColor: '#f6efe8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#3b1f12',
    marginBottom: 3,
  },
  desc: {
    color: '#6b4a3c',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
  },
  preco: {
    color: '#d97706',
    fontWeight: '700',
    fontSize: 13,
  },
});

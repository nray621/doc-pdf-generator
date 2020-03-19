import { StyleSheet } from '@react-pdf/renderer';
import globalStyles from '../globalStyles'

export default StyleSheet.create({
  image: {
    marginVertical: 5,
    width: '100%',
  },
  legalTextContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  legalText: {
    flex: 1,
    fontSize: 8,
    marginLeft: 10,
  },
  legalTextCheckIcon: {
    height: 18,
    width: 18,
  },
  signedAtText: {
    color: '#A1A3A6',
    marginTop: 5,
    marginBottom: 10,
  },
  ...globalStyles,
});

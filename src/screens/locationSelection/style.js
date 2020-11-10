import {StyleSheet} from 'react-native';
import {Colors, Dimens} from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text_choose_car: {
    color: Colors.colorBlue,
    fontWeight: '500',
    fontSize: Dimens.ms12,
    marginTop: Dimens.ms8,
  },
  view_inner_search: {
    padding: Dimens.ms12,
    paddingHorizontal: Dimens.ms20,
    backgroundColor: 'white',
    borderRadius: Dimens.ms30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view_outter_search: {
    position: 'absolute',
    top: Dimens.ms10,
    left: Dimens.ms16,
    right: Dimens.ms16,
  },
  liner_container: {
    width: '100%',
    height: Dimens.ms50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

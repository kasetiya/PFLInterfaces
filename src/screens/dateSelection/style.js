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
  text_select_time: {
    color: Colors.colorBlue,

    fontSize: Dimens.ms16,
    marginTop: Dimens.ms12,
    marginHorizontal: Dimens.ms12,
  },
  view_select_time_container: {
    backgroundColor: Colors.colorWhite,
    marginHorizontal: Dimens.ms16,
    shadowColor: Colors.colorShadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    marginTop: Dimens.ms10,

    padding: Dimens.ms6,
  },
});

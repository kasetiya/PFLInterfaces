import {StyleSheet} from 'react-native';
import {Colors, Dimens} from '../../../config';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    borderRadius: Dimens.ms20,
    marginVertical: Dimens.ms8,
    marginHorizontal: Dimens.ms10,
  },
  text_choose_car: {
    color: Colors.colorBlue,
    fontWeight: '500',
    fontSize: Dimens.ms12,
    marginTop: Dimens.ms8,
  },
  text_title: {
    alignSelf: 'center',
    fontSize: Dimens.ms10,
  },
  text_value: {
    fontSize: Dimens.ms10,
  },
  service_name_container: {
    borderRadius: Dimens.ms20,
    borderColor: Colors.colorBlue,
    borderWidth: Dimens.ms1,
    paddingVertical: Dimens.ms7,
    paddingHorizontal: Dimens.ms10,
  },
  image_selected: {
    width: Dimens.ms8,
    height: Dimens.ms8,
    marginLeft: Dimens.ms8,
    alignSelf: 'center',
  },
});

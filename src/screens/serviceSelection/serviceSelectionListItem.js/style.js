import {StyleSheet} from 'react-native';
import {Colors, Dimens} from '../../../config';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '57%',
    borderRadius: Dimens.ms20,
    marginVertical: Dimens.ms8,
    shadowColor: Colors.colorShadow,
    shadowOffset: {width: Dimens.ms0, height: Dimens.ms1},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    // backgroundColor: Colors.colorWhite,
  },
  text_choose_car: {
    color: Colors.colorBlue,
    fontWeight: '500',
    fontSize: Dimens.ms12,
    marginTop: Dimens.ms8,
  },
  text_title: {
    fontSize: Dimens.ms12,
    color: Colors.colorTextGray,
    fontWeight: '500',
    marginTop: Dimens.ms6,
  },
  text_value: {
    fontSize: Dimens.ms9,
  },
  service_name_container: {
    borderRadius: Dimens.ms20,
    borderColor: Colors.colorBlue,
    borderWidth: Dimens.ms1,
    paddingVertical: Dimens.ms7,
    paddingHorizontal: Dimens.ms16,
  },
  image_selected: {
    width: Dimens.ms9,
    height: Dimens.ms9,
    marginLeft: Dimens.ms8,
    alignSelf: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {Colors, Dimens} from '../../config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text_choose_car: {
    color: Colors.colorBlue,
    fontWeight: '500',
    fontSize: Dimens.ms16,
    marginTop: Dimens.ms24,
    textAlign: 'center',
  },
  text_review: {
    color: Colors.colorTextGray,
    fontWeight: '500',
    fontSize: Dimens.ms13,
    marginTop: Dimens.ms4,
    textAlign: 'center',
  },
  view_detail_container: {
    borderRadius: Dimens.ms10,
    shadowColor: Colors.colorShadow,
    shadowOffset: {width: Dimens.ms0, height: Dimens.ms1},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    backgroundColor: Colors.colorWhite,
    marginHorizontal: Dimens.ms20,
    padding: Dimens.ms16,
    marginTop: Dimens.ms35,
  },
  text_car_title: {
    color: Colors.colorBlue,
    fontSize: Dimens.ms18,
    fontWeight: '700',
  },
  view_seperator: {
    height: Dimens.ms1,
    backgroundColor: Colors.colorBorder,
    marginTop: Dimens.ms16,
  },
  text_title: {
    color: Colors.colorTextGray,
    fontSize: Dimens.ms13,
  },
  text_value: {
    marginTop: Dimens.ms2,
    fontSize: Dimens.ms13,
  },
  view_text: {
    marginTop: Dimens.ms16,
  },
  image_small: {
    width: Dimens.ms10,
    height: Dimens.ms10,

    marginHorizontal: Dimens.ms6,
  },
  view_switch_container: {
    flexDirection: 'row',
    marginHorizontal: Dimens.ms20,
    marginTop: Dimens.ms24,
  },
  text_terms_of_service: {
    flex: 1,
    fontSize: Dimens.ms13,
    color: Colors.colorTextGray,
    marginLeft: Dimens.ms8,
  },
});

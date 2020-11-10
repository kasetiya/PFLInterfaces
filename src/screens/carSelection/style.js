import {StyleSheet} from 'react-native';
import {Colors, Dimens} from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  segement_upper_container: {
    marginTop: Dimens.ms40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  segement_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Dimens.ms30,
    shadowColor: Colors.colorShadow,
    shadowOffset: {width: Dimens.ms0, height: Dimens.ms1},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.ms4,
    backgroundColor: Colors.colorWhite,
  },
  view_segment: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimens.ms6,
  },
  image_segment: {
    width: Dimens.ms20,
    height: Dimens.ms20,
    marginHorizontal: Dimens.ms30,
  },
  text_segment: {
    fontSize: Dimens.ms10,
    color: Colors.colorBlue,
  },
  text_choose_car: {
    color: Colors.colorBlue,
    fontWeight: '500',
    fontSize: Dimens.ms12,
    marginTop: Dimens.ms8,
  },
  text_car_name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: Dimens.ms10,
    color: Colors.colorBlue,
  },
  text_car_nickname: {
    alignSelf: 'center',
    color: Colors.colorTextGray,
    fontSize: Dimens.ms8,
  },
});

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
    fontSize: Dimens.ms12,
    marginTop: Dimens.ms8,
  },
  view_appointment_container: {
    marginTop: Dimens.ms20,
    justifyContent: 'center',
    backgroundColor: Colors.colorTextGray,
    alignSelf: 'center',
    paddingHorizontal: Dimens.ms20,
    paddingVertical: Dimens.ms10,
    borderRadius: Dimens.ms30,
  },
  text_appointments: {
    fontSize: Dimens.ms16,
    color: Colors.colorWhite,
  },
  image_sucess: {
    width: Dimens.ms100,
    height: Dimens.ms100,
  },
  text_booking: {
    marginVertical: Dimens.ms24,
    color: Colors.colorTextGray,
    fontSize: 16,
  },
});

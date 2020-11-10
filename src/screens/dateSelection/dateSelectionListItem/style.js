import {StyleSheet} from 'react-native';
import {Dimens} from '../../../config';

export default StyleSheet.create({
  view_container: {
    flex: 1,
    borderRadius: Dimens.ms20,
    borderWidth: Dimens.ms1,
    marginHorizontal: Dimens.ms10,
    marginVertical: Dimens.ms6,
  },
  text_title: {
    padding: Dimens.ms8,
    paddingVertical: Dimens.ms6,
    textAlign: 'center',
    fontSize: Dimens.ms10,
  },
});

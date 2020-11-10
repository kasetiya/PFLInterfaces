import {View} from 'native-base';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Dimens, Images} from '../config';
import strings from '../lang/strings';

const CustomHeader = ({leftAction}) => {
  return (
    <View
      style={{
        marginTop: Dimens.ms60,
        flexDirection: 'row',
        marginHorizontal: Dimens.ms20,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => leftAction()}>
        <Image
          source={Images.ic_chevron_back}
          style={{width: Dimens.ms22, height: Dimens.ms22}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          fontWeight: 'bold',
          fontSize: Dimens.ms25,
          textAlign: 'center',
        }}>
        {strings.appointment_booking}
      </Text>
      <View style={{width: 20, height: 20}} />
    </View>
  );
};

export default CustomHeader;

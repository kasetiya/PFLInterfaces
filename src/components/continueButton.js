import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, Dimens} from '../config';
import strings from '../lang/strings';

const ContinueButton = ({title, buttonAction, enable}) => {
  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: Dimens.ms8,
          fontSize: 12,
          color: Colors.colorTextGray,
        }}>
        {title} {strings.of_six}
      </Text>
      <TouchableOpacity onPress={() => buttonAction()} disabled={!enable}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: enable ? Colors.colorOrange : Colors.colorTextGray,
            alignSelf: 'center',
            paddingHorizontal: Dimens.ms20,
            paddingVertical: Dimens.ms10,
            borderRadius: Dimens.ms14,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: Colors.colorWhite,
              textTransform: 'uppercase',
            }}>
            {strings.continue}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueButton;

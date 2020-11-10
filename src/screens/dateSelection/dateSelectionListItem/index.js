import {Text} from 'native-base';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../config';
import style from './style';

const DateSelectionListItem = ({row, props, itemIndex, rowAction}) => {
  let colorBorder = Colors.colorBlue;
  let textColor = Colors.colorBlue;
  if (itemIndex > 7) {
    if (row.selected) {
      colorBorder = Colors.colorBlue;
      textColor = Colors.colorWhite;
    } else {
      colorBorder = Colors.colorRed;
      textColor = Colors.colorRed;
    }
  } else {
    if (row.selected) {
      textColor = Colors.colorWhite;
    } else {
      textColor = Colors.colorBlue;
    }
    colorBorder = Colors.colorBlue;
  }
  return (
    <TouchableOpacity onPress={() => rowAction()} style={{flex: 1}}>
      <View
        style={{
          ...style.view_container,
          borderColor: colorBorder,
          backgroundColor: row.selected ? Colors.colorBlue : Colors.colorWhite,
        }}>
        <Text
          style={{
            ...style.text_title,
            color: textColor,
          }}>
          {row.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DateSelectionListItem;

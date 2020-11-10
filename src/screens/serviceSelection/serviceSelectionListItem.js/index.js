import {Text} from 'native-base';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
import {Colors, Dimens, Images} from '../../../config';
import strings from '../../../lang/strings';
import style from './style';

const ServiceSelectionListItem = ({row, props, itemIndex, rowAction}) => {
  return (
    <ShadowView
      style={{
        ...style.container,
        shadowColor: row.showDetail ? Colors.colorShadow : Colors.colorWhite,
        backgroundColor: Colors.colorWhite,
      }}>
      <TouchableOpacity onPress={() => rowAction()}>
        <View
          style={{
            ...style.service_name_container,
            backgroundColor: row.showDetail
              ? Colors.colorBlue
              : Colors.colorWhite,
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                color: row.showDetail ? Colors.colorWhite : Colors.colorBlue,
                alignSelf: 'center',
                fontSize: Dimens.ms10,
              }}>
              {strings.service_name}
            </Text>
            {row.showDetail && (
              <Image
                source={Images.ic_selected}
                style={{...style.image_selected}}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      {row.showDetail && (
        <View
          style={{
            borderRadius: Dimens.ms20,
            padding: Dimens.ms16,
            paddingTop: Dimens.ms6,
          }}>
          <Text style={{...style.text_title}}>
            {strings.total_included_vat}
          </Text>
          <Text style={{...style.text_value}}>{row.includeVat}</Text>
          <Text style={{...style.text_title}}>{strings.mileage}</Text>
          <Text style={{...style.text_value}}>{row.mileage}</Text>
          <Text style={{...style.text_title}}>{strings.description}</Text>
          <Text style={{...style.text_value}}>{row.description}</Text>
        </View>
      )}
    </ShadowView>
  );
};

export default ServiceSelectionListItem;

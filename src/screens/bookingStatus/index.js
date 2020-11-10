import {Container, Root} from 'native-base';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Colors, Images} from '../../config';
import strings from '../../lang/strings';
import style from './style';

class BookingStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Root>
        <Container style={{backgroundColor: Colors.colorBackground}}>
          <View style={{...style.container}}>
            <Image
              source={Images.ic_booking_success}
              style={{...style.image_sucess}}
            />
            <Text style={{...style.text_booking}}>
              {strings.booking_successful}
            </Text>
            <View style={{...style.view_appointment_container}}>
              <Text style={{...style.text_appointments}}>
                {strings.see_all_appointments}
              </Text>
            </View>
          </View>
        </Container>
      </Root>
    );
  }
}

export default BookingStatus;

import {Container, Root} from 'native-base';
import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
import {Switch} from 'react-native-switch';
import CustomHeader from '../../components/customHeader';
import {Colors, Dimens, Images} from '../../config';
import strings from '../../lang/strings';
import style from './style';

class AppointmentSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccepted: false,
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  renderProgressView() {
    return (
      <View
        style={{
          marginHorizontal: Dimens.ms60,
          marginTop: Dimens.ms30,
        }}>
        <Image
          source={Images.ic_progress_6}
          style={{
            height: Dimens.ms10,
            width: '100%',
          }}
          resizeMode="contain"
        />
        <Text style={{...style.text_choose_car}}>
          {strings.car_service_appointment_summary}
        </Text>
        <Text style={{...style.text_review}}>
          {strings.review_and_confirm_your_appointment}
        </Text>
      </View>
    );
  }

  renderDetailView() {
    return (
      <ScrollView>
        <ShadowView style={{...style.view_detail_container}}>
          <Text style={{...style.text_car_title}}>Mazda model car</Text>
          <View style={{...style.view_seperator}} />
          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.location}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...style.text_value}}>Saudi Arabia</Text>
              <Image
                source={Images.ic_location}
                style={{...style.image_small}}
                resizeMode="contain"
              />
              <Text style={{...style.text_value, color: Colors.colorBlue}}>
                {strings.go_to_service_center}
              </Text>
            </View>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.service_type}</Text>
            <Text style={{...style.text_value}}>Lorem Ipsum</Text>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>
              {strings.total_included_vat}
            </Text>
            <Text style={{...style.text_value}}>2000 SR</Text>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.mileage}</Text>
            <Text style={{...style.text_value}}>10000</Text>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.description}</Text>
            <Text style={{...style.text_value}}>
              Lorem ipsum dolor sit amet, consetetur
            </Text>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.additonal_jobs}</Text>
            <Text style={{...style.text_value}}>Lorem ipsum</Text>
          </View>

          <View style={{...style.view_text}}>
            <Text style={{...style.text_title}}>{strings.date_and_time}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...style.text_value}}>
                Wed, 08-Sep-2020 at 11:00 AM
              </Text>
              <Image
                source={Images.ic_calendar}
                style={{...style.image_small}}
              />
              <Text style={{...style.text_value, color: Colors.colorBlue}}>
                {strings.add_to_calendar}
              </Text>
            </View>
          </View>
        </ShadowView>
        {this.renderSwitchView()}
      </ScrollView>
    );
  }

  renderSwitchView() {
    return (
      <View style={{...style.view_switch_container}}>
        <Switch
          value={this.state.isAccepted}
          onValueChange={(val) =>
            this.setState({
              isAccepted: val,
            })
          }
          containerStyle={{
            borderWidth: 1,
            borderColor: Colors.colorTextGray,
          }}
          activeText={'Yes'}
          inActiveText={'No'}
          circleBorderWidth={0}
          circleSize={Dimens.ms18}
          backgroundActive={'green'}
          backgroundInactive={Colors.colorWhite}
          renderInsideCircle={() => (
            <Image
              source={
                this.state.isAccepted
                  ? Images.ic_booking_success
                  : Images.ic_switch_close
              }
              style={{width: Dimens.ms18, height: Dimens.ms18}}
            />
          )}
          renderActiveText={false}
          renderInActiveText={false}
        />
        <Text style={{...style.text_terms_of_service}}>
          {
            strings.i_have_read_and_accept_the_terms_of_service_and_privacy_policy
          }
        </Text>
      </View>
    );
  }

  gotoBookingStatus = () => {
    this.props.navigation.navigate('BookingStatus');
  };

  renderMakeAppointMentButton() {
    return (
      <View>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: Dimens.ms8,
            fontSize: 12,
            color: Colors.colorTextGray,
          }}>
          {'6'} {strings.of_six}
        </Text>
        <TouchableOpacity
          onPress={this.gotoBookingStatus}
          disabled={!this.state.isAccepted}>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: this.state.isAccepted
                ? Colors.colorOrange
                : Colors.colorTextGray,
              alignSelf: 'center',
              paddingHorizontal: Dimens.ms20,
              paddingVertical: Dimens.ms10,
              borderRadius: Dimens.ms30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: Colors.colorWhite,
                textTransform: 'uppercase',
              }}>
              {strings.make_appointment}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Root>
        <Container style={{backgroundColor: Colors.colorBackground}}>
          <CustomHeader leftAction={this.goBack} />
          <View style={{flex: 1}}>
            {this.renderProgressView()}
            {this.renderDetailView()}
          </View>
          <View style={{marginBottom: Dimens.ms60}}>
            {this.renderMakeAppointMentButton()}
          </View>
        </Container>
      </Root>
    );
  }
}

export default AppointmentSummary;

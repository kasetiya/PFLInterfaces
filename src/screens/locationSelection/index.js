import {Container, Root} from 'native-base';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import ContinueButton from '../../components/continueButton';
import CustomHeader from '../../components/customHeader';
import {Colors, Dimens} from '../../config';
import {Images} from '../../config/images';
import strings from '../../lang/strings';
import style from './style';

class LocationSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          source={Images.ic_progress_3}
          style={{
            height: Dimens.ms10,
            width: '100%',
          }}
          resizeMode="contain"
        />
        <Text style={{...style.text_choose_car}}>
          {strings.select_location}
        </Text>
      </View>
    );
  }

  renderMapView() {
    return (
      <View style={{marginTop: Dimens.ms10, flex: 1}}>
        <MapView
          style={{
            flex: 1,
          }}
          initialRegion={{
            latitude: 25.437786,
            longitude: 55.549088,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
          provider={PROVIDER_GOOGLE}>
          <Marker
            draggable
            coordinate={{
              latitude: 25.437786,
              longitude: 55.549088,
            }}
            onDragEnd={(e) =>
              this.onMarkerChange(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude,
              )
            }>
            <Image
              source={Images.ic_marker}
              resizeMode="contain"
              style={{height: Dimens.ms60, width: Dimens.ms60}}
            />
          </Marker>
        </MapView>
        {this.renderSearchView()}
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[Colors.colorBackground, 'rgba(255,255,255,0.0)']}
          style={{
            width: '100%',
            height: Dimens.ms100,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
          }}></LinearGradient>
      </View>
    );
  }

  renderSearchView() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[Colors.colorBackground, 'rgba(255,255,255,0.0)']}
        style={{...style.liner_container}}>
        <View style={{...style.view_outter_search}}>
          <View style={{...style.view_inner_search}}>
            <Text style={{color: Colors.colorTextGray, fontSize: 15}}>
              {strings.search_for_city_or_location}
            </Text>
            <Image
              source={Images.ic_search}
              style={{width: Dimens.ms16, height: Dimens.ms16}}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }

  gotoDateSelection = () => {
    this.props.navigation.navigate('DateSelection');
  };

  render() {
    return (
      <Root>
        <Container style={{backgroundColor: Colors.colorBackground}}>
          <CustomHeader leftAction={this.goBack} />
          <View style={{flex: 1}}>
            {this.renderProgressView()}
            {this.renderMapView()}
          </View>
          <View style={{marginBottom: Dimens.ms60}}>
            <ContinueButton
              enable={true}
              buttonAction={this.gotoDateSelection}
              title={'3'}
            />
          </View>
        </Container>
      </Root>
    );
  }
}

export default LocationSelection;

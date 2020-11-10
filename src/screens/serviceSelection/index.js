import {Container, Root} from 'native-base';
import React, {Component} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import ContinueButton from '../../components/continueButton';
import CustomHeader from '../../components/customHeader';
import {Colors, Dimens} from '../../config';
import {Images} from '../../config/images';
import strings from '../../lang/strings';
import ServiceSelectionListItem from './serviceSelectionListItem.js/index';
import style from './style';

class ServiceSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceList: [
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: true,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
        {
          includeVat: '2000 SR',
          mileage: '10000',
          description: 'Lorem ipsum dolor sit amet, consetetur',
          showDetail: false,
        },
      ],
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
          source={Images.ic_progress_2}
          style={{
            height: Dimens.ms10,
            width: '100%',
          }}
          resizeMode="contain"
        />
        <Text style={{...style.text_choose_car}}>{strings.choose_service}</Text>
      </View>
    );
  }

  handleServiceAction(item, index) {
    var all_service = this.state.serviceList;
    for (var i = 0; i < all_service.length; i++) {
      all_service[i].showDetail = false;
    }
    all_service[index].showDetail = true;
    this.setState({serviceList: all_service});
  }

  renderServiceList() {
    return (
      <View style={{marginTop: Dimens.ms45}}>
        <FlatList
          listKey={(item, index) => index.toString()}
          bounces={false}
          contentContainerStyle={{
            marginVertical: 8,
          }}
          showsVerticalScrollIndicator={false}
          data={this.state.serviceList}
          numColumns={1}
          keyExtractor={({id}, index) => index.toString()}
          renderItem={({item, index}) => (
            <ServiceSelectionListItem
              row={item}
              itemIndex={index}
              rowAction={() => this.handleServiceAction(item, index)}
              props={this.props}
            />
          )}
        />
      </View>
    );
  }

  gotoLocationSelection = () => {
    this.props.navigation.navigate('LocationSelection');
  };

  render() {
    return (
      <Root>
        <Container style={{backgroundColor: Colors.colorBackground}}>
          <CustomHeader leftAction={this.goBack} />
          <View style={{flex: 1}}>
            {this.renderProgressView()}
            {this.renderServiceList()}
          </View>
          <View style={{marginBottom: Dimens.ms60}}>
            <ContinueButton
              enable={true}
              buttonAction={this.gotoLocationSelection}
              title={'2'}
            />
          </View>
        </Container>
      </Root>
    );
  }
}

export default ServiceSelection;

import { Container, Root } from "native-base";
import React, { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import ContinueButton from "../../components/continueButton";
import CustomHeader from "../../components/customHeader";
import { Colors, Constants, Dimens, Images } from "../../config";
import strings from "../../lang/strings";
import AdditionalJobSelectionListItem from "./additionalJobSelectionListItem";
import style from "./style";

class AdditionalJobSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceList: [
        { name: "Service name (2000SR)", selected: true },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
        { name: "Service name (2000SR)", selected: false },
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
        }}
      >
        <Image
          source={Images.ic_progress_5}
          style={{
            height: Dimens.ms10,
            width: "100%",
          }}
          resizeMode="contain"
        />
        <Text style={{ ...style.text_choose_car }}>
          {strings.choose_additional_jobs}
        </Text>
      </View>
    );
  }

  handleServiceAction(item, index) {
    var all_service = this.state.serviceList;
    for (var i = 0; i < all_service.length; i++) {
      all_service[i].selected = false;
    }
    all_service[index].selected = true;
    this.setState({ serviceList: all_service });
  }

  renderServiceList() {
    return (
      <View style={{ marginTop: Dimens.ms48, flex: 1 }}>
        <FlatList
          listKey={(item, index) => index.toString()}
          bounces={false}
          contentContainerStyle={{
            marginVertical: Dimens.ms8,
            marginHorizontal: Dimens.ms32,
          }}
          showsVerticalScrollIndicator={false}
          data={this.state.serviceList}
          numColumns={2}
          keyExtractor={({ id }, index) => index.toString()}
          renderItem={({ item, index }) => (
            <AdditionalJobSelectionListItem
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

  gotoAppointmentSummary = () => {
    this.props.navigation.navigate("AppointmentSummary");
  };

  render() {
    return (
      <Root>
        <Container style={{ backgroundColor: Colors.colorBackground }}>
          <CustomHeader leftAction={this.goBack} />
          <View style={{ flex: 1 }}>
            {this.renderProgressView()}
            {this.renderServiceList()}
          </View>
          <View
            style={{
              marginBottom:
                Platform.OS == Constants.ios ? Dimens.ms60 : Dimens.ms25,
            }}
          >
            <ContinueButton
              enable={true}
              buttonAction={this.gotoAppointmentSummary}
              title={"5"}
            />
          </View>
        </Container>
      </Root>
    );
  }
}

export default AdditionalJobSelection;

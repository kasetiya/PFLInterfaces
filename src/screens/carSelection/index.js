import { Container, Root } from "native-base";
import React, { Component } from "react";
import { Image, Platform, ScrollView, Text, View } from "react-native";
import { Pages } from "react-native-pages";
import ShadowView from "react-native-simple-shadow-view";
import ContinueButton from "../../components/continueButton";
import CustomHeader from "../../components/customHeader";
import { Colors, Constants, Dimens } from "../../config";
import { Images } from "../../config/images";
import strings from "../../lang/strings";
import style from "./style";

class CarSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSegmentview() {
    return (
      <View style={{ ...style.segement_upper_container }}>
        <ShadowView style={{ ...style.segement_inner_container }}>
          <View style={{ ...style.view_segment }}>
            <Image
              source={Images.ic_repair_car}
              style={{ ...style.image_segment }}
              resizeMode="contain"
            />
            <Text style={{ ...style.text_segment }}>{strings.repair}</Text>
          </View>

          <View
            style={{
              ...style.view_segment,
              backgroundColor: Colors.colorBlue,
            }}
          >
            <Image
              style={{ ...style.image_segment }}
              source={Images.ic_pickup_car}
              resizeMode="contain"
            />
            <Text style={{ ...style.text_segment, color: Colors.colorWhite }}>
              {strings.services}
            </Text>
          </View>

          <View style={{ ...style.view_segment }}>
            <Image
              style={{ ...style.image_segment }}
              source={Images.ic_fix_car}
              resizeMode="contain"
            />
            <Text style={{ ...style.text_segment }}>{strings.body_shop}</Text>
          </View>
        </ShadowView>
      </View>
    );
  }

  renderPagerView() {
    let arrImage = [1, 1, 1];
    return (
      <Pages indicatorColor={Colors.colorOrange}>
        {arrImage.map((index, item) => (
          <View style={{ marginTop: Dimens.ms38 }}>
            <Text style={{ ...style.text_car_name }}>MADZA 3</Text>
            <Text style={{ ...style.text_car_nickname }}>My car nickname</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Images.ic_car}
                style={{
                  width: "90%",
                  height: "90%",
                  marginTop: Platform.OS == Constants.ios ? -40 : -20,
                }}
                resizeMethod="scale"
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: Platform.OS == Constants.ios ? -30 : -10,
              }}
            >
              <Image
                source={Images.ic_swipe_car}
                style={{
                  width: Dimens.ms14,
                  height: Dimens.ms14,
                  marginRight: Dimens.ms8,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.colorTextGray,
                  fontSize: Dimens.ms8,
                }}
              >
                {strings.swipe_to_view_all_cars}
              </Text>
            </View>
          </View>
        ))}
      </Pages>
    );
  }

  renderProgressView() {
    return (
      <View
        style={{
          marginHorizontal: Dimens.ms65,
          marginTop: Dimens.ms30,
        }}
      >
        <Image
          source={Images.ic_progress_1}
          style={{
            height: Dimens.ms10,
            width: "100%",
          }}
          resizeMode="contain"
        />
        <Text style={{ ...style.text_choose_car }}>{strings.choose_car}</Text>
      </View>
    );
  }

  gotoServiceSelection = () => {
    this.props.navigation.navigate("ServiceSelection");
  };

  render() {
    return (
      <Root>
        <Container style={{ backgroundColor: Colors.colorBackground }}>
          <CustomHeader leftAction={() => console.log("hola")} />
          {this.renderSegmentview()}
          {this.renderProgressView()}

          {this.renderPagerView()}
          <View
            style={{
              marginBottom:
                Platform.OS == Constants.ios ? Dimens.ms60 : Dimens.ms25,
            }}
          >
            <ContinueButton
              enable={true}
              buttonAction={this.gotoServiceSelection}
              title={"1"}
            />
          </View>
        </Container>
      </Root>
    );
  }
}

export default CarSelection;

import { Text } from "native-base";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ShadowView from "react-native-simple-shadow-view";
import { Colors, Images } from "../../../config";
import style from "./style";

const AdditionalJobSelectionListItem = ({
  row,
  props,
  itemIndex,
  rowAction,
}) => {
  return (
    <ShadowView
      style={{
        ...style.container,
      }}
    >
      <TouchableOpacity onPress={() => rowAction()}>
        <View
          style={{
            ...style.service_name_container,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: row.selected
              ? Colors.colorBlue
              : Colors.colorWhite,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: row.selected ? Colors.colorWhite : Colors.colorBlue,
                ...style.text_title,
              }}
            >
              {row.name}
            </Text>
            {row.selected && (
              <Image
                source={Images.ic_selected}
                style={{ ...style.image_selected }}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </ShadowView>
  );
};

export default AdditionalJobSelectionListItem;

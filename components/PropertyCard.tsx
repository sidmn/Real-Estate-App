import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "react-native";

interface PropertyType {
  item: any;
  setSelectedProp: any;
  setModalVis: any;
}

const PropertyCard = ({ item, setSelectedProp, setModalVis }: PropertyType) => {
  return (
    <View className="bg-white dark:bg-[#1D1F21] w-[300px] rounded-[15px]">
      <Image
        source={{ uri: item.image }}
        style={{ width: 300, height: 200 }}
        className="rounded-[15px]"
      />
      <View className="gap-[8px] px-[19px] pt-[21px] pb-[17px]">
        <Text className="font-medium text-[21px] dark:text-[#FFFFFF]">
          {item.name}
        </Text>
        <Text className="font-regular text-[16px] text-[#676767]">
          {item.location}
        </Text>
        <Text className="font-regular text-[16px] dark:text-[#FFFFFF] text-[#050505]">
          ₹ {item.price}
        </Text>
        <Pressable
          className="bg-[#0167FF] hover:bg-[#0040FF] rounded-lg flex items-center justify-center py-[14px]"
          onPress={() => {
            setSelectedProp(item);
            setModalVis(true);
          }}
        >
          <Text className="text-white font-medium text-[21px]">Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PropertyCard;

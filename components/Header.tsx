import {
  View,
  Image,
  TextInput,
  Pressable,
  Switch,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

interface SearchBar {
  search: string;
  setSearch: any;
  filterVis: boolean;
  setFilterVis: any;
}

const Header = ({ search, setSearch, filterVis, setFilterVis }: SearchBar) => {
  const { colorScheme, toggleColorScheme } = useColorScheme(); //to set dark or light mode

  return (
    <View
      className={`w-full bg-[#1D1F21] pb-[20px] flex flex-row flex-wrap items-center justify-between gap-[18px] px-10 ${
        Platform.OS == "web" && "pt-5"
      }`}
    >
      <StatusBar className="bg-[#1D1F21]" barStyle="light-content" />
      <Image
        source={require("../assets/images/propacity_logo.png")}
        className="w-[132px] h-[26px]"
        style={{ width: 132, height: 26 }}
      />
      <Switch
        value={colorScheme == "dark"}
        onChange={toggleColorScheme}
        trackColor={{ false: "#000000", true: "#FFFFFF" }}
        thumbColor={colorScheme == "dark" ? "#000000" : "#FFFFFF"}
        className={`${Platform.OS == "web" && "order-2"}`}
      />
      <View className="flex flex-row gap-5 items-center ">
        <View className=" flex flex-row items-center justify-between rounded-[10px] p-[0.1vh] pr-[16px] bg-white ">
          <TextInput
            className="bg-white text-[#1F1F1F] placeholder:text-[#888888] text-[18px] w-[73%] max-h-[55px] rounded-[10px] pl-[16px] outline-none"
            placeholder="Search Leads"
            value={search}
            onChangeText={(value) => setSearch(value)}
          />

          <Image
            source={require("../assets/images/Search.png")}
            className="h-[32px] w-[32px]"
            style={{ width: 28, height: 28 }}
          />
        </View>
        <Pressable onPress={() => setFilterVis(!filterVis)}>
          <Image
            source={require("../assets/images/Filter.png")}
            className="h-[32px] w-[32px]"
            style={{ width: 28, height: 28 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

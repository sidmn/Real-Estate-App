//By Siddharth Mantri https://portfolio.siddharth-mantri.co.in/

import {
  FlatList,
  View,
  Text,
  Modal,
  Platform,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "../data/propertiesdata";
import Header from "@/components/Header";
import BookingModal from "@/components/BookingModal";
import { useEffect, useRef, useState } from "react";
import Slider from "@react-native-community/slider";

export default function Index() {
  const [search, setSearch] = useState("");
  const [propertylist, setPropertyList] = useState(properties); //to store the filtered out list
  const [price, setPrice] = useState(25000);
  const [filterVis, setFilterVis] = useState(false);  //for filter modal visibilty
  const [modalVis, setModalVis] = useState(false);  //for booking modal visibilty
  const [selectedprop, setSelectedProp] = useState();   //to store the selected property
  const [loadedList, setLoadedList] = useState(propertylist.slice(0, 10)); //to display the list rendered per page
  const [loading, setLoading] = useState(false);
  const page = useRef(1);

  //to filter out properties upon search and filter changes
  useEffect(() => {
    const filteredList = properties
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .filter((item) => item.price <= price);
    setPropertyList(filteredList);
    setLoadedList(filteredList.slice(0, 10));
    page.current = 1;
  }, [search, price]);

  //for infinite scrolling
  const LoadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newData = propertylist.slice(
        page.current * 10,
        (page.current + 1) * 10
      );
      if (newData.length > 0) {
        setLoadedList((prev) => [...prev, ...newData]);
        page.current++;
      }
      setLoading(false);
    }, 1000); //testing network delay with 1 sec 
  };

  //loading footer
  const renderFooter = () => {
    return loading ? (
      <View className="py-10">
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const hasMoreItems = loadedList.length < propertylist.length; //checks for if any more item is present

  return (
    <SafeAreaView className="flex flex-1 relative h-full bg-[#F5F5F5] dark:bg-[#2B2B2B]">
      <Header
        search={search}
        setSearch={setSearch}
        filterVis={filterVis}
        setFilterVis={setFilterVis}
      />

      
      <View className=" flex z-0 relative">
        {filterVis && (
          <View className="flex px-9 w-full z-10 pt-2 absolute">
            <View className="bg-white rounded-[10px] py-8 px-[10px] z-2">
              <View className="flex flex-row justify-between">
                <Text className="px-4 font-regular text-[16px] text-[#050505]">
                  Price
                </Text>
                <Text className="px-4 font-regular text-[16px] text-[#050505]">
                  ₹ {price}
                </Text>
              </View>
              <Slider
                minimumValue={0}
                maximumValue={25000}
                step={1000}
                value={price}
                onValueChange={setPrice}
                minimumTrackTintColor="#1D1F21"
                maximumTrackTintColor="#F5F5F5"
                thumbTintColor="#1D1F21"
                className=""
              />
            </View>
          </View>
        )}

        <Modal
          visible={modalVis}
          transparent={true}
          onRequestClose={() => setModalVis(!modalVis)}
        >
          <BookingModal selectedProp={selectedprop} />
        </Modal>

        {Platform.OS == "web" ? (
          <ScrollView className="flex flex-1 overflow-y-auto">
            <View className="flex flex-row flex-wrap items-center justify-center gap-5 p-5 ">
              {loadedList.map((item) => (
                <PropertyCard
                  key={item.id}
                  item={item}
                  setSelectedProp={setSelectedProp}
                  setModalVis={setModalVis}
                />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View className="flex flex-grow-1 items-center justify-center gap-5 ">
            <FlatList
              data={loadedList}
              renderItem={({ item }) => (
                <PropertyCard
                  item={item}
                  setSelectedProp={setSelectedProp}
                  setModalVis={setModalVis}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View className="p-[10px]"></View>}
              contentContainerStyle={{ paddingTop: 20, paddingBottom: 150 }}
              showsVerticalScrollIndicator={false}
              {...(hasMoreItems ? { onEndReached: LoadMore } : {})}
              
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
            />
            {!propertylist.length && (
              <Text className="flex items-center justify-center dark:text-white">
                No Property Found
              </Text>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

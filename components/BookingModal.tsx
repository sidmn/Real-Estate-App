import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const BookingModal = ({ selectedProp }: any) => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [name, setName] = useState("");
  const [checkInVis, setCheckInVis] = useState(false); //for visibilty of datepicker modal
  const [checkOutVis, setCheckOutVis] = useState(false);

  //shows the warning or success toast on booking
  function showToasts() {
    Keyboard.dismiss();
    if (checkIn && checkOut && name)
      Toast.success(`${selectedProp.name} has been booked.`);
    else {
      let errorMessage = "Please fill in the following fields:";
      if (!name) {
        errorMessage += "\n- Name";
      }
      if (!checkIn) {
        errorMessage += "\n- Check-in Date";
      }
      if (!checkOut) {
        errorMessage += "\n- Check-out Date";
      }
      Toast.warn(errorMessage);
    }
  }

  //to format date to DD/MM/YYYY in display
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  //to set the date only when ok button is pressed in calender
  const handleCheckInChange = (event: any, selectedDate: any) => {
    if (event.type == "set") {
      setCheckInVis(false);
      setCheckIn(selectedDate);
    } else {
      setCheckOutVis(false);
    }
  };

  const handleCheckOutChange = (event: any, selectedDate: any) => {
    if (event.type == "set") {
      setCheckOutVis(false);
      setCheckOut(selectedDate);
    } else {
      setCheckOutVis(false);
    }
  };

  return (
    <View className="flex pt-[4rem] px-[25px] bg-black/70 dark:bg-white/5 flex-1 ">
      <ToastManager width={320} height="auto" position="bottom" />
      {checkInVis && (
        <RNDateTimePicker
          value={checkIn || new Date()}
          mode="date"
          onChange={handleCheckInChange}
          minimumDate={new Date()}
          {...(checkOut ? { maximumDate: checkOut } : {})}
        />
      )}
      {checkOutVis && (
        <RNDateTimePicker
          value={checkOut || new Date()}
          mode="date"
          onChange={handleCheckOutChange}
          minimumDate={checkIn ? checkIn : new Date()}
        />
      )}

      <View className="bg-white dark:bg-[#1D1F21] py-[30px] px-[19px] flex flex-col item-center rounded-[10px] gap-5 ">
        <TextInput
          className="bg-[#F5F5F5] w-full text-[#1F1F1F] placeholder:text-[#888888] text-[21px] rounded-[10px] pl-[16px] outline-none"
          placeholder="Name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <View className="flex flex-row gap- justify-between">
          <View>
            <Text className="pb-1 pl-1 dark:text-white">Check-in Date</Text>

            <Pressable
              onPress={() => setCheckInVis(true)}
              className="flex flex-row items-center bg-[#F5F5F5] rounded-[10px] px-[10px] py-[10px]"
            >
              <Text
                className={`bg-[#F5F5F5] ${
                  checkIn ? "text-[#1F1F1F]" : "text-[#888888]"
                } text-[13px] rounded-[10px] p-2`}
              >
                {checkIn ? formatDate(checkIn) : "DD/MM/YYYY"}
              </Text>

              <Image
                source={require("../assets/images/Calendar.png")}
                style={{ width: 16, height: 16 }}
              />
            </Pressable>
          </View>
          <View>
            <Text className="pb-1 pl-1 dark:text-white">Check-out Date</Text>
            <Pressable
              onPress={() => setCheckOutVis(true)}
              className="flex flex-row items-center bg-[#F5F5F5] rounded-[10px] px-[10px] py-[10px]"
            >
              <Text
                className={`bg-[#F5F5F5] ${
                  checkOut ? "text-[#1F1F1F]" : "text-[#888888]"
                } text-[13px] rounded-[10px] p-2`}
              >
                {checkOut ? formatDate(checkOut) : "DD/MM/YYYY"}
              </Text>
              <Image
                source={require("../assets/images/Calendar.png")}
                style={{ width: 16, height: 16 }}
              />
            </Pressable>
          </View>
        </View>
        <Pressable
          className="bg-[#0167FF] hover:bg-[#0040FF] rounded-lg flex items-center justify-center py-[14px]"
          onPress={() => showToasts()}
        >
          <Text className="text-white font-medium text-[21px]">Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BookingModal;

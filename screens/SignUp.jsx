import React from "react";
import { View , Text , TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function () {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  return (
    <>
      <View className="h-[130px] w-full relative" >
        <View className="bg-[#00B0FF] h-[260px] w-[260px] rounded-full absolute top-[-130px] left-[-130px]  ">

        </View>
      </View>
      <View className="items-center" >
        <Text className="text-xl font-bold text-[#777] mb-4" >
          Welcome Onboard !
        </Text>
        <Text className="text-lg text-[#777] mb-8" >
          Let's help you manage your tasks
        </Text>
        <View className="w-full px-8" >
          <View className="flex flex-row bg-white my-4 p-4 px-8 rounded-full align-center" >
            <FontAwesome5 name="signature" size={24} color="#777" />
            <TextInput 
              placeholder="Enter name..."
              className="flex-1 ml-3"
            />
          </View>
        </View>
        <View className="w-full px-8" >
          <View className="flex flex-row bg-white mb-2 p-4 px-8 rounded-full align-center" >
            <FontAwesome5 name="phone-alt" size={24} color="#777" />
            <TextInput 
              placeholder="Enter phone..."
              className="flex-1 ml-3"
            />
          </View>
        </View>
        <View className="w-full px-8" >
          <View className="flex flex-row bg-white my-2 p-4 px-8 rounded-full align-center" >
            <FontAwesome5 name="user-alt" size={24} color="#777" />
            <TextInput 
              placeholder="Enter email..."
              className="flex-1 ml-3"
            />
          </View>
        </View>
        <View className="w-full px-8" >
          <View className="flex flex-row bg-white my-2 p-4 px-8 rounded-full align-center" >
            <FontAwesome5 name="lock" size={24} color="#777" />
            <TextInput 
              placeholder="Enter password..."
              className="flex-1 ml-3"
            />
          </View>
        </View>
      </View>
    </>
  )
}
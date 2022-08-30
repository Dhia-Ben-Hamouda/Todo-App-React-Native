import React from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function () {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  function pressHandler() {
    Keyboard.dismiss();
  }

  function toggle()
  {
    navigation.navigate("SignIn");
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={pressHandler}>
        <View onPress={pressHandler}>
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
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity className="w-full mt-4">
                <View className="bg-[#00B0FF] p-4 flex justify-center items-center rounded-full">
                  <Text className="text-white">
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
              <View className="flex flex-row justify-center my-4">
                <Text className="text-[#777] font-bold" >
                  Already have an account ?
                </Text>
                <Text className="ml-1 text-[#00b0ff] font-bold" onPress={toggle}>
                  Sign in !
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}
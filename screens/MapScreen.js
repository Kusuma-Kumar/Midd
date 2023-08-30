import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from "@react-navigation/stack";
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      {/* Floating menu button */}
      <View style={tw`mt-14 ml-12 absolute z-50 bg-gray-100 p-2 rounded-full shadow-lg`}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="menu" style={tw`text-gray-700`} />
        </TouchableOpacity>
      </View>

      {/* Top Half: Display the Map */}
      <View style={{ flex: 1 }}>
        <Map />
      </View>

      {/* Bottom Half: Display the NavigateCard Screen */}
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />

        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
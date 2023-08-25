import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import MapView from 'react-native-maps';
import {createStackNavigator} from "@react-navigation/stack";
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View style={tw`flex-1`}>
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
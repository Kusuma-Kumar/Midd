import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const PlannedRidesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={tw`p-3`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        {/* Button to Post a Planned Ride */}
        <TouchableOpacity
          style={tw`bg-blue-900 p-3 rounded-md flex-1 ml-3 mr-6`}
          onPress={() => {
            // Handle the action to post a planned ride
          }}
        >
          <Text style={tw`text-white font-bold text-lg text-center`}> Post a Planned Ride </Text>
        </TouchableOpacity>
      </View>

      {/* View Planned Rides */}
      <View style={tw`bg-white p-4 mt-4 rounded-md flex-1`}>
        <Text style={tw`text-lg`}>Viewing Planned Rides</Text>
        {/* You can add more content related to viewing planned rides here */}
      </View>
    </SafeAreaView>
  );
};

export default PlannedRidesScreen;

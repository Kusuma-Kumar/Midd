import { FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: "123",
    title: "user name or car type",
    image: " What they want",// Do i need it though?
  },
  {
    id: "45906",
    title: "user name or car type 2",
    image: " What they want",
  },
  {
    id: "652",
    title: "user name or car type",
    image: " What they want",// Do i need it though?
  },
  {
    id: "4324",
    title: "user name or car type 2",
    image: " What they want",
  },
  {
    id: "34",
    title: "user name or car type",
    image: " What they want",// Do i need it though?
  },
  {
    id: "232",
    title: "user name or car type 2",
    image: " What they want",
  },
]


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelected(item)}
      style={tw`flex-row justify-between items-center px-10 my-4 ${item.id === selected?.id ? 'bg-gray-200' : ''
        }`}
    >
      <View>
        <Text style={tw`font-semibold text-lg`}>{item.title}</Text>
        <Text>Travel time info</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <View>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigateCard")}
            style={tw`p-3`}
          >
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`text-xl font-bold py-5 text-center`}>Pick your ride</Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={tw`flex-grow`}
        />
      </View>

      <TouchableOpacity style={tw`bg-blue-900 py-3`}>
        <Text style={tw`text-center text-white text-xl`}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default RideOptionsCard;

const styles = StyleSheet.create({});
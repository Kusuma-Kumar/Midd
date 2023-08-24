import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "123",
        title:"Get a ride",
        image: require("./car.png"),
        screen: "MapScreen",
    },
    {
        id: "456",
        title:"Order Food",
        image: require("./snack.jpg"),
        screen: "EatsScreen",

    },

];

const NavOptions = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({ item}) => (
        <TouchableOpacity style ={tw`p-2 pl-6`}>
            <View>
                <Image 
                source= {item.image}
                style ={{width: 120, height:120, resizeMode: "contain" }}

                />
                <Text style ={tw`font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-blue-900 rounded-full w-10 mt-4`}//change to black background circle for white arrows if desired
                name="arrowright" color="white" type="antdesign" />
            </View>
            
        </TouchableOpacity>

    )}

    />
  );
};

export default NavOptions;

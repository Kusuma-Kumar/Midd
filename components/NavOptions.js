import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;

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
        image: require("./take-out.jpeg"),
        screen: "EatsScreen",

    },
    {
        id: "798",
        title:"Planned Rides",
        image: require("./carpool.png"),
        screen: "PlannedRidesScreen",
    },
    {
        id: "135",
        title:"On-campus Retail",
        image: require("./retail.png"),
        screen: "RetailOptionsScreen",
    },

];

const NavOptions = () => {
    const navigation = useNavigation();

    const renderOptions = () => {
        const options = [];
        for (let i = 0; i < data.length; i += 2) {
            options.push(
                <View key={`row-${i}`} style={styles.optionRow}>
                    {data[i] && renderOption(data[i])}
                    {data[i + 1] && renderOption(data[i + 1])}
                </View>
            );
        }
        return options;
    };

    const renderOption = (item) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 w-1/2`}>
            <View style={styles.optionContainer}>
                <Image 
                source={item.image}
                style={styles.optionImage}
                />
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Icon 
                style={styles.optionIcon}
                name="arrowright" color="white" type="antdesign" />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {renderOptions()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    optionContainer: {
        alignItems: "center",
    },
    optionImage: {
        width: screenWidth * 0.35,
        height: screenWidth * 0.35,
        resizeMode: "contain",
    },
    optionTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    optionIcon: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#37538C",
        borderRadius: 50,
    },
});

export default NavOptions;

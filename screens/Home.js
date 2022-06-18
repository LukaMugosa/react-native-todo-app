import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useLayoutEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ListButton = ({title, color, onPress, onDelete}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.itemContainer, {backgroundColor: color}]}
        >
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => {
                }}>
                    <Ionicons name="options-outline" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Ionicons name="trash-outline" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const renderAddListIcon = (addItemToList) => {
    return (
      <TouchableOpacity onPress={() => addItemToList({title: "Title", color: Colors.orange})}>
            <Text style={styles.icon}>
                +
            </Text>
      </TouchableOpacity>
    );
}

const Home = ({navigation}) => {
    const [listData, setListData] = useState([
        {title: "School", color: Colors.red},
        {title: "Work", color: Colors.green},
        {title: "Fun", color: Colors.blue}
    ]);

    const addItemToList = (item) => {
        listData.push(item);
        setListData([...listData]);
    }

    const removeItemFromList = (index) => {
        listData.splice(index, 1);
        setListData([...listData]);
    }

    useLayoutEffect(() => {
       navigation.setOptions({
           headerRight: () =>  renderAddListIcon(addItemToList)
       })
    });

    return (
        <View style={styles.container}>
            <FlatList data={listData}
                      renderItem={({item: {title, color}, index}) => {
                          return (
                              <ListButton
                                  title={title}
                                  color={color}
                                  navigation={navigation}
                                  onDelete={() => removeItemFromList(index)}
                                  onPress={() => navigation.navigate("Todo list", {title, color})}
                              />
                          )
                      }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: {fontSize: 24, padding: 5, color: "white"},
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Home;

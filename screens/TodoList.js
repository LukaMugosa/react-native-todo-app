import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const TodoList = () => {
    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white"
    }
});


export default TodoList;

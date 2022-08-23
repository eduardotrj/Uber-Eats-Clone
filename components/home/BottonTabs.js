import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function BottonTabs() {
    return (
        <View
            style={{
                flexDirection: "row",
                margin: 12,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}>
            <Icon icon="home" text="home" />
            <Icon icon="search" text="Browser" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
 
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
        <FontAwesome5 name={props.icon} size={25} style={{
            marginBottom:1, alignSelf: "center", color: "#262626"
        }} />
        <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
)
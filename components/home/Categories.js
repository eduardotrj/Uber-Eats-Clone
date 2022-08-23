import { Image, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { items } from '../../assets/productsList/ItemsList'


export default class Categories extends Component {
    render() {
        return (
        <View style={{
            marginTop: 6,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) =>
                <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                    <Image 
                        source={item.image}
                        style={{
                            width: 50,
                            height: 40,
                            resizeMode: "contain", //sharper styles
                        }} 
                    />
                    <Text style={{ fontSize: 13, fontWeight: "900"}}>{item.text}</Text>
                </View>
                )}      
            </ScrollView>
        </View>     
        )
    }
}
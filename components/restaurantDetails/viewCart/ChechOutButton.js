import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addOrderToFireBase } from './addOrderToFireBase'

const ChechOutButton = ({
    setLoading,
    items,
    restaurantName,
    navigation,
    totalUSD,
    total,
    setModalVisible
}) => {
    const dispatch = useDispatch();
    const cleanCart = (items) =>
    dispatch ({
        type: "EMPTY_CART",
        payload: items,
    });


    return (
        <View style={styles.buttonContainer} >
            <TouchableOpacity
                style={styles.buttonElement}
                onPress={() => {
                    addOrderToFireBase(setLoading ,items ,restaurantName, navigation);
                    cleanCart();
                    setModalVisible(false);
                }}
            >
                <Text style={styles.buttonText}>Checkout</Text>
                <Text style={styles.buttonTotal}>
                    {total ? totalUSD : "" }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonElement: {
        marginTop:20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    buttonTotal: {
        position: "absolute", 
        right: 20,
        color: "white",
        fontSize: 15,
        top: 17,
    }
})

export default ChechOutButton
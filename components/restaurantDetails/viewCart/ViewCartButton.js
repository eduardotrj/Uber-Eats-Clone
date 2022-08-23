import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ViewCartButton = ({setModalVisible, totalUSD}) => {
    
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.buttonElement}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.buttonText} >View Cart</Text>
            <Text style={styles.buttonText} >{totalUSD}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    buttonElement: {
        marginTop: 20,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        borderRadius: 30,
        width: 280,
        position: "relative",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    }
});


export default ViewCartButton



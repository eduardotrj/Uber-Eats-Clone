import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import OrderItem from './OrderItem';
import ViewCartButton from './viewCart/ViewCartButton';
import LoadingScreen from './viewCart/LoadingScreen';
import ChechOutButton from './viewCart/ChechOutButton';

export default function ViewCart({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    const total = items //Take prices to number.
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev,curr) => prev + curr, 0); // (Stack the values)

    const totalUSD = "$" + total.toFixed (2)


    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        
                        <ScrollView style={{height:'100%'}}>

                            {items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}  

                            <View style={styles.subtotalContainer}>
                                <Text style={styles.subtotalText}>SubTotal</Text>
                                <Text>{totalUSD}</Text>
                            </View>
                            
                        </ScrollView>

                        <ChechOutButton 
                            totalUSD={totalUSD}
                            total={total}
                            setLoading={setLoading}
                            items={items}
                            restaurantName={restaurantName}
                            navigation={navigation}
                            setModalVisible={setModalVisible}
                        />
                    </View> 
                </View>
            </>
        )
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>

            { total ? (
                <ViewCartButton
                    style={styles.viewCartButton}
                    setModalVisible={setModalVisible}
                    totalUSD={totalUSD}
                /> 
            ) : ( <></> ) }

            { loading ? ( <LoadingScreen /> ) : ( <></> )}
        </>
    )
}


const styles = StyleSheet.create({
    viewCartButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        zIndex: 399,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
      },
      restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
      },
      subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
      },
      subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
      },
});
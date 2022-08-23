import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

function LoadingScreen() {
    return (
        <View
            style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            }}
        >
            <LottieView
                style={{ height: 200 }}
                source={require("../../../assets/animations/scanner.json")}
                autoPlay
                speed={3}
            />
        </View>
    )
}

export default LoadingScreen
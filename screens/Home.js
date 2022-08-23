import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import { localRestaurants } from '../assets/productsList/PlacesList'
import BottonTabs from '../components/home/BottonTabs'
import DividerLine from '../components/DividerLine'
import { getRestaurantsFromYelp } from '../components/api/restaurantsFromYelp'



export default function Home({navigation}) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("New York");
    const [activeTab, setActiveTab ] = useState( "Delivery" );
    

    useEffect(() => {
        getRestaurantsFromYelp(setRestaurantData,activeTab,city);
    }, [city, activeTab])


    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: "white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                    restaurantData={restaurantData} 
                    navigation={navigation}
                    />  
            </ScrollView>
            <DividerLine width={1} color="#ddd"/>
            <BottonTabs/>
        </SafeAreaView>
    )
}
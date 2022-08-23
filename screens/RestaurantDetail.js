import { View, Dimensions } from 'react-native'
import React from 'react'
import DividerLine from '../components/DividerLine'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'
import { foods } from '../assets/productsList/FoodLists'


export default function RestaurantDetail({ route, navigation }) {
  var Windowheight = Dimensions.get('window').height;

  return (
    <View style={{height:Windowheight}}>
      <About route={route}/>
      <DividerLine width={1.8} color={"#ddd"} style={{ marginVertical: 20}} />
      <MenuItems restaurantName={route.params.name} foods={foods} style={{flex:1}}/>
      <ViewCart navigation={navigation}/>
    </View>
  )
}

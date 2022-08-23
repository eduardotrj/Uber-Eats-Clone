

# UBER EATS CLONE APP


## Description:

Movile app, cloning the original used by Uber Eats, developed using **React Native**, with **Redux**. **Yelp API** to get restaurants, and **FireBase** to backend.

The application it's avaible to search a city and bring a list with all restaurants. Allow to select each restaurant and add or remove different items in a cart, check the cart and make the order. The list with the items and the restaurant name is sent to a BackEnd, in this case, a Firebase DB. After, remove all items, and show the list of items from the backend.


## Use:

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`.
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779).
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample).
  - Web: Any web browser.


## Structure:


     Root
     ┤ App.js          *(Starting file)*
     │ navigation.js   *(Select the different screens)*
     │ Screens/ 
     │ └───────┤ Home.js               *(Initial component page)*
     │         │ RestaurantDetails.js  *(Restaurant page)*
     │         │ OrderCompleted.js     *(After order page)*
     │
     │ Components/
     │ └──────────┤ api/
     │            │ └─────┤ restaurantFromYelp.js  *(YELP Api config)*     
     │            │       │ firebase.js            *(Configuration to conect with firebase DB)*
     │            │             
     │            │ home/
     │            │ └─────┤ BottomTabs.js    *(Options bar: home, browser, grocery, Orders, Account)*
     │            │       │ Categories.js    *(Options bar: categories or types of business)*
     │            │       │ HeaderTabs.js    *(Option bar: Delivery or Pickup)*
     │            │       │ RestaurantItems.js   *(Restaurants options displayed)*
     │            │       │ SearchBar.js         *(Search bar)*
     │            │       
     │            │ restaurantDetails/
     │            │ └─────────────────┤ About.js       *(Header with restaurant information)*
     │            │                   │ MenuItems.js   *(Menu options list)*
     │            │                   │ OrderItem.js   *(Item name and price to order list)*
     │            │                   │ ViewCart.js    *(Order list and buttons)*
     │            │                   │ viewCart/
     │            │                   │ └────────┤ addOrderToFireBase.js *(Save order in BackEnd DB)*
     │            │                   │          │ CheckOutButton.js     *(Button to check out)*
     │            │                   │          │ LoadingScreen.js   *(Loading animation)*
     │            │                   │          │ ViewCartButton    *(BUtton to view cart)*
     │            │                   
     │            │ DividerLine.js    *(Component to draw a line)*
     │ redux/  
     │ └──────┤ store.js     *(Redux store)*
     │        │ reducers/             
     │          └────────┤ cartReducer.js  *(Reducer)*
     │                   │ index.js    *(Reducer configuration)*
     │
     │ assets/    *(Any other resource such images, animations or list)*
      

## Files:

### App.js:

Initiate RootNavigation component.


### navigation.js:

Link all pages together.

Initiate:
  - redux storage with configureStore (redux/store.js).
  - navigator stacks where save pages history.

headerShown is disabled (false) to avoid show the page name on the top.

Link all pages inside of Redux and navigator components:
  - Home
  - DetailsRestaurant
  - OrderCompleted


### Home.js:

Render the main screen.

Initiate:
  - useStates restaurantData: To save & use all restaurants and business received by the API Yelp. By default use LocalRestaurant list.
  - useStates city: To save & use the value of the city to request business information with Yelp API. By default "New York".
  - useStates activeTab: To save & use the configuration choice about "Delivery" or "Pickup". By default "Delivery".

  Configure useEffects to update the list of restaurants with getRestaurantsFromYelp when is any change in city or activeTab useStates.

The render is made up with:
  - HeaderTabs
  - SearchBar
  - Categories
  - RestaurantItems
  - DividerLine
  - BottonTabs

  A scroll is enabled to Categories and RestaurantItems.


### RestaurantDetails.js:

Render the restaurant details and product options menu.

Initiate
  - Windowheight: Get the windows size and is used to adapt the scroll and don't lose any item.

The render is made up with:
  - About
  - DividerLine
  - MenuItems
  - ViewCart


### OrderCompleted.js:

Render the paged showed after ordering.

Initiate
  - Windowheigh (double): Get the windows size and is used to adapt the scroll and don't lose any item.
  - useState lastOrder: To save & use all orders done.
  - useSelector: to save the state of the menu items and the restaurant name selecteds between pages.
  - total (double): Where make a plus of all item places selected without "$" symbol.
  - totalUSD (string): reduce total to 2 decimals and add "$" symbol.

  Configure useEffect to get the last data (orders) saved from DB. Create a object with the information and is set in lastOrder state. Must be called 1 time when the component OrderCompleted is accesed.

The render is made up with:
  - LottieView (check-mark animation)
  - MenuItems
  - LottieView (cooking animation)

  A scroll is enabled to MenuItems and the last LottieView.


### firebase.js:

Configure firebase connection.

Initiate if it is not initiate before.


### restaurantFromYelp.js:

Make and get request from Yelp API.

Initiate:
  - apiOptions: Header to api request wiith the key.
  - yelpUrl: the GET request.

Return a list of restaurants which is filtered with activeTab state.

  
###  BottonTabs.js:

Show a menu with different options:
  - home
  - search
  - shopping-bag
  - receipt
  - user

  **the functionality is not applied**


### Categories.js:

Render a menu with different options from the assets/productsList/itemsList.js

  **the functionality is not applied**


### HeaderTabs.js:

Render the Delivery-Pickup switch, made with 2 buttons.

  HeaderButton: Render a single button.


### RestaurantItems.js:

Render a list of all restaurants in restaurantData state.

  RestaurantImage: Render the image head of the restaurant.

  RestaurantInfo: Render name and other data from the restaurant.


### SearchBar.js:

Render a search input component in base GooglePlacesAutocomplete API.


### About.js:

Render the description of RestaurantDetail.

  RestaurantImage: Render the restaurant image.

  RestaurantTitle: Render the restaurant name.

  RestaurantDescription: Render a short description of the restaurant.


### MenuItems.js:

Render the list of items with name, price and image.

Initiate:
  - dispatch: To use the reducer.
  - selectedItem (function): To save a item in the cart with reducer.
  - cartItem (function): To take the state (items) of the reducer.
  - isFoodInCart (function): To check if an Item is in the reducer state.

FoodInfo: Render detailed information of an item.

FoodImage: Render the image item.

The render is made up with:
  - BouncyCheckBox
  - DividerLine

All render is inside of a Scroll.


### OrderItem.js:

Render a single item with only the title and the price


### ViewCart.js:

Render the ViewCart button and when is pressed, disable this button and render the order list and the checkout button.

Initiate:
  - modalVIsible useState: To manage the visibility state of the render components.
  - loading useState: To manage the loading animation.
  - useSelector: to save the state of the menu items and the restaurant name selecteds between pages.
  - total (double): Where make a plus of all item places selected without "$" symbol.
  - totalUSD (string): reduce total to 2 decimals and add "$" symbol.

checkoutModalContent: Render the order list with a list of items in the cart, and the CheckOut button.

The render is made up with:
  - OrderItem
  - CheckOutButton
  - ViewCartButton
  - LoadingScreen

OrderItem it's in a scroll.


### addOrderToFireBase.js:

Save in orders database in firebase the items, and render loading animation.

  items = items
  restaurantName = restaurantName
  createdAt = current time

  The loading animation is active for 0.5s

  After the time, change the actual navigation stack with OrderCompleted, to avoid come back to RestaurantDetails page, and allow to update the check box as unselect.


### ChechOutButton.js:

Render CheckOut button.

Initiate:
  - dispatch: To use the reducer.
  - cleanCart (function): To remove all (items) from the reducer state.

When the button is pressed:
  - Save items in the database with addOrderToFireBase.
  - Clean the reducer state with cleanCart.
  - Set the state of ModalVisible in false, to disable the orderlist and checkout button.


### LoadingScreen.js:

Rennder a LottieView with the scanner animation, to show loading action to users.


### ViewCartButton.js:

Render ViewCart button.

When the button is pressed:
  - Set the state of ModalVisible in true, to disable the ViewCart button, and enable the orderlist and checkout button.


### DividerLine.js:

Render a separation line.

The component allow manage:
  - color (string): Change the color line. #ddd (grey) by default.
  - width (number): The line width. 1 by default.
  - margin (number): The horizontal margin. 0 by default.


### cartReducer.js:

Manage the state with all items selected between app pages.

  The state is a object with one array (items), and one string (restaurantName) this default values:

    `selectedItems {
        items: [],
        restaurantName: ""
      }`

  Have 2 functions:

    - ADD_TO_CART: 
      - If the checbox associated is true, create a new state with the new item added to the items array, and restaurantName to restaurantName.
      - If the checbox associated is false, create a new state without this item.
    
    - EMPTY_CART: Set a new state with default values (empty).


### index.js:

Create and configure the reducer.

Initiate: 
  - reducers: Create a reducer with cartReducer.js
  - rootReducer: Configure the different reducers.


### configureStore.js:

Configure the storage for the reducers


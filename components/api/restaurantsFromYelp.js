
const YELP_API_KEY = "UPig85LAx-ZQh7SDBw_eHvvQVIw9Bnz8bSF7yjeIMw7YF2R34FH_EvrsReTSptOZqxR5ko5lgdSqen3AqJA-5UATUf-hBGQTKS2NyLiDv454r0S_D0fV2Ixuqh70YnYx"


export const getRestaurantsFromYelp = (setRestaurantData,activeTab,city) => {
    const yelpUrl = 
    `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
        headers: {
            authorization: `Bearer ${YELP_API_KEY}`,
        }, 
    };
    
    return fetch(yelpUrl, apiOptions)       // GET YEP API
        .then((res) => res.json())          // GET JSON
        .then((json) => setRestaurantData(  // Pull The Json to RestaurantData.
            json.businesses.filter((business) => 
            //business.transactions.includes("pickup")
            business.transactions.includes(activeTab.toLowerCase())    )
        )
    ); 
};
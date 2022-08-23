// TODO List with all restaurants in case of YELP don't work.

/*  ■  STRUCTURE  ■
{
    name: "Restaurant name",
    image: "url",
    price: "$$$",       → Range from $ to $$$$$
    reviews: "number of reviews",
    rating: number with 1 decimal
    categories: [{title: 'type'},]
}
*/

export const localRestaurants = [
    {
        name: "Tapwata Juli's restaurant",
        image_url:  "https://d1ralsognjng37.cloudfront.net/aa041c55-ecd6-4722-ae79-b4de603069d9.jpeg",
        categories: [ "Cafe", "Restaurant" ],
        price: "$$",
        reviews: 17,
        rating: 3.2,
    },
    {
        name: "Maute Kitchen",
        image_url:  "https://media.lesechos.com/api/v1/images/view/5c9e032fd286c263c21b34ba/1280x720/060991702562-web-tete.jpg",
        categories: [ "Restaurant",],
        price: "$$$",
        reviews: 819,
        rating: 4.7,
    },
    {
        name: "Asad",
        image_url:  "https://d1ralsognjng37.cloudfront.net/120757f2-9396-4416-ab56-632e12334863.jpeg",
        categories: [ "Cafe", "Restaurant" ],
        price: "$",
        reviews: 719,
        rating: 4.1,
    },
    {
        name: "Santander",
        image_url:  "https://d1ralsognjng37.cloudfront.net/5261d814-150f-4eaf-be1b-48bacc4f737b.jpeg",
        categories: [ "Restaurant", "Bar"],
        price: "$$$",
        reviews: 1144,
        rating: 4.2,
    },
    {
        name: "Gio kitchens",
        image_url:  "https://d1ralsognjng37.cloudfront.net/6c6e1f5a-64e5-450d-a889-49502b3c0351.jpeg",
        categories: [ "Restaurant", "Bar"],
        price: "$$$",
        reviews: 543,
        rating: 4.7,
    },
    {
        name: "Vitra Restaurant",
        image_url:  "https://duyt4h9nfnj50.cloudfront.net/resized/f974418529a7092e13b770b15d3455ef-w2880-fd.jpg",
        categories: [ "Restaurant", "Bar"],
        price: "$$",
        reviews: 287,
        rating: 4.2,
    },
    {
        name: "La Giovanesca",
        image_url:  "https://d1ralsognjng37.cloudfront.net/9fc1ee58-d159-459c-b89e-f14b9a1878f8.jpeg",
        categories: [ "Restaurant"],
        price: "$$$",
        reviews: 912,
        rating: 4.8,
    },
]
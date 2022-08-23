import firebase from '../../api/firebase';



export const addOrderToFireBase = (setLoading, items, restaurantName, navigation) => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders").add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
        setTimeout(() => {
            setLoading(false);
            //navigation.navigate("OrderCompleted");
            navigation.replace("OrderCompleted");
        }, 500)
    });
};
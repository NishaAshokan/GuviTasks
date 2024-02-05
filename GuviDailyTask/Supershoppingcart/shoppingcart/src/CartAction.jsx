export function addtocart(id, title, price, rating, image){
    return{
        type : "Add_Item_to_Cart",
        item : {
            id : id,
            title: title,
            price: price,
            rating: rating,
            image : image
        }
        
        
       
    }
}
export function removefromcart(id){
    return{
        type : "Remove_Item_From_Cart",
        id : id
    }
}
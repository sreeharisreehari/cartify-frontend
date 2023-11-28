import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//upload product details
export const sellproduct = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/products`,reqbody)
}

//get all added products 
export const getproducts = async()=>{
    return await commonAPI('GET',`${serverURL}/products`,"")
}
// add to cart
export const addtocart = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/Cart`,reqbody)
}
// to get from cart
export const  getfromcart = async()=>{
    return await commonAPI('GET',`${serverURL}/Cart`,"")
}
//to delete a product
export const deleteitems = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/Cart/${id}`,{})
}
//add to favorites
export const addtofavorites = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/favorites`,reqbody)
}
//to get products from  favorites
export const getfavorites = async()=>{
    return await commonAPI('GET',`${serverURL}/favorites`,"")
}
//to delete from favorites
export const deletefavorites = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/favorites/${id}`,{})
}


// add to cart from favorites
export const addfromfavorites = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/Cart`,reqbody)

}  
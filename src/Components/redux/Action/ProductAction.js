import axios from "axios";

export const LIKE_PRODUCT ="LIKE_PRODUCT";
export const CHANGE_CHECKBOX ="CHANGE_CHECKBOX";
export const LOAD_DATA="LOAD_DATA";


export const LikedProduct=(id,category,like)=>{
   return{
       type:LIKE_PRODUCT,
       payload: {
           id,
           category,
           like
       }
   }
}


export const LoadProductData=()=>{
    return async dispatch => {
        const response = await axios.get(``)

        dispatch({
            type: LOAD_DATA,
            payload: response
        })
    }
}


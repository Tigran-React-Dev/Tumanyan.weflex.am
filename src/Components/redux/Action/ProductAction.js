import axios from "axios";
export const LIKE_PRODUCT ="LIKE_PRODUCT";
export const CHANGE_CHECKBOX ="CHANGE_CHECKBOX";
export const LOAD_DATA="LOAD_DATA";
export const LOAD_GRAND_BUFET_DATA="LOAD_GRAND_BUFET_DATA"


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
        const response = await axios.get(process.env.REACT_APP_API_URL + `/category`)

        dispatch({
            type: LOAD_DATA,
            payload: response
        })
    }
}

export const LoadGrandBufetData=()=>{
    return async dispatch => {
        const response = await axios.get(process.env.REACT_APP_API_URL + `/category`)

        dispatch({
            type: LOAD_GRAND_BUFET_DATA,
            payload: response
        })
    }
}


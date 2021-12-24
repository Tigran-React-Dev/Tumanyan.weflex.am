import shaurma from "../../images/product/Shaurma 1.png";
import vegan from "../../images/product/vegan.png"
import {LIKE_PRODUCT, LOAD_DATA, LOAD_GRAND_BUFET_DATA, SEARCH_PRODUCT} from "./Action/ProductAction";


export const initialState = {
    product:[],
    recoment:[],
    grandfufet:[],
    searchProduct:{},
    searchtext:""
  }



export const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
        case LOAD_DATA:{
          return{
              ...state,
              product:action.payload.data
          }
        }
        case LOAD_GRAND_BUFET_DATA:{
            return {
                ...state,
                grandfufet: action.payload.data
            }
        }
        case SEARCH_PRODUCT :{

            return {
                ...state,
                searchProduct: action.payload.response.data,
                searchtext:action.payload.serch,
            }
        }






        case LIKE_PRODUCT:{
            if(action.payload.category==="շաուրմա"){
                state.product.forEach((e)=>{
                    if(e.id===action.payload.id){
                      return   e.like=!e.like
                    }
                })
            }else if(action.payload.category=="recoment"){
                state.recoment.forEach((e)=>{
                    if(e.id===action.payload.id){
                      return   e.like=!e.like
                    }
                })
            }else if(action.payload.category=="Sauces"){
                state.recoment.forEach((e)=>{
                    if(e.id===action.payload.id){
                       return  e.like=!e.like
                    }
                })
            }
            else if(action.payload.category=="աղցաններ"){
                state.product.forEach((e)=>{
                    if(e.id===action.payload.id){
                        return  e.like=!e.like
                    }
                })
            }

            return {

                product:[...state.product],
                recoment: [...state.recoment],
                Sauces:[...state.Sauces]

            }
        }
        
        default:
            return state
    }

}









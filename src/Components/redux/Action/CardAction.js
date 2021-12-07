export const ADD_PRODUCT_CARD="ADD_PRODUCT_CARD";
export const ADD_PRODUCT_CARD_ONLY="ADD_PRODUCT_CARD_ONLY";
export const ADD_PRODUCT_CARD_LOCAL="ADD_PRODUCT_CARD_LOCAL";
export const DELETE_PRODUCT_TO_CARD ="DELETE_PRODUCT_TO_CARD"
export const ON_MINUS ="ON_MINUS";
export const ON_PLUS ="ON_PLUS"
export const CLEARN_BASKET ="CLEARN_BASKET"
export const ADD_OLD_CHECK_TOBASKET="ADD_OLD_CHECK_TOBASKET"


export const AddproductCard =(productobj)=>{
      return {
          type: ADD_PRODUCT_CARD,
          payload: productobj,
      }
}


export const AddproductCardonly =(productobj)=>{
    return {
        type: ADD_PRODUCT_CARD_ONLY,
        payload: productobj,
    }
}

export const loadLocalCard =(itm)=>{
    return {
        type: ADD_PRODUCT_CARD_LOCAL,
        payload:itm
    }
}
export const DeleteItemCard =(id,)=>{
    return {
        type: DELETE_PRODUCT_TO_CARD,
        payload:id
    }
}

export const OnplusCount = (obj,bonus)=>{

 return {
     type: ON_PLUS,
     payload: {
          obj,
         bonus
     },

 }
}
export const OnMinusCount = (obj,bonus)=>{
    return {
        type: ON_MINUS,
        payload: {
             obj,
            bonus
    },
    }
}

export const ClardnBasket = ()=>{
    return {
        type: CLEARN_BASKET,

    }
}
export const OldcheckAddTocard = (arr)=>{
    return {
        type: ADD_OLD_CHECK_TOBASKET,
        payload:arr
    }
}


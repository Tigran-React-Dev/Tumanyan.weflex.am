

export const CHANGEADRESES ="CHANGEADRESES"
export const REMOVE_ADRESES ="REMOVE_ADRESES";
export const ADD_NEW_ADRESS="ADD_NEW_ADRESS"
export const SAVE_ORDERS_USER="SAVE_ORDERS_USER";
export const  LIKE_OBJ_SEND_TO_DATA = "LIKE_OBJ_SEND_TO_DATA"
export const Changeadress =(newobj)=>{
    return {
        type: CHANGEADRESES,
        payload: newobj,
    }
}
export const RemuveAdres =(id)=>{
    return {
        type: REMOVE_ADRESES,
        payload: id,
    }
}
export const AddNewAdress =(newadresobj)=>{
    return {
        type: ADD_NEW_ADRESS,
        payload: newadresobj,
    }
}








export const SaveorderUser =(arr)=>{
    return {
        type: SAVE_ORDERS_USER,
        payload: arr,
    }
}
export const LikeObjSenddat =(obj)=>{
    return {
        type: LIKE_OBJ_SEND_TO_DATA,
        payload: obj,
    }
}


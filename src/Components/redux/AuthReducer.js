import {
    ADD_NEW_ADRESS,
    CHANGEADRESES,
    LIKE_OBJ_SEND_TO_DATA, LOAD_USER_DATA, LOAD_USER_DATA_ERROR,
    REMOVE_ADRESES,
    SAVE_ORDERS_USER, UPDATE_USER_ADRESS
} from "./Action/AuthACtion";


export const initialstate={
    token:null,
    loadding:true,
    user:{},
    adresess:[],
    userorders:[],
}

export const AuthReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case LOAD_USER_DATA:{
        return {
                ...state,
                loadding: false,
                token: sessionStorage.getItem("token"),
                adresess:JSON.parse(sessionStorage.getItem("useradress")),
                user:{
                    name:action.payload.userdata.name,
                    lastname:action.payload.userdata.lastname ? action.payload.userdata.lastname  : "",
                    phone:action.payload.userdata.phone ?  action.payload.userdata.phone : "",
                    email:action.payload.userdata.email,
                    success_check:action.payload.userdata.success_check,
                    type:action.payload.userdata.type,
                    bonus:action.payload.userdata.bonus ? action.payload.userdata.bonus : "0",
                },


            }
        }

        case LOAD_USER_DATA_ERROR:{
            return {
                ...state,
                loadding: true,
                adresess: sessionStorage.removeItem("useradress"),
                token: sessionStorage.removeItem("token"),
                user:{}
            }
        }


        case UPDATE_USER_ADRESS:{
            return {
                ...state,
                adresess:JSON.parse(sessionStorage.getItem("useradress"))
            }

        }
        case CHANGEADRESES :{
           state.adresess.forEach((i)=>{
               if(i.id===action.payload.id){
                   let keys =action.payload.key
                   i[keys]=action.payload.newvalue

               }
           })

            return {
               ...state,
            }
        }
        case REMOVE_ADRESES :{
            
            const newadresesdata = state.adresess.filter((elem)=>elem.id!==action.payload)
           return {
                ...state,
                adresess:[... newadresesdata]
            }

        }
        case ADD_NEW_ADRESS :{
         return{
            ...state,
            adresess: JSON.parse(sessionStorage.getItem("useradress")),
        }
        
        }
        case SAVE_ORDERS_USER :{
            state.userorders.push(action.payload)

        }
        return {
            ...state
        }

        default:
            return state
    }
}
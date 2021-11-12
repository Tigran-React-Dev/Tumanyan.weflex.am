import {
    ADD_NEW_ADRESS,
    CHANGEADRESES,
    LIKE_OBJ_SEND_TO_DATA,
    REMOVE_ADRESES,
    SAVE_ORDERS_USER
} from "./Action/AuthACtion";


export const initialstate={
    user:{
        name:"Անահիտ",
        lastname:"",
        phoneNumber:"91 12-34-56",
        email:"anahit@gmail.com"
    },
    adresess:[
        {id:1,adress:"Աճառյան",bulding:"18",apartment:"10"},

    ],
    userorders:[],
    likeproduct:{
        shaurma:[],
        salads:[],

    }


}




export const AuthReducer=(state=initialstate,action)=>{
    switch (action.type) {

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
        let newid=state.adresess.length+1
         
        let newobj={
            ...action.payload,
            id:newid,
        }
         state.adresess.push(newobj)

        return{
            ...state,
        }
        
        }
        case SAVE_ORDERS_USER :{
            state.userorders.push(action.payload)

        }
        return {
            ...state
        }
        case LIKE_OBJ_SEND_TO_DATA:{
            if(action.payload.category==="շաուրմա"){
                state.likeproduct.shaurma.push(action.payload)
            }
            if(action.payload.category==="աղցաններ"){

                state.likeproduct.salads.push(action.payload)
            }

        }
        return {
            ...state
        }




        default:
            return state
    }
}
import {act} from "react-dom/test-utils";
import {
    ADD_OLD_CHECK_TOBASKET,
    ADD_PRODUCT_CARD,
    ADD_PRODUCT_CARD_LOCAL,
    ADD_PRODUCT_CARD_ONLY,
    CLEARN_BASKET,
    DELETE_PRODUCT_TO_CARD, ON_MINUS, ON_PLUS
} from "./Action/CardAction";


export const initialState = {
    items: [],
    totalPrice: 0,

}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);


export const CardReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PRODUCT_CARD : {
            const arr1 = []
         if (!state.items.length) {
                arr1.push(action.payload)
             }else{
                let files= state.items.filter((e)=>{
                    return (e.name===action.payload.name && e.size===action.payload.size && e.itionalitem?.length==action.payload.itionalitem?.length && e.itionalitem?.[0]?.name===action.payload.itionalitem?.[0]?.name )
              })

                if(files.length===0){
                    arr1.push(action.payload)
                }else{
                    state.items.forEach(el=>{
                        if(el.name==files[0].name && el.size==files[0].size && el.itionalitem?.length == files[0].itionalitem?.length && el.itionalitem?.[0]?.name===files[0].itionalitem?.[0]?.name){
                            el.price+=action.payload.price
                            el.count+=action.payload.count
                        }
                    })
                }

            }
     const newArr = [
                ...state.items,
                ...arr1
            ]

            const totalPrice = getTotalPrice(newArr)
          const local ={
              ...state,
              items:newArr,
              totalPrice
            }
           localStorage.setItem("card",JSON.stringify(local))
       return {
                 ...state,
                 items: newArr,
                 totalPrice,
            }
            }

        case ADD_PRODUCT_CARD_ONLY:{
            const arrayy=[];
            if(!state.items.length){
                arrayy.push(action.payload)
             }else{
                const fol= state.items.filter((i)=>i.title===action.payload.title )
                 if(!fol.length){
                    arrayy.push(action.payload)  
                }else{
                    state.items.forEach(elem=>{
                        if(elem.title==fol[0].title){
                            elem.price+=action.payload.price
                            elem.count+=action.payload.count
                        }
                    })
                }
            }

            const newar =[
                ...state.items,
                ...arrayy
            ]

            const totalPrice = getTotalPrice(newar)

            const local ={
                ...state,
                items:newar,
                totalPrice
            }

            localStorage.setItem("card",JSON.stringify(local))
            return {
                   ...state,
                   items: newar,
                   totalPrice,
              }
         }
        case ADD_PRODUCT_CARD_LOCAL :{
       return{
               ...state,
               items:[...action.payload.items],
               totalPrice:action.payload.totalPrice
           }

        }
        case DELETE_PRODUCT_TO_CARD :{
            const filterone = state.items.filter((e)=>e._id!==action.payload)
            const totalPrice = getTotalPrice(filterone)
             const local ={
                items:filterone,
                totalPrice
            }
            localStorage.setItem("card",JSON.stringify(local))

            return {
               items: filterone,
                totalPrice
            }

          }
        case ON_PLUS:{

       if(action.payload.obj.count>0){
           state.items.forEach(elem=>{
               if(elem._id===action.payload.obj._id){
                   if(typeof (elem.priceitem)=="string"){
                       elem.price+=+elem.priceitem;
                       elem.count+=1
                   }else{
                       const filprice= elem.priceitem.find(e=>e.sizes.size==elem.size)

                       if(filprice){

                           let plusPrice=(action.payload.obj.bonus !=null) ? (+filprice.price-(+filprice.price/100 *+action.payload.obj.bonus))  : +filprice.price;
                           elem.price+=plusPrice;
                           elem.count+=1
                       }else{
                           let plusPrice=(action.payload.obj.bonus !=null) ? (+filprice.price-(+elem.priceitem[0].price/100*action.payload.obj.bonus) ) : +elem.priceitem[0].price;
                           elem.price+=plusPrice;
                           elem.count+=1
                       }
                   }


               }

           })
       }
       const totalPrice = getTotalPrice(state.items)
        return {
           ...state,
            totalPrice,
        }

        }

        case ON_MINUS:{
            const minusdata=[]

            if(action.payload.obj.count>1){
                state.items.forEach(elem=>{
                    if(elem._id===action.payload.obj._id){
                        if(typeof (elem.priceitem)=="string"){
                            elem.price-=+elem.priceitem;
                            elem.count-=1
                        }else{
                            const filprice= elem.priceitem.find(e=>e.sizes.size==elem.size)
                            if(filprice){
                                let plusPrice=(action.payload.obj.bonus !=null) ? (+filprice.price-(+filprice.price/100 *+action.payload.obj.bonus))  : +filprice.price;
                                elem.price-=plusPrice;
                                elem.count-=1
                            }else{
                                let plusPrice=(action.payload.obj.bonus !=null) ? (+filprice.price-(+elem.priceitem[0].price/100*action.payload.obj.bonus) ) : +elem.priceitem[0].price;
                                elem.price-=plusPrice;
                                elem.count-=1
                            }
                        }


                    }

                })
            }else{
                const filtertu = state.items.filter((e)=>e._id!==action.payload)
                   filtertu.forEach(e=>{
                    minusdata.push(e)
                })
            }
            const totalPrice = getTotalPrice(state.items)
            return {
                ...state,
                items: minusdata.length ? minusdata : [...state.items],
                totalPrice,
            }

        }
        case CLEARN_BASKET:{
           localStorage.removeItem("card")
            return{
              ...state,
              items:[],
              totalPrice:0
            }
        }
        case ADD_OLD_CHECK_TOBASKET:{
            state.items=[...state.items,...action.payload]
            const totalPrice = getTotalPrice(state.items)
            const local ={
                ...state,
                totalPrice,
            }
            localStorage.setItem("card",JSON.stringify(local))

            return{
                ...state,
                totalPrice,
              }
            }

     default:
            return state
    }
}

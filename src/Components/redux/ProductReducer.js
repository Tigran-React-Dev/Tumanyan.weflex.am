import shaurma from "../../images/product/Shaurma 1.png";
import vegan from "../../images/product/vegan.png"
import {LIKE_PRODUCT, LOAD_DATA} from "./Action/ProductAction";


export const initialState = {

    product:[
        // {
        //     id:1,
        //     title:"Հավի շաուրմա",
        //     category:"շաուրմա",
        //     image:shaurma,
        //     price:[{size:"1",price:1200},{size: "2",price: 1500},{size:"3",price:1600}],
        //     bonus:10,
        //     like:false,
        //     itional:[]
        //
        // },
        // {
        //     id:2,
        //     title:"Խոզի շաուրմա",
        //     category:"շաուրմա",
        //     image:shaurma,
        //     price:[{size:"1",price:1200},{size: "2",price: 1500},{size:"3",price:1600}],
        //     bonus:20,
        //     like:false,
        //     itional:[],
        //
        //
        // },
        // {
        //     id:3,
        //     title:"Հորթի շաուրմա",
        //     category:"շաուրմա",
        //     image:shaurma,
        //     price:[{size:"1",price:1200},{size: "2",price: 1500},{size:"3",price:1600}],
        //     bonus:0,
        //     like:false,
        //     itional:[],
        //
        // },
        // {
        //     id:4,
        //     title:"Գառան շաուրմա",
        //     category:"շաուրմա",
        //     image:shaurma,
        //     price:[{size:"1",price:1200},{size: "2",price: 1500},{size:"3",price:1600}],
        //     bonus:0,
        //     like:false,
        //     itional:[]
        //
        // },
        // {
        //     id:5,
        //     title:"մայոնեզ",
        //     category:"սոուսներ",
        //     image:shaurma,
        //     price:[{price:20,}],
        //     bonus:0,
        //     like:false,
        //     description:"20գ"
        //
        // },
        //
        //
        //

    ],
    grandfufet:[
        {
            id:6,
            name:"վեգան",
            category:"աղցաններ",
            image:vegan,
            prices:[{price:480,sizes:{size:"1"}},{price:500,sizes:{size:"2"}}],
            bonus:0,
            like:false,
            ingredients:[
                {id:1,ingredient:"Սոխ",quantity:"50 գ"},
                {id:2,ingredient:"Կծու բիբար",quantity:"50 գ"},
                {id:3,ingredient:"Կարտոֆիլ",quantity:"20 գ"},
                {id:4,ingredient:"Հավ",quantity:"150 գ"},
                {id:5,ingredient:"Կանաչի",quantity:"250 գ"},
                {id:6,ingredient:"Լոլիկ",quantity:"50 գ"},
                {id:7,ingredient:"Լոլիկ",quantity:"50 գ"},
                {id:8,ingredient:"Լոլիկ",quantity:"50 գ"},
                {id:9,ingredient:"Լոլիկ",quantity:"50 գ"},
                {id:10,ingredient:"Լոլիկ",quantity:"50 գ"},
            ]
        },

    ],
    recoment:[
        {
            id:10,
            title:"Սեվ Թի-Բուրգեր",
            category:"recoment",
            image:shaurma,
            price:[{price:1500,size:"M"}],
            bonus:0,
            like:false,
            description:"Տավարի մսով"

        },
        {
            id:11,
            title:"Բուրգեր",
            category:"recoment",
            image:shaurma,
            price:[{price:1100,size:"M"}],
            bonus:0,
            like:false,
            description:"մսով"

        }

    ],


    Sauces:[
        {
            id:1,
            title:"մայոնեզ",
            category:"սոուսներ",
            image:shaurma,
            price:[{price:20,}],
            bonus:0,
            like:false,
            description:"20գ"

        }
    ],


}



export const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
        case LOAD_DATA:{
          return{
              ...state,
              product:action.payload.data
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









import React, {createContext, useContext, useState} from "react";
import shaurma from "../../images/product/shaurma.png"
import shaurmabig from "../../images/product/bigshaurma.png"
import axios from "axios";
const ProductContext = createContext({});



const ProductProvider =({children})=>{
    let defaults="Երեվան";
    const [activSub, setActivSub]= useState([])
    const [activeCityname,setactiveCityname]=useState(defaults.toLowerCase())
    const [languae,setLanguage]=useState("ՀԱՅ")
    const [defaultCity,setDefaultSity]=useState(defaults.toLowerCase());
    const [activeMenuitem,setactiveMenuitem]=useState({})
    const [adressCountry,setAdressCountry]=useState([])
    const [menuCategorup,setMenuCategrup] =useState([
       {id:1, name:"Երեվան", sup:[]},
       {id:2, name:"ծաղկաձոր", sup:[]}
     ]);

    const changeLang=(lang)=>{
        setLanguage(lang)
    }
    const ChangeACtivSup =(sup,name)=>{
        setActivSub(sup)
        setactiveCityname(name)
    }

    const getData=()=>{

     const responsmenu=axios.get(process.env.REACT_APP_API_URL + `/category`)
       responsmenu.then(res=>{
            const sityone="Երեվան";
            const sityty="Ծաղկաձոր";
            const dataone =menuCategorup.find((i)=>i.id===1);
            const datatoo =menuCategorup.find((i)=>i.id===2);
            dataone.sup=res.data.filter(e=>e.city.name.toLowerCase().includes(sityone.toLowerCase()))
            datatoo.sup=res.data.filter(e=>e.city.name.toLowerCase()==sityty.toLowerCase())
            setMenuCategrup([...menuCategorup])
            if(defaultCity==sityone){
                setActivSub([...dataone.sup])
            }else{
                setActivSub([...datatoo.sup])
            }
         }).catch(err=>console.log(err))

      }

    return <ProductContext.Provider value={{
        menuCategorup,
        setMenuCategrup,
        activSub,
        setActivSub,
        ChangeACtivSup,
        adressCountry,
        setAdressCountry,
        activeCityname,
        setactiveCityname,
        changeLang,
        languae,
        defaultCity,
        setDefaultSity,
        getData,
        setactiveMenuitem,
        activeMenuitem,
        setLanguage,

    }}>
        {children}
    </ProductContext.Provider>
}


const useProduct=()=>{
    return useContext(ProductContext)
}


export {ProductProvider,useProduct}
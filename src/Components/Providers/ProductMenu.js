import React, {createContext, useContext, useState} from "react";
import shaurma from "../../images/product/shaurma.png"
import shaurmabig from "../../images/product/bigshaurma.png"
import axios from "axios";
const ProductContext = createContext({});



const ProductProvider =({children})=>{

    const [activSub, setActivSub]= useState([])
    const [activeCityname,setactiveCityname]=useState("Երեվան")
    const [languae,setLanguage]=useState("ՀԱՅ")
    const [defaultCity,setDefaultSity]=useState("Երեվան");
    const [activeMenuitem,setactiveMenuitem]=useState({})
    
   



   const menuCategorup =[
       {
           id:1,
           name:"Երեվան",
           sup:[]
       },
       {
           id:2,
           name:"ծաղկաձոր",
           sup:[
                {id:1,title:"շաուրմա",category:"շաուրմա",images:shaurma,imagesbig:shaurmabig},

               ]
       }
   ];
   
   const [mecdata,setmecdata]=useState(menuCategorup)
    const adressCountry=[

                {id:1,title:"Թումանյան",adress:"Թումանյան 32/36",date:"24/7",city:"Երեվան",phone:["81-88","+374 11 81-88-88","+374 10 54-99-33"]},
                {id:2,title:"Դավթաշեն",adress:"Տիգրան Պետրոսյան 27/2",date:"10:00-02:00",city:"Երեվան",phone:["81-88","+374 11 81-88-89"]},
                {id:3,title:"Մեգա մոլ",adress:"Գայի 16",date:"10:00-02:00",city:"Երեվան",phone:["81-88","+374 11 81-88-90"]},
                {id:4,title:"Կոմիտաս",adress:"Կոմիտաս 50/50",date:"10:00-02:00",city:"Երեվան",phone:["81-88"," +374 11 81-88-91"]},
                {id:5,title:"Երևան մոլ",adress:"Արշակունյաց պող. 34/3",date:"10:00-02:00",city:"Երեվան",phone:["81-88","+374 11 81-88-92"]},
                {id:6,title:"Էրեբունի մոլ",adress:"Էրեբունի 17",date:"10:00-02:00",city:"Երեվան",phone:["81-88","+374 11 81-88-88"]},
                {id:7,title:"ծաղկաձորն",adress:"ծաղկաձոր",date:"24/7",city:"ծաղկաձոր",phone:["81-88","+374 11 81-88-88"," +374 10 54-99-33","+374 10 54-99-44"]},
            ];

    const getData=()=>{

     const responsmenu=axios.get(process.env.REACT_APP_API_URL + `/category`)

        responsmenu.then(res=>{
            const dataone =mecdata.find((i)=>i.id===1);
            const datatoo =mecdata.find((i)=>i.id===2);

            dataone.sup=res.data.filter(e=>e.city_id==1)
            datatoo.sup=res.data.filter(e=>e.city_id==2)
            setmecdata([...mecdata])
            setActivSub([...dataone.sup])
         }).catch(err=>console.log(err))




    }

    const GrandBufeeMenu=[
        {id:1,title:"աղցաններ",category:"աղցաններ"},
        {id:2,title:"ապուրներ",category:"ապուրներ"},
        {id:3,title:"խավարտներ",category:"խավարտներ"},
        {id:4,title:"տաք ուտեստներ",category:"տաք ուտեստներ"},
        {id:5,title:"սուրճ, թեյ",category:"սուրճ, թեյ"},
        {id:6,title:"կարկանդակներ",category:"կարկանդակներ"},
        {id:7,title:"ըմպելիքներ",category:"ըմպելիքներ"},
        {id:8,title:"այլ",category:"այլ"},

    ];
     const [grandBufeData,setGranbufeData]=useState(GrandBufeeMenu)

   


    const changeLang=(lang)=>{
    setLanguage(lang)
   }

   const ChangeACtivSup =(sup,name)=>{
       setActivSub(sup)
       setactiveCityname(name)
      
   }


    return <ProductContext.Provider value={{
        menuCategorup,
        activSub,
        setActivSub,
        ChangeACtivSup,
        adressCountry,
        activeCityname,
        setactiveCityname,
        changeLang,
        languae,
        defaultCity,
        setDefaultSity,
        setmecdata,
        mecdata,
        getData,
        setactiveMenuitem,
        activeMenuitem,
        grandBufeData,




    }}>
        {children}
    </ProductContext.Provider>
}


const useProduct=()=>{
    return useContext(ProductContext)
}


export {ProductProvider,useProduct}
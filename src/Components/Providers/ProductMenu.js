import React, {createContext, useContext, useState} from "react";
import shaurma from "../../images/product/shaurma.png"
import shaurmabig from "../../images/product/bigshaurma.png"
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
               {id:2,title:"Արագ սնունդ",category:"Արագ սնունդ",images:shaurma,imagesbig:shaurmabig},
               {id:3,title:"Խորոված",category:"Խորոված",images:shaurma,imagesbig:shaurmabig},
               {id:4,title:"աղցան",category:"աղցան",images:shaurma,imagesbig:shaurmabig},
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

        const nyu= [
            {id:1,title:"շաուրմա",category:"շաուրմա",images:shaurma,imagesbig:shaurmabig},
            {id:2,title:"Արագ սնունդ",category:"Արագ սնունդ",images:shaurma,imagesbig:shaurmabig},
            {id:3,title:"Խորոված",category:"Խորոված",images:shaurma,imagesbig:shaurmabig},
            {id:4,title:"աղցան",category:"աղցան",images:shaurma,imagesbig:shaurmabig},
            {id:5,title:"քաբաբ, իքիբիր",category:"քաբաբ, իքիբիր",images:shaurma,imagesbig:shaurmabig},
            {id:6,title:"կոմբո",category:"կոմբո",images:shaurma,imagesbig:shaurmabig},
            {id:7,title:"մանկական",category:"մանկական",images:shaurma,imagesbig:shaurmabig},
            {id:8,title:"ըմպելիքներ",category:"ըմպելիքներ",images:shaurma,imagesbig:shaurmabig},
            {id:9,title:"սոուսներ",category:"սոուսներ",images:shaurma,imagesbig:shaurmabig},

        ]
        const data =mecdata.find((i)=>i.id===1);

        data.sup=nyu
        setmecdata([...mecdata])
        setActivSub([...data.sup])


    }


  
      const itionalProduct=[
        {id:1,product:"Սոխ",price:"0",type:"Բանջարեղեն",isChecked:false},
        {id:2,product:"Կծու բիբար",price:"0",type:"Բանջարեղեն",isChecked:false},
        {id:3,product:"Կարտոֆիլ",price:"0",type:"Բանջարեղեն",isChecked:false},
        {id:4,product:"Լոլիկ",price:"0",type:"Բանջարեղեն",isChecked:false},
        {id:5,product:"Կանաչի",price:"0",type:"Բանջարեղեն",isChecked:false},
        {id:6,product:"Մայոնեզ",price:"20",type:"Սոուսներ",isChecked:false},
        {id:7,product:"Սխտոր",price:"20",type:"Սոուսներ",isChecked:false},
        {id:8,product:"Կետչուպ",price:"20",type:"Սոուսներ",isChecked:false},

       ];

     const ityonalcopy={
         1:[...itionalProduct],
         2:[...itionalProduct],
         3:[...itionalProduct],
         4:[...itionalProduct],
     }

      const [itionaldata,setItionaldata]=useState(ityonalcopy)

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
        itionaldata,
        setItionaldata,
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
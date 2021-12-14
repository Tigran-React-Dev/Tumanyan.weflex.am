import {createContext, useContext, useState} from "react"
import sld1 from "../../images/product/havm.png";
import rec1 from "../../images/product/rec1.png";
import rec2 from "../../images/product/rec2.png";
import rec3 from "../../images/product/rec3.png";
import rec4 from "../../images/product/rec4.png";
import slideritem from "../../images/product/slideritemproject.png";
import sev from "../../images/product/sev burger 1 (1).png";
import spitak from "../../images/product/spitak burger.png";
import paraton from "../../images/product/paraton.png";
import foodtrack1 from "../../images/product/foodtack1.png";


const SliderContext = createContext({});


const SliderProvider =({children})=>{
    const [activeProjectdata,setActiveProjectdata]=useState({})
    const [menejments,setMenejmentdata]=useState([])
    const [aboutDataone,setAboutDataone]=useState([])
    const [sliderHome1,setSliderHome1]=useState([])
    const [homepageReclam2,setHomePageReclam2]=useState([])
    const [jobs ,SetJobs]=useState([])
    const [project,setproject]=useState([])
    const Reclam = [
        {id:1,images:rec1,description:"Գրանդ բուֆֆե"},
        {id:2,images:rec2,description:"Food truck"},

    ];
    const aboutStep=[
        {id:1,stepARM:"Զանգահարիր",stepENG:"Call",stepRUS:"Вызов"},
        {id:2,stepARM:"Օնլայն պատվիրիր",stepENG:"Order online",stepRUS:"Заказать онлайн"},
        {id:3,stepARM:"օգտագործիր հավելվածը",stepENG:"use the app",stepRUS:"использовать приложение"},
    ];
    const contacts1 ={
        "Առաջարկների համար":"info@tumanyan.am",
        "PR բաժին":"info@tumanyanpr.am",
        "HR բաժին":"info@tumanyanhr.am",


    }
    const contacts2={
        "Գլխավոր օֆիս":"0040, ՀՀ, ք․ Երևան  Թումանյան փ. 32",
        "Տնօրենի գրասենյակ":"+374 91 12-34-56"
    }
    const aboutinfo={
        title:"Մեր մասին",
        info:"'Թումանյան Շաուրմա'-ն հիմնադրվել է 1998 թվականին:'Թումանյան Շաուրմա'-ի առաջին մասնաճյուղը տեղակայված էր Թումանյան-Աբովյան փողոցների խաչմերուկում,որը սկզբնական շրջանում զբաղեցնում էր բավականին փոքր զբաղեցնում էր բավականին փոքր... "
    }





     ////FoodTRUCK-------DATA///////

    const FoodTruck=[


    ];

    const [foodTruckdata,setFootruckData]=useState([])

    ////ABOUTUS-------DATA///////


    return <SliderContext.Provider value={{
        // sliders,
        sliderHome1,
        setSliderHome1,
        Reclam,
        homepageReclam2,
        setHomePageReclam2,
        aboutinfo,
        aboutStep,
        jobs,
        SetJobs,
        contacts1,
        contacts2,
        project,
        setproject,
        activeProjectdata,
        setActiveProjectdata,
        foodTruckdata,
        setFootruckData,
        aboutDataone,
        menejments,
        setMenejmentdata,
        setAboutDataone
    }}>
        {children}
    </SliderContext.Provider>
}

const useSlider =()=>{
    return useContext(SliderContext)
}

export {SliderProvider,useSlider}
import {createContext, useContext, useState} from "react"
import rec1 from "../../images/product/rec1.png";
import rec2 from "../../images/product/rec2.png";



const SliderContext = createContext({});


const SliderProvider =({children})=>{
    const [activeProjectdata,setActiveProjectdata]=useState({})
    const [menejments,setMenejmentdata]=useState([])
    const [aboutDataone,setAboutDataone]=useState([])
    const [sliderHome1,setSliderHome1]=useState([])
    const [homepageReclam2,setHomePageReclam2]=useState([])
    const [jobs ,SetJobs]=useState([])
    const [project,setproject]=useState([])
    const [foodTruckdata,setFootruckData]=useState([])
    const Reclam = [
        {id:1,images:rec1,description:"Գրանդ բուֆֆե",descriptionRU:"Гранд Буфет",descriptionENG:"Grand Buffet"},
        {id:2,images:rec2,description:"Ֆուդ տրաք",descriptionRU:"Фуд Трек",descriptionENG:"Food truck"},

    ];
    const aboutStep=[
        {id:1,stepARM:"Զանգահարիր",stepENG:"Call",stepRUS:"Звонить"},
        {id:2,stepARM:"Օնլայն պատվիրիր",stepENG:"Order online",stepRUS:"Заказать онлайн"},
        {id:3,stepARM:"օգտագործիր հավելվածը",stepENG:"Use the app/application",stepRUS:"Использовать приложение"},
    ];
  
    const contactMail=[
        {id:1,position:"Առաջարկների համար",positionRU:"За предложения",positionENG:"For the offers",mail:"info@tumanyan.am"},
        {id:2,position:"PR բաժին",positionRU:"Отдел по связам с общественностью",positionENG:"PR Departement",mail:"info@tumanyan.am"},
        {id:3,position:"HR բաժին",positionRU:"Отдел кадров",positionENG:"HR Departement ",mail:"info@tumanyan.am"},
        {id:4,position:"Գլխավոր օֆիս",positionRU:"Главный офис",positionENG:"Head office",mail:"info@tumanyan.am"},
        {id:5,position:"Տնօրենի գրասենյակ",positionRU:"Кабинет директора",positionENG:"Director's Office",mail:"+374 91 12-34-56"},
    ]

    const aboutinfo={
        title:"Մեր մասին",
        info:"'Թումանյան Շաուրմա'-ն հիմնադրվել է 1998 թվականին:'Թումանյան Շաուրմա'-ի առաջին մասնաճյուղը տեղակայված էր Թումանյան-Աբովյան փողոցների խաչմերուկում,որը սկզբնական շրջանում զբաղեցնում էր բավականին փոքր զբաղեցնում էր բավականին փոքր... "
    }

    return <SliderContext.Provider value={{
        sliderHome1,
        setSliderHome1,
        Reclam,
        homepageReclam2,
        setHomePageReclam2,
        aboutinfo,
        aboutStep,
        jobs,
        SetJobs,
        contactMail,
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
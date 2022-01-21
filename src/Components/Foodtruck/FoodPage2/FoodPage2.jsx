import React from 'react';
import css from "./Foodpage2.module.scss"
import auto from "../../../images/product/Pic_Big.png";
import sld1 from "../../../images/product/sldimg1.png";
import sld2 from "../../../images/product/sldimg2.png"
import Page2Slider from "./Page2Slider/Page2Slider";
import {useProduct} from "../../Providers/ProductMenu";

const FoodPage2 = () => {
    const {languae}=useProduct()
    const info ={
        title:"Ունե՞ք առաջիկա միջոցառում, ցանկանու՞մ եք պատվիրել մեր ֆուդ թրաքը, \n" +
            " այդ դեպքում լրացրեք ստորև ինֆորմացիան կամ զանգահարեք +374 44 32 55 54 հեռախոսահամարով:",
        titleRU:"ЗАБРОНИРОВАТЬ FOOD TRUCK\n" +
            "У вас есть предстоящее мероприятие, хотите ли вы заказать нашу Фудтрак, в этом случае заполните информацию ниже или позвоните по телефону +374 44 32 55 54.",
        titleENG:"BOOK FOOD TRUCK\n" +
            "You have an upcoming event, would you like to order our Food Truck, fill in the information below or call +374 44 32 55 54.",
        description:"Հայաստանում իր տեսակի մեջ եզակի Food   Truck-ը գործարկվել է 2021 թվականի մայիսի 1-ից:   Մեքենան   այնպես է հարմարեցված,   որ   հենց տեղում հնարավոր   է   պատրաստել   թարմ շաուրմաներ, բուրգերներ, իքիբիր, քաբաբ եւ այլ համեղ ուտեստներ:",
        descriptionRU:"Уникальный в своем роде в Армении, Food Truck запущен с 1 мая 2021 года.\n" +
            "Машина адаптирован таким образом, что на месте можно приготовить свежую\n" +
            "шаурмы, бургеры, икибир, кебаб и другие вкусные блюда.",
        descriptionENG:"Food Truck, unique in its kind in Armenia, has been launched since May 1, 2021.\n" +
            "The car is so adapted that it is possible to cook fresh shaurmas, burgers, ikibirs,\n" +
            "kebab and other delicious dishes on the spot.",
        descriptiontop:"Մեքենան կարող եք հանդիպել ոչ միայն քաղաքի տարբեր հատվածներում, այլ\n" +
            "նաեւ   տարբեր   էքսպոների   եւ   միջոցառումների   ընթացքում:   Քաղաքի\n" +
            "ամենասիրելի համը, շնորհիվ մեր ֆուդ թրաքի, հասանելի է երկրի ցանկացած\n" +
            "մարզում:",
        descriptiontopRU:"Машину   можно   встретить   не   только   в   разных   частях   города,   но   и   на различных   выставках   и   мероприятиях.   Любимый   вкус   города,   благодаря нашему Фудтраку, доступен в любом регионе страны.",
        descriptiontopENG:"The car can be found not only in different parts of the city, but also during various Expos and events. The favorite flavor of the city, thanks to our Food Truck, is available in any region of the country.",
    }

    const sizeinfo={
        title:"չափեր",
        titleENG:"SIZES",
        titleRU: "РАЗМЕРЫ",
        description:[
            {id:1,step:"Ընդհանուր՝ 33.28 քմ",stepRU:"Всего: 33.28 кв.м",stepENG:"Total: 33.28 sq.m"},
            {id:2,step:"Բարձրություն՝ 2.4",stepRU:"Высота: 2.4",stepENG:"Height: 2.4"},
            {id:3,step:"Լայնություն՝ 6.30",stepRU:"Ширина 6.30",stepENG:"Width: 6.30"},
            {id:4,step:"Հոսանքի ծախս՝   4-5 կվտ",stepRU:"Расход электроэнергии: 4-5 кВт",stepENG:"Power consumption: 4-5 kW"},

        ],
      }

    const slideritem=[
        {id:1,image:sld1},{id:1,image:sld2},
    ]
    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }
    const fontproprty2={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Regular" : languae=="ENG" ?
                "manrope-reg" : languae=="РУС" ?
                    "manrope-reg" : null
    }


    return (
         <div className={css.page2container}>
            <div className={css.page2hdr}>
               <div className={css.fodtrack}>
                   <img src={auto} alt=""/>
               </div>
            </div>
             <div className={css.textblok}>
                   <h2 style={fontproprty}>
                       {languae=="ՀԱՅ" ? info.title : languae=="ENG" ? info.titleENG : languae=="РУС" ? info.titleRU : null}
                   </h2>
                 <p style={fontproprty2}>{languae=="ՀԱՅ" ? info.description : languae=="ENG" ? info.descriptionENG : languae=="РУС" ? info.descriptionRU : null}<br/> <br/>
                     {languae=="ՀԱՅ" ? info.descriptiontop : languae=="ENG" ? info.descriptiontopENG : languae=="РУС" ? info.descriptiontopRU : null}</p>
           </div>
             <div className={css.sliderandsize}>
                <div className={css.sizetext}>
                     <h2 style={fontproprty}>{languae=="ՀԱՅ" ? sizeinfo.title : languae=="ENG" ? sizeinfo.titleENG : languae=="РУС" ? sizeinfo.titleRU : null}</h2>
                    <p style={fontproprty2}>{sizeinfo.description.map((st)=>{
                             return(
                                 <p key={st.id}>
                                     {languae=="ՀԱՅ" ? st.step : languae=="ENG" ? st.stepENG : languae=="РУС" ? st.stepRU : null}  <br/>
                                 </p>
                             )
                    })}</p>
                </div>
                 <div className={css.sizeslider}>
                      <Page2Slider slideritem={slideritem}/>
                 </div>
             </div>
             <div className={css.videoblok}>
                 <iframe  src="https://www.youtube.com/embed/T1iXsT-wOZ0"
                         title="YouTube video player" frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen></iframe>
             </div>
        </div>
    );
};

export default FoodPage2;
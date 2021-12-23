import React from 'react';
import css from "./AboutPages1.module.scss";
import brendlogo1 from "../../../images/icons/brend.png";
import step1 from "../../../images/icons/aboutbrendbg.png";
import setep2 from "../../../images/icons/aboutimg1.png";
import setep3 from "../../../images/icons/abutimg2.png";
import setep4 from "../../../images/icons/aboutimg3.png";
import setep5 from "../../../images/haccp.png";
import icon1 from "../../../images/icons/icon1au.png";
import icon2 from "../../../images/icons/icon2au.png";
import icon3 from "../../../images/icons/icon3au.png";
import icon4 from "../../../images/icons/icon4au.png";
import {useProduct} from "../../Providers/ProductMenu";
const AboutPages1 = () => {

    const {languae}=useProduct()

    const aboutpagedata1=[
        {id:1, title:"ներկայումս",titleRU:"В НАСТОЯЩИЙ МОМЕНТ",titleENG:"AT PRESENT",image:step1},
        {id:2,
            title:"Ներառելով «Գրանդ բուֆեն», «Թումանյան Շաուրմա»-ն ունի 8 սննդի կետ և 1 Ֆուդ թրաք (Food truck)։",
            titleRU: "В настоящий момент, включая «Гранд Буффет», «Туманян Шаурма»\n" +
                "имеет 8 точек питания и 1 фудтрак.",
            titleENG: "At the moment, including the \"Grand Buffet\", \"Tumanyan Shaurma\" has 8\n" +
                "food branches and 1 Food truck.",
            image:setep2},
        {id:3,
            title:"«Թումանյան Շաուրմա»-ն ամսական սպասարկում է 100 000 հաճախորդի։",
            titleRU: "«Туманян Шаурма» обслуживает более 100 000 клиентов в месяц.",
            titleENG: "Tumanyan Shaurma serves over 100,000 clients a month.",
            image:setep3},
        {id:4,
            title:"Ցանցի առաքման ծառայությունը խոշորագույններից մեկն է ողջ Հայաստանում։",
            titleRU: "Сетевая служба доставки - одна из крупнейших в Армении.",
            titleENG: "The network delivery service is one of the largest in Armenia.",
            image:setep4},
        {id:5,
            title:"«Թումանյան Շաուրմա»-ն ներդրել է HACCP որակի չափանիշները, որոնք կիրառվում են ցանցի կողմից՝ վերահսկելով սննդամթերքի արտադրության և պահպանման անվտանգությունը:",
            titleRU: "«Туманян Шаурма» ввел стандарты качества HACCP (анализ рисков и\n" +
                "критические контрольные точки), которые в настоящее время\n" +
                "используются сетью для контроля безопасности производства и\n" +
                "хранения продуктов питания.",
            titleENG: "Tumanyan Shaurma has introduced HACCP (Hazard Analysis and Critical\n" +
                "Control Points) quality standards, which are currently used by the network to\n" +
                "control the safety of food production and storage.",
            image:setep5},
    ];


    const stepsfoter=[
        {id:1,icon:icon1,
            title:"Որակ",
            titleRU:"Качество",
            titleENG:"Quality",
            description:"Պահել որակի ամենաբարձր չափանիշները",
            descriptionRU: "Соблюдать самые высокие стандарты качества",
            descriptionEng: "Comply with the highest quality standards",

        },
        {id:2,icon:icon2,
            title:"Ծրագիր",
            titleRU:"Программа",
            titleENG:"Program",
            description:"Բացել նոր մասնաճյուղեր և թարմացնել ճաշացանկը:",
            descriptionRU: "Открывая новые сети и обновляя меню",
            descriptionEng: "Opening new branches and updating the\n" +
                "menu"
        },
        {id:3,icon:icon3,
            title:"Թափանցիկություն",
            titleRU:"Прозрачность",
            titleENG:"Transparency",
            description:"Աշխատել թափանցիկ, պատասխանատու և ազնիվ։",
             descriptionRU: "Работать прозрачно, ответственно и честно",
              descriptionEng: "Work transparently, responsibly and honestly",
        },
        {id:4,icon:icon4,
            title:"հասանելիություն",
            titleRU:"Доступность",
            titleENG:" Availability",
            description:"Լինել հասանելի յուրաքանչյուր սեգմենտի համար։",
            descriptionRU:"Быть доступными для всех",
            descriptionEng:"Be accessible to everyone"
        },
    ]

    const Brend={
        title:"«Թումանյան Շաուրմա». բրենդ, որը շուկայում է 90-ականներից եւ\n" +
            "մատուցում է քաղաքի ամենահամեղ շաուրման եւ ոչ միայն:",
        titleRU:"«Туманян Шаурма»: бренд, работающий на рынке с 90-х годов,\n" +
            "предлагает самую вкусную шаурму в городе и многое другое.",
        titleENG:"\"Tumanyan Shaurma\": a brand that has been on the market since the 90s,\n" +
            "offering the most delicious shaurma in the city and much more."
    }
    const BrendText={
        text:"«Թումանյան Շաուրմա»-ն Հայաստանում արագ սննդի ոլորտի\n" +
            "առաջատար ցանցերից է, որը հիմնադրվել է 1998 թվականին՝ կարճ\n" +
            "ժամանակ անց դառնալով երեւանցիների սիրելի վայրը:\n" +
            "Առաջին մասնաճյուղը բացվել է եւ մինչեւ այժմ գործում է Թումանյան 32/36\n" +
            "հասցեում, իսկ արդեն 2015 թ.-ից մասնաճյուղի երկրորդ հարկում բացվել\n" +
            "է «Գրանդ Բուֆֆե»-ն, որտեղ մատուցվում են տարատեսակ ուտեստներ՝\n" +
            "ապուրներ, խավարտներ, հացաբուլկեղեն:",
        textRU:"«Туманян Шаурма» - одна из ведущих сетей быстрого питания в\n" +
            "Армении, который был основан в 1998 году и вскоре стал самым\n" +
            "любимым местом ереванцев. Первый филиал открылся и до сих пор\n" +
            "работает на улице Туманяна 32/36, и уже в 2015 году на втором этаже\n" +
            "филиала открылся «Гранд Буфет», где подаются разнообразные блюда:\n" +
            "супы, гарниры, выпечка.",
        textENG:"“Tumanyan Shaurma” is one of the leading fast food chains in Armenia,\n" +
            "which was founded in 1998 and soon became the favorite place for Yerevan\n" +
            "residents.\n" +
            "The first branch was opened and still operates at 32/36 Tumanyan Street,\n" +
            "and already in 2015, the “Grand Buffet” opened on the second floor of the\n" +
            "branch, where a variety of dishes are served: soups, side dishes, pastries.",
    }


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
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }

    return (
        <div className={css.pages1container}>
             <div className={css.brendblok1}>
                  <div className={css.brendlogo}>
                       <h1 style={fontproprty}>{languae=="ՀԱՅ" ? "ԲՐԵՆԴ" : languae=="ENG" ? "MISSION" : languae=="РУС" ? "МИССИЯ" : null}</h1>
                       <p style={fontproprty3}>{languae=="ՀԱՅ" ? "Սկսած 1998 թվականից" : languae=="ENG" ? "Since 1998" : languae=="РУС" ? "Начиная с 1998" : null}</p>
                  </div>
                 <div className={css.textbrend1}>
                    <h6 style={fontproprty}>{languae=="ՀԱՅ" ? Brend.title : languae=="ENG" ? Brend.titleENG : languae=="РУС" ? Brend.titleRU : null}</h6>
                     <p style={fontproprty3}>{languae=="ՀԱՅ" ? BrendText.text : languae=="ENG" ? BrendText.textENG : languae=="РУС" ? BrendText.textRU : null}</p>
                 </div>

             </div>
            <div className={css.brendsteps}>
                {
                    aboutpagedata1.map((elem,index)=>{
                        return(
                            <>
                                {
                                    index===0 ? <div className={css.step0} key={elem.id} style={{backgroundImage:`url(${elem.image})`}}>
                                             <h1 style={fontproprty}>{languae=="ՀԱՅ" ? elem.title : languae=="ENG" ? elem.titleENG : languae=="РУС" ? elem.titleRU : null}</h1>
                                        </div>
                                        :
                                    index===4 ? <div className={css.haccpblok} key={elem.id}>
                                           <div className={css.haccplogo}>
                                               <img src={elem.image} alt=""/>
                                           </div>
                                        <div className={css.haccpText}>
                                            <div className={css.indexandtitle}>
                                                <h1 style={fontproprty}>{index}</h1>
                                                <h2 style={fontproprty3}>Hazard Analysis and Critical Control Point</h2>
                                            </div>
                                            <p style={fontproprty2}>{languae=="ՀԱՅ" ? elem.title : languae=="ENG" ? elem.titleENG : languae=="РУС" ? elem.titleRU : null}</p>
                                        </div>
                                        </div>
                                        :
                                        <div className={css.stepsaloy} key={elem.id}>
                                           <div className={css.indexandlogo}>
                                               <h1 style={fontproprty}>{index}</h1>
                                               <img src={elem.image} alt=""/>
                                           </div>
                                            <p style={fontproprty2}>{languae=="ՀԱՅ" ? elem.title : languae=="ENG" ? elem.titleENG : languae=="РУС" ? elem.titleRU : null}</p>
                                        </div>

                                }


                            </>
                        )
                    })

                }

            </div>
           <div className={css.page1stepsfooterborder}/>
            <div className={css.page1stepsfooter}>

                <h1>{languae=="ՀԱՅ" ? "ԱՌԱՔԵԼՈՒԹՅՈՒՆ" : languae=="ENG" ? "MISSION" : languae=="РУС" ? "МИССИЯ" : null}</h1>
                <div className={css.stepsfoterblok}>
                    {
                        stepsfoter.map((elem)=>{
                            return(
                                <div className={css.itemstep} key={elem.id}>
                                   <div className={css.iconandtitle}>
                                       <img src={elem.icon} alt=""/>
                                       <h1 style={fontproprty}>{languae=="ՀԱՅ" ? elem.title : languae=="ENG" ? elem.titleENG : languae=="РУС" ? elem.titleRU : null}</h1>
                                   </div>

                                    <p style={fontproprty2}>{languae=="ՀԱՅ" ? elem.description : languae=="ENG" ? elem.descriptionEng : languae=="РУС" ? elem.descriptionRU : null}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default AboutPages1;
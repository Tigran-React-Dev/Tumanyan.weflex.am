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
const AboutPages1 = () => {

    const aboutpagedata1=[
        {id:1, title:"ներկայումս",image:step1},
        {id:2, title:"Ներառելով «Գրանդ բուֆեն», «Թումանյան Շաուրմա»-ն ունի 8 սննդի կետ և 1 Ֆուդ թրաք (Food truck)։",image:setep2},
        {id:3, title:"«Թումանյան Շաուրմա»-ն ամսական սպասարկում է 100 000 հաճախորդի։",image:setep3},
        {id:4, title:"Ցանցի առաքման ծառայությունը խոշորագույններից մեկն է ողջ Հայաստանում։",image:setep4},
        {id:5, title:"«Թումանյան Շաուրմա»-ն ներդրել է HACCP որակի չափանիշները, որոնք կիրառվում են ցանցի կողմից՝ վերահսկելով սննդամթերքի արտադրության և պահպանման անվտանգությունը:",image:setep5},
    ];


    const stepsfoter=[
        {id:1,icon:icon1,title:"Ազնվություն",description:"Աշխատել թափանցիկ, պատասխանատու և ազնիվ։"},
        {id:2,icon:icon2,title:"Ծրագիր",description:"Բացել նոր մասնաճյուղեր և թարմացնել ճաշացանկը:"},
        {id:3,icon:icon3,title:"Ազնվություն",description:"Աշխատել թափանցիկ, պատասխանատու և ազնիվ։"},
        {id:4,icon:icon4,title:"հասանելիություն",description:"Լինել հասանելի յուրաքանչյուր սեգմենտի համար։"},
    ]




    return (
        <div className={css.pages1container}>
             <div className={css.brendblok1}>
                  <div className={css.brendlogo}>
                      <img src={brendlogo1} alt=""/>
                       <p>Սկսած 1998 թվականից</p>
                  </div>
                 <div className={css.textbrend1}>
                    <h6>«Թումանյան Շաուրմա». բրենդ, որը շուկայում է 90-ականներից և մատուցում է քաղաքի ամենահամեղ շաուրման:</h6>
                     <p>«Թումանյան Շաուրմա»-ն Հայաստանում արագ սննդի ոլորտի առաջատար ցանցերից է, որը հիմնադրվել է 1998 թվականին՝ կարճ ժամանակ անց դառնալով երևանցիների սիրելի վայրը:
                         Առաջին մասնաճյուղը բացվել է և մինչև այժմ գործում է Թումանյան 32/36 հասցեում, իսկ արդեն 2015 թ. -ից մասնաճյուղի երկրորդ հարկում բացվել է «Գրանդ Բուֆֆե»-ն, որտեղ մատուցվում են տարատեսակ ուտեստներ՝ աղցաններ, ապուրներ, հացաբուլկեղեն:
                     </p>
                 </div>

             </div>
            <div className={css.brendsteps}>
                {
                    aboutpagedata1.map((elem,index)=>{
                        return(
                            <>
                                {
                                    index===0 ? <div className={css.step0} key={elem.id} style={{backgroundImage:`url(${elem.image})`}}>
                                             <h1>{elem.title}</h1>
                                        </div>
                                        :
                                    index===4 ? <div className={css.haccpblok} key={elem.id}>
                                           <div className={css.haccplogo}>
                                               <img src={elem.image} alt=""/>
                                           </div>
                                        <div className={css.haccpText}>
                                            <div className={css.indexandtitle}>
                                                <h1>{index}</h1>
                                                <h2>Hazard Analysis and Critical Control Point</h2>
                                            </div>
                                            <p>{elem.title}</p>
                                        </div>
                                        </div>
                                        :
                                        <div className={css.stepsaloy} key={elem.id}>
                                           <div className={css.indexandlogo}>
                                               <h1>{index}</h1>
                                               <img src={elem.image} alt=""/>
                                           </div>
                                            <p>{elem.title}</p>
                                        </div>

                                }


                            </>
                        )
                    })

                }

            </div>
           <div className={css.page1stepsfooterborder}/>
            <div className={css.page1stepsfooter}>
                <h1>Առաքելություն</h1>
                <div className={css.stepsfoterblok}>
                    {
                        stepsfoter.map((elem)=>{
                            return(
                                <div className={css.itemstep} key={elem.id}>
                                   <div className={css.iconandtitle}>
                                       <img src={elem.icon} alt=""/>
                                       <h1>{elem.title}</h1>
                                   </div>
                                    <p>{elem.description}</p>
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
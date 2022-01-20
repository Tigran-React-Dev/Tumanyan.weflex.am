import React, {useEffect} from 'react';
import css from "./PrivacyPolicy.module.scss";
import {useSlider} from "../Providers/SliderProvider";




const PrivacyPolicy = ({history}) => {
    const {resursPravicyPolicy}=useSlider()
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])


    return (
           <div className={css.pravicycontainer}>
              <div className={css.container}>
                  <h1 className={css.titlepravicy}>ԳԱՂՏՆԻՈՒԹՅԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ</h1>
                  <p>{resursPravicyPolicy.begin.beginstep1} <br/><br/> {resursPravicyPolicy.begin.beginstep2}<br/><br/>{resursPravicyPolicy.begin.beginstep3}</p>
                <div className={css.infoone}>
                    {
                        resursPravicyPolicy.informationone.map(({id,title,text})=>{
                            return(
                                <h6 key={id}><h2>{title}</h2>{text}</h6>
                            )
                        })
                    }
                </div>
                <div className={css.infotwo}>
                    {
                        resursPravicyPolicy.informationtwo.map((item)=>{
                            return(
                                <React.Fragment key={item.id}>
                                    <h1 className={css.infotwotitle}>{item.title}</h1>
                                     <h2 className={css.texttopandbottom}>{item.texttop}</h2>
                                     <ul>
                                         {
                                             item.steps.map((elem)=>{
                                                 return(
                                                     <li key={Math.random()} >
                                                         <div>

                                                         </div>
                                                         <h2 className={css.steps}>
                                                             {elem.step}
                                                         </h2>
                                                     </li>

                                                 )
                                             })
                                         }
                                     </ul>
                                    <h2 className={css.texttopandbottom}>{item.textbottom}</h2>

                                </React.Fragment>

                            )
                        })
                    }
                </div>
                  <h2 className={css.titlefold}>Ընկերության կողմից Հաճախորդի անձնական տվյալների օգտագործման կարգը</h2>
                  <h2 className={css.textfild1}>Ընկերությունը փոխանցում է Հաճախորդի կողմից տրամադրված անձնական տեղեկատվությունը տվյալները կամ դրանց մի մասը երրորդ անձանց հետևյալ դեպքերում՝</h2>
                  <h2 className={css.textfild1}>Պատվերներ ձևակերպելու և առաքման գործընթացը իրականացնելու համար։ Սույն դեպքում Ընկերությունը փոխանցում է Պատվիրատուի հետևյալ անձնական տվյալները՝ անուն/ ազգանուն, հասցե, հեռախոսահամար։ Նշված դեպքում տվյալները փոխանցվում են միայն այն անձանց, ովքեր սահմանված կարգով պետք է իրականացնեն Հաճախորդի պատվերի առաքումը։</h2>
                   <h2 className={css.textfild3}><span>Վճարման գործընթացն իրականացնելու համար․</span> Ընկերությունը փոխանցում է Հաճախորդի կողմից տրամադրված վճարման եղանակի մասին տվյալները՝ դեբետ կրեդիտ քարտի համարներ, այն բանկին կամ ֆինանսական կազմակերպությանը, որի հետ համագործակցում է։</h2>
                   <h2 className={css.textfild1}>Թույլ տալու համար Հաճախորին մուտք գործել իր անձնական Էջ և կիսել տեղեկատվություն համացանցում։  Հաճախորդը կարող է մուտք գործել իր անձնական էջ և տեղեկատվություն կիսել համացանցի՝ Facebook, Google, Instagram կայքէջերի, միջոցով։ Այս գործառույթից օգտվելիս, Հաճախորդը որոշակի տեղեկատվություն տվյալներ է փոխանցում համացանցի այն կայքէջին, որում կիսում է տվյալ տեղեկատվությունը։</h2>
                   <h2 className={css.textfild1}>Ընկերությունը իրավունք ունի/պարտավոր է փոխանցել Հաճախորդի անձնական տվյալները, օրենքով և այլ իրավական ակտերով սահմանված դեպքերում, իչպես նաև Ընկերության իրավունքները պաշտպանելու համար։</h2>
                   <h2 className={css.titlefold}>Անվտանգություն</h2>
                   <h2 className={css.textfild1}>Ընկերությունն անում է հնարավոր ամեն ինչ՝ ապահովելու և ուժեղացնելու Հաճախորդի կողմից տրամադրած անձնական տվյալների անվտանգությունը։ Ընկերությունը, ինչպես նաև ցանկացած այլ Կայք, չի կարող երաշխավորել Հաճախորդի կողմից փոխանցված անձնական տվյալների լիարժեք/բացարձակ ապահովվածություն, Ընկերության վերահսկողությունից դուրս կատրված գործողությունների համար։</h2>
                    <h2 className={css.textfild1}>Անձնական տվյալներն ավելի պաշտպանված դարձնելու համար Ընկերությունը խնդրում է հետևել ներքոգրյալ քայլերին՝</h2>
                   <ul className={css.secrety}>
                       {
                           resursPravicyPolicy.sicurity.map((elem)=>{
                               return(
                                   <li key={elem.id}>
                                       <div>

                                       </div>
                                       <h2 >
                                           {elem.title}
                                       </h2>
                                   </li>
                               )
                           })
                       }
                   </ul>
              <h2 className={css.titlefold}>Անձնական տվյալներին վերաբերող իրավունքներ</h2>
                  {
                      resursPravicyPolicy.userinformation.map((item)=>{
                          return(
                              <h2 className={css.textfild1} key={Math.random()}>{item.title}</h2>
                          )
                      })
                  }
                  {
                      resursPravicyPolicy.bottomtext.map((elem)=>{
                          return(
                              <div key={elem.id}>
                                  <h2 className={css.titlefold}>{elem.title}</h2>
                                  <h2 className={css.textfild1}>{elem.text}</h2>
                              </div>
                          )
                      })
                  }

              </div>
           </div>
    );
};

export default PrivacyPolicy;
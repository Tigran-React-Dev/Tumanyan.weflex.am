import React from 'react';
import css from "./Foodpage2.module.scss"
import auto from "../../../images/product/Pic_Big.png";
import sld1 from "../../../images/product/sldimg1.png";
import sld2 from "../../../images/product/sldimg2.png"
import Page2Slider from "./Page2Slider/Page2Slider";

const FoodPage2 = () => {

    const info ={
        title:"Ունե՞ք առաջիկա միջոցառում։ Ցանկանում եք պատվիրել foof truck մինջոցառումներ համար, ապա լրացրեք տվյալները կամ զանգահարեք 81 81։",
        description:"Առաջին մասնաճյուղը գործել է Թումանյան - Աբովյան փողոցների խաչմերուկում:\n" +
            "Կարճ ժամանակ անց, դառնալով երևանցիների սիրելի վայրը, առաջ եկավ\n" +
            "ընդլայնվելու անհրաժեշտություն:\n" +
            "\n" +
            "2013 թվականին Արաբկիր վարչական շրջանում՝ Կոմիտաս 50/50 հասցեում,\n" +
            "բացվեց \"Թումանյան Շաուրմա\"-ի երկրորդ մասնաճյուղը:\n"
    }

    const sizeinfo={
        title:"չափեր",
        description:"\"Թումանյան Շաուրմա\"-ն հիմնադրվել է 1998 թվականին: \"Թումանյան Շաուրմա\"-ի առաջին մասնաճյուղը տեղակայված էր Թումանյան-Աբովյան փողոցների խաչմերուկում, որը սկզբնական շրջանում զբաղեցնում էր բավականին փոքր \n" +
            "զբաղեցնում էր բավականին փոքր...",
      }

    const slideritem=[
        {id:1,image:sld1},{id:1,image:sld2},
    ]


    return (
         <div className={css.page2container}>
            <div className={css.page2hdr}>
               <div className={css.fodtrack}>
                   <img src={auto} alt=""/>
               </div>
            </div>
             <div className={css.textblok}>
                   <h2>
                       {info.title}
                   </h2>
                 <p>{info.description.substring(0,166)}<br/> <br/>{info.description.substring(166,290)}</p>
           </div>
             <div className={css.sliderandsize}>
                <div className={css.sizetext}>
                     <h2>{sizeinfo.title}</h2>
                    <p>{sizeinfo.description}</p>
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
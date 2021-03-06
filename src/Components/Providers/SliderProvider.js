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
    const resursPravicyPolicy={
        begin:{beginstep1:"Մուտք գործելով կամ գրանցվելով Թումանյանի Շաուրմայի www.tshaurma.am կայքէջում " +
                "(այսուհետ նաև՝ Կայք) և կամ կատարելով գնումներ՝ անձը (այսուհետ նաև` Հաճախորդ կամ Պատվիրատու)" +
                " ավտոմատ կերպով տալիս է իր համաձայնությունը «Կարաս Գրուպ» ՍՊ ընկերությանը (այսուհետ նաև՝ " +
                "Ընկերություն) իր անձնական տվյալների տեղեկությունների հավաքագրման, մշակման և օգտագործման համար:",
            beginstep2:"Սույնով կարող եք ծանոթանալ Թումանյանի շաուրմայի որդեգրած գաղտնիության քաղաքականությանը։",
            beginstep3:"«www.tshaurma.am» և «Ընկերություն» տերմինները վերաբերում են Կայքի սեփականատեր հանդիսացող «Կարաս Գրուպ» ՍՊ ընկերությանը։"
        },
    informationone:[
        {id:1,title:"Անձնական տվյալ՝ ",text:"՝ ֆիզիկական անձին վերաբերող ցանկացած տեղեկություն, որը թույլ է տալիս կամ կարող է թույլ տալ ուղղակի կամ անուղղակի կերպով նույնականացնել անձի ինքնությունը։"},
        {id:2,title:"Անձնական տվյալների մշակում`",text:"անկախ իրականացման ձևից և եղանակից (այդ թվում՝ ավտոմատացված, տեխնիկական ցանկացած միջոցներ կիրառելու կամ առանց դրանց) ցանկացած գործողություն կամ գործողությունների խումբ, որը կապված է անձնական տվյալները հավաքելու կամ ամրագրելու կամ մուտքագրելու կամ համակարգելու կամ կազմակերպելու կամ պահպանելու կամ օգտագործելու կամ վերափոխելու կամ վերականգնելու կամ փոխանցելու կամ ուղղելու կամ ուղեփակելու կամ ոչնչացնելու կամ այլ գործողություններ կատարելու հետ."},
        {id:3,title: "Անձնական տվյալների օգտագործում`" ,text:"անձնական տվյալների հետ կատարվող գործողություն, որի ուղղակի կամ անուղղակի նպատակը կարող է լինել որոշումներ ընդունելը կամ կարծիք ձևավորելը կամ իրավունքներ ձեռք բերելը կամ իրավունքներ կամ արտոնություններ տրամադրելը կամ իրավունքները սահմանափակելը կամ զրկելը կամ այլ նպատակի իրագործումը, որոնք տվյալների սուբյեկտի կամ երրորդ անձանց համար առաջացնում կամ կարող են առաջացնել իրավական հետևանքներ կամ այլ կերպ առնչվել նրանց իրավունքներին ու ազատություններին."},
        ],
    informationtwo:[
        {id:1,title: "Հավաքագրվող ևվ պահպանվող տեղեկեկություններ",
         steps:[{step:"Հաճախորդի անուն, ազգանուն, հասցե, հեռախոսահամար(ներ), էլեկտրոնային հասցե, դեմոգրաֆիական տվյալներ՝ Հաճախորի տարիք, ծննդյան օր/ամսաթիվ/տարեթիվ, սեռ, փոստային ինդեքս,"},
               {step:"Գնումների մասին տեղեկատվություն՝ գնվող ապրանքատեսակների անվանումներ, վճարվող գումար, քարտի տեսակ, վճարման եղանակ/ներ, առաքման հասցե, կայքում Հաճախորդի կողմից կատարված գնումների պատմություն, նախընտրած ապրանքների ցանկ, ինչպիսիք են՝ Հաճախորդի կողմից առավել հաճախ ուսումնասիրված/ձեռք բերված ապրանքատեսակները, զամբյուղում առկա կամ հետագայում ձեռքբերման նպատակով պահված ապրանքների ցանկ, դիտված ապրանքատեսակների ցանկ,"},
               {step:"Բանկային ռեկվիզիտներ.  Հաճախորդին վերաբերող բանկային այնպիսի տվյալներ, որոնք հայտնի են դառնում այն դեպքում, երբ պատվերի համար վճարումը կատարվել է բանկային փոխանցման միջոցով: Առցանց վճարումները կայքում իրականացվում են նաև Arca, Visa, Mastercard, Idram վճարային համակարգի միջոցով, որի դեպքում  Ընկերությունը չի տիրապետում Հաճախորդի վճարային (կրեդիտային կամ դեբետային) քարտի որևէ տվյալի,"},
               {step:"Կայքում Հաճախորդի հաշվի` անձնական էջի որպես օգտատեր գրանցման տվյալներ, ներառյալ, բայց չսահմանափակելով, էլեկտրոնային հասցե, անձնական էջի գաղտնաբառ,"},
               {step:"Տեղեկատվություն այն սարքավորման գտնվելու վայրի մասին, որը Պատվիրատուն օգտագործում է կայքից օգտվելու համար,"},
               {step:"Օպերացիոն համակարգի, բրաուզերի մասին տեղեկություն՝ տեղեկություն Հաճախորդի բջջային հեռախոսի, պլանշետի, համակարգչի կամ այլ սարքավորման առցանց ներբեռնման գործողությունների մասին (այսուհետ միասին՝ «ավտոմատ հավաքագրվող տվյալներ»): Ավտոմատ հավաքագրվող տվյալները կարող են ներառել IP հասցեների, քուքիների, սարքավորման և բրաուզերի կարգավորումների, ինտերնետային ծառայություններ մատուցողի վերաբերյալ տեղեկություններ: Ավտոմատ հավաքագրվող տվյալները կարող են ներառել տեղեկություն նաև այն մասին, թե երբ և ինչպես է Հաճախորդը մուտք գործում և օգտագործում Կայքը, օրինակ ամսաթիվը և Կայք այցելելու և Կայքից դուրս գալու ժամանակահատվածը, տեղեկություններ, թե ինչ է Հաճախորդը փնտրել Կայքում, Կայքի էջերն ու իրերը, որոնք դիտվել են և  Հաճախորդի կողմից գնած ապրանքների ցանկը: Անալիտիկ գործընթացների արդյուքում պարզ դարձած տեղեկատվություն՝ Հաճախորդի կողմից գնումներ կատարման եղանակ, կայք այցելելու համար օգտագործված սարքերի տեսակ։"},
        ]},
        {id:2,title: "Ընկերության կողմից Հաճախորդների Տվյալների օգտագործման նպատակը",
            texttop:"Տվյալների հավաքագրման առաջնային նպատակը Հաճախորդին ապահով, հարմարավետ, արդյունավետ և անհատական ծառայություններ մատուցելն է: Այսպիսով՝ Անձնական տվյալների օգտագործման նպատակները ներառում են նաև՝",
            textbottom:"Ապահովության և օրինականության պահպանում՝ Ընկերության հնարավորությունների սահմաններում Հաճախորդի և Ընկերության իրավունքների պաշտպանություն, Ընկերության, Հաճախորդների և աշխատակիցների գույքի անվտանգության պահպանություն։",
            steps:[{step:"Ծառայությունների պատշաճ մատուցում՝ պատվերների ընդունման և առաքման գործընթացի կարգավորում, անձնական էջի պատշաճ աշխատանքի հսկողություն, այնպիսի ապրանքատեսակների առաջարկի ապահովում, որոնք, կհետաքրքրեն Հաճախորդին,"},
                  {step:"Հետադարձ Կապի հաստատում Պատվիրատուի հետ՝ վերջինիս կողմից պատվեր ձևակերպելիս, զանգահարելիս, հարցում/դիմում հղելիս կամ կայքէջում որևէ մեկնաբանություն թողնելիս,"},
                 {step:"Կայքից օգտվելու Հաճախորդի պատմության անհատականացում՝ Հաճախորդի կողմից նախընտրելի և շատ դիտված ապրանքատեսակների առանձնացում, Հաճախորդին մատուցված ծառայությունների անհատականացում, Հաճախորդի կողմից Կայքում կատարված գործողությունների վերահսկում։"},
                ]},
    ],
   sicurity:[
       {id:1,title:"Այցելել անձնական էջ հնարավորիս հաճախ և զանգի կամ հասնաելի կապի այլ միջոցով տեղեկացնել Ընկերությանը որևէ տարօրինակ երևույթ նկատելու դեպքում։"},
       {id: 2,title:"Տեղադրել հակավիրուսային ծրագրերի արդիական տարբերակներ համակարգչի կամ այն սարքավորման վրա, որով Հաճախորդը մուտք է գործում կայք։"},
       {id:3,title:"Օգտագործել բարդ գաղտնաբառեր (ամենաքիչը 7 տառ նիշ պարունակող գաղտնաբառ)։"},
       {id:4,title:"Չօգտագործել միևնույն գաղտնաբառը տարբեր կայքերի համար։"},
       {id:5,title:"Չտրամադրել սեփական գաղտնաբառը այլ անձանց։"},
       {id:6,title:"Տեղադրել գաղտնաբառ համակարգչի կամ այն սարքավորման վրա, որով Հաճաղորդը մուտք է գործում կայք։"},
       {id:7,title:"Դուրս գալ կայքից համապատասխան գործողություններն ավարտելուց հետո, հատկապես եթե Հաճախորդը մուտք է գործել ոչ անձնական (ներառյալ այլ անձանց կողմից օգտագործվող) սարքավորումով։"},
   ],
  userinformation:[
      {id:1,title:"Համաձայն «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենքի՝ յուրաքանչյուր հաճախորդ իրավասու է ընկերությունից պահանջել անձնական տվյալների օգտագործման ավելի մանրամասն տեղեկատվություն։"},
      {id:2,title:"Հաճախորդն իրավունք ունի պահանջելու, որպեսզի Ընկերությունը փոխի ցանկացած ոչ արդիական կամ սխալ տեղեկատվություն, որ տեղադրված է համապատասխան անձնական էջում։"},
      {id:3,title:"Եթե Հաճախորդը գրանցված է www.tshaurma.am կայքէջում և ունի անձնական էջ Կայքում, ապա անհրաժեշտության դեպքում կարող է մուտք գործել սեփական կայքէջ և կատարել համապատասխան փոփոխություններ։"},

  ],
  bottomtext:[
      {id:1,title:"Տեղեկությունների պահպանման ժամկետը",text:"Հաճախորդի տեղեկությունները պահպանվում են այն ժանկետով, որն անհրաժեշտ է սույն քաղաքականությամբ սահմանված նպատակների իրականացման համար, եթե օրենքով սահմանված չէ ավելի երկար ժամկետ:"},
      {id:2,title: "Տվյալների ուղղում, ոչնչացում, տվյալների մշակման դադարեցում պահանջելու կամ մշակման հետ կապված այլ գործողություններ",text:"Տվյալների ուղղում, ոչնչացում, տվյալների մշակման դադարեցում պահանջելու կամ մշակման հետ կապված այլ գործողություն կատարելու համար անհրաժեշտ է կապ հաստատել մեզ հետ tshaurma@gmail.com հասցեով՝ թեմա դաշտում նշելով «Տվյալների ուղղում, ոչնչացում, տվյալների մշակման դադարեցում պահանջելու կամ մշակման հետ կապված այլ գործողություն»՝ նշելով բոլոր այն տվյալները, որոնք ենթակա են ուղղման, ոչնչացման, մշակման դադարեցման և այլ գործողությունների կատարման: "},
      {id:3,title:"Քաղաքականության փոփոխություններ",text:"Կարաս ազգային սննդի ցանցն իրավասու է  օրենքով և այլ իրավական ակտերով սահմանված կարգով թույլատրելի փոփոխություններ կատարել Կայքում և Գաղտնիության քաղաքականության մեջ այդ մասին օրենքով սահմանված կարգով և ժամկետներում տեղեկացնելով Հաճախորդներին՝ տեղադրելով քաղաքականության թարմացված տարբերակը Կայքում։"}
  ]





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
        setAboutDataone,
        resursPravicyPolicy
    }}>
        {children}
    </SliderContext.Provider>
}

const useSlider =()=>{
    return useContext(SliderContext)
}

export {SliderProvider,useSlider}
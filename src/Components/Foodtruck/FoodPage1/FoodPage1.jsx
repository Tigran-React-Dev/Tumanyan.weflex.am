import React, {useEffect, useState} from 'react';
import css from "./FoodPage1.module.scss";
import FoodModals from "./FoodModals/FoodModals";
import Button from "../../Global/Button/Button";
import axios from "axios";



const FoodPage1 = ({foodTruckdata,setFootruckData}) => {
    const [showModal,setShowmodal]=useState(false)
    const [activeModaldata,setACtiveModaldata]=useState({})
    const [displeysetigs,setDisplaySetins]=useState("none")
    const [loding,setLoading]=useState(false)
    const [pagintion,setpagination]=useState(5)
    useEffect(()=>{
        const resFoodtruck =axios.get(process.env.REACT_APP_API_URL+"/food_trucks_list" )
        resFoodtruck.then((res)=> {
            setFootruckData(res.data)
            setLoading(true)
        })
            .catch(err=>console.log(err))

    },[])
    



const ShowModal =(itemWindow)=>{

    setShowmodal(!showModal)
    setACtiveModaldata(itemWindow)
}


    return (
         <div className={css.foodpage1containeritem}>
             {loding && foodTruckdata.map((elem,index)=>{

                     return(
                         <>
                         {index <=pagintion &&<>
                         {index % 3 === 0 ? <div
                                 key={elem.id}
                                 className={css.bigitem}
                                 style={{
                                     float: (index === 0 || index === 6 || index === 12) ? "left" : "right",
                                     background: `url(${process.env.REACT_APP_IMG_URL + elem.image})`
                                 }}
                                 onClick={() => ShowModal(elem)}
                             >
                                 <div className={css.itemcontroler} style={{}}>
                                     <p className={css.dateitem}>{elem.date}</p>
                                     <p className={css.itemtitle}>{elem.title}</p>
                                 </div>
                             </div>
                             :
                             <div key={elem.id} className={css.smollitem} style={{
                                 marginTop: "2.211764705882355vw",
                                 marginLeft: (index === 1 || index === 2 || index == 7 || index == 8 || index == 13 || index == 14) ? "2.0vw" : (index === 5 || index === 11 || index == 17 || index == 23) ? "2.0vw" : null,
                                 backgroundImage: `url(${process.env.REACT_APP_IMG_URL + elem.image})`
                             }}
                                  onClick={() => ShowModal(elem)}
                             >
                                 <div className={css.itemcontroler2}>
                                     <p className={css.dateitem2}>{elem.date}</p>
                                     <p className={css.itemtitle2}>{elem.title}</p>
                                 </div>

                             </div>
                     }
                     {showModal &&
                     <FoodModals data={activeModaldata} showModal={showModal} displeysetigs={displeysetigs}
                                 setShowmodal={setShowmodal}/>}

                 </>}
                 </>
                     )
                 })
             }
             {loding && foodTruckdata.length >6 &&
             <div className={css.foterfood}>
                <Button
                    title="տեսնել ավելին"
                    cn="btnreadmore2"
                    onClick={()=> {
                        var height = window.innerHeight;

                        setpagination(pagintion + 6)
                        window.scrollTo(0, window.scrollY+90);
                    }}
                />

             </div>}
         </div>
    );
};

export default FoodPage1;
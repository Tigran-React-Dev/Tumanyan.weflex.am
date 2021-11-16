import React, {useState} from 'react';
import css from "./FoodPage1.module.scss";
import FoodModals from "./FoodModals/FoodModals";
import Button from "../../Global/Button/Button";



const FoodPage1 = ({foodTruckdata}) => {
    const [showModal,setShowmodal]=useState(false)
    const [activeModaldata,setACtiveModaldata]=useState({})
    const [displeysetigs,setDisplaySetins]=useState("none")
const ShowModal =(itemWindow)=>{

    setShowmodal(!showModal)
    setACtiveModaldata(itemWindow)
}


    return (
         <div className={css.foodpage1containeritem}>
             {
                 foodTruckdata.map((elem,index)=>{

                     return(
                         <>
                             {
                                 index % 3 ===0 ? <div
                                     key={elem.id}
                                         className={css.bigitem}
                                         style={{float:(index===0 || index===6) ? "left" : "right",
                                             background:`url(${elem.image[0]})`
                                         }}
                                      onClick={()=>ShowModal(elem)}
                                     >
                                      <div className={css.itemcontroler} style={{}}>
                                          <p className={css.dateitem}>{elem.date}</p>
                                          <p className={css.itemtitle}>{elem.title}</p>
                                      </div>
                                 </div>
                                     :
                                  <div key={elem.id} className={css.smollitem} style={{marginTop:  "2.211764705882355vw",
                                      marginLeft:(index===1 || index===2 || index==7 || index==8  ) ? "2.0vw" : (index===5 || index===11 || index==17 || index==23  ) ? "2.0vw" : null,
                                      backgroundImage:`url(${elem.image[0]})`
                                  }} 
                                  onClick={()=>ShowModal(elem)}
                                  >
                                      <div className={css.itemcontroler2} >
                                          <p className={css.dateitem2}>{elem.date}</p>
                                          <p className={css.itemtitle2}>{elem.title}</p>
                                      </div>

                                  </div>
                             }
                             {showModal && <FoodModals data={activeModaldata} showModal={showModal} displeysetigs={displeysetigs} setShowmodal={setShowmodal}/>}

                         </>
                     )
                 })
             }
             <div className={css.foterfood}>
                <Button title="տեսնել ավելին" cn="btnreadmore2"/>
             </div>
         </div>
    );
};

export default FoodPage1;
import React, {useEffect, useRef, useState} from "react";
import css from "./Jobs.module.scss";
import axjik from "../../images/axjik.png";
import cordinat from "../../images/icons/select.png"
import salb from "../../images/icons/seltb.png";
import sala from "../../images/icons/selta.png"
import {useSlider} from "../Providers/SliderProvider";
import Button from "../Global/Button/Button";
import Input from "../Global/Input/Input";
import Check from "../Global/Checkbox2/Check";
import {NavLink, useHistory} from "react-router-dom";
import checkt from "../../images/icons/chechkoriginal.png"

const Jobs =()=>{
    const [sowblok,setsowblock]=useState(null)
    const [activjobTutorial,setActiitmvSubTutorial]=useState({})
    const [activeSelect,Setactiveselect]=useState("Թափուր աշխատատեղեր")
    const [sowselectPopup,setSowSelectPopup] =useState(false)
    const [checkeds,setCheckeds]=useState(false)
    const fileRef = useRef()
    const {jobs}=useSlider();
    const history =useHistory()




    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const SowJobsTutorial =(itm)=>{
        if(itm.id===sowblok){
            setsowblock(null)

        }else{
            setsowblock(itm.id)
        }
        setActiitmvSubTutorial(itm)
    }
    const ShowSelectWindow =()=>{
        setSowSelectPopup(!sowselectPopup)
    }
    const JobsItemClick =(jobitem)=>{
        Setactiveselect(jobitem.jobcategory)
        setSowSelectPopup(!sowselectPopup)
    }
    const Apllytojob =(sendAplly)=>{
        Setactiveselect(sendAplly)
        window.scrollTo(0, 1400);
    }
    const hantletargetclick =()=>{
        setCheckeds(!checkeds)
    }



    return(
         <div className={css.jobscontainer}>
            <div className={css.jibshdr}>
                <div className={css.jobstitle}>
                     <p className={css.job}>Աշխատանք</p>
                      <p className={css.jobtext1}>Մենք միշտ ուրախ ենք ողջունել նոր մարդկանց մեր թիմում:</p>
                </div>
                <div className={css.jobslogo}>
                    <img src={axjik} alt=""/>
                </div>
            </div>
             <div className={css.jobslist}>
                    <p className={css.tapur}>Թափուր աշխատատեղեր</p>
                    <hr/>
                   <div className={css.itemjob}>
                       {
                           jobs.map((itm)=>{
                               return(
                                   <>
                                   <div
                                       className={css.jobblok}
                                       key={itm.id}
                                       onClick={()=>SowJobsTutorial(itm)}
                                   >
                                       <h2>{itm.jobcategory}</h2>
                                       <h3><img src={cordinat} alt=""/><p>{itm.adress}</p></h3>
                                       <h4>{itm.date}</h4>
                                       {sowblok===itm.id ? <img className={css.slaqnerqev} src={sala} alt=""/>  : <img className={css.slaqnerqev} src={salb} alt=""/>}

                                   </div>
                                       {sowblok===itm.id ?
                                           <div className={css.tutorialwraper}>
                                               <div className={css.wraper1}>
                                                   <p>Ձեր փորձը՝</p>
                                                   <ul>
                                                       {
                                                           activjobTutorial.practica.map((elem,index)=>{
                                                               return <li key={index}>- {elem}</li>
                                                           })
                                                       }
                                                   </ul>
                                               </div>
                                               <div className={css.wrapper2}>
                                                   <p>Ձեր հմտությունները՝</p>
                                                   <ul>
                                                       {
                                                           activjobTutorial.skills.map((elem,index)=>{
                                                               return <li key={index}>- {elem}</li>
                                                           })
                                                       }
                                                   </ul>
                                               </div>
                                                <Button
                                                    cn="btnselectjob"
                                                    title="դիմել"
                                                    onClick={()=>Apllytojob(activjobTutorial.jobcategory)}
                                                />

                                          </div> : null}
                                   </>
                               )
                           })
                       }

                   </div>
                <div className={css.hayt}>
                  <div className={css.haytwraper}>
                             <h2>դիմում հայտ</h2>
                             <p>Թողեք ձեր կոնտակտային տվյալները,
                                 և մեր աշխատակիցը հնարավորինս
                                 շուտ կկապվի Ձեզ հետ։</p>
                      <form>
                            <div className={css.selectjob1} onClick={ShowSelectWindow}>
                                <h3>{activeSelect}</h3>
                                {!sowselectPopup ? <img src={salb} alt=""/> : <img src={sala} alt=""/>}
                            </div>
                          {sowselectPopup &&
                           <div className={css.popupgeneral}>
                              <div className={css.selwraper} />
                               <div className={css.selectdiv}>
                                   <ul>
                                       {
                                           jobs.map((item)=>{
                                               return(
                                                   <li key={item.id} onClick={()=>JobsItemClick(item)}>
                                                       {item.jobcategory}
                                                   </li>
                                               )
                                           })
                                       }
                                   </ul>

                               </div>

                           </div>
                          }
                          <Input
                              cn="jobinput"
                              placeholder="Անուն Ազգանուն*"
                              type="text"
                          />
                          <Input
                              cn="jobinput"
                              placeholder="Հեռախոսահամար*"
                              type="number"
                          />
                          <Input
                              cn="jobinput"
                              placeholder="էլեկտրոնային հասցե*"
                              type="email"
                          />

                          <textarea
                              className={css.areatext}
                              placeholder="Ուղեկցող նամակ"
                          ></textarea>

                          <button
                              className={css.filebtn}
                              onClick={(e)=>{
                                  e.preventDefault()
                                  fileRef.current.click();
                              }}
                          >
                              <h3>Կցել ռեզյումե</h3>
                              <h6>max. 4 MB PDF, DOC, DOCX</h6>

                          </button>
                          <input type="file" name="file" ref={fileRef} style={{display:"none"}}/>
                           <div className={css.checkandlable}>
                               <input
                                   className={css.checkbox1}
                                   type="checkbox"
                                   onClick={hantletargetclick}
                                   isChecked={checkeds}
                                   id="okinfo"
                               />
                               <label htmlFor="okinfo">
                                   <div className={css.ckekckdiv2} style={{
                                       backgroundColor:checkeds && "#13AD54",border: checkeds && "1px solid #13AD54"
                                   }}>
                                       {checkeds && <img  src={checkt} alt="" /> }

                                   </div>
                                   <h4>Համաձայն եմ <NavLink to={"/"} exact> անձնական տվյալների</NavLink> օգտգործման հետ</h4>
                                   </label>
                           </div>
                        <Button
                          cn="btnjob2"
                          title="ուղարկել"
                        />

                      </form>
                  </div>
                </div>

             </div>
        </div>
    )
}

export default Jobs;
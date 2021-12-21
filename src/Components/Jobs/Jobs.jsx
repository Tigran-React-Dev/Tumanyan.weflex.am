import React, {useEffect, useRef, useState} from "react";
import css from "./Jobs.module.scss";
import axjik from "../../images/axjik.png";
import cordinat from "../../images/icons/select.png"
import salb from "../../images/icons/seltb.png";
import sala from "../../images/icons/selta.png";
import closebtn from "../../images/icons/close.png";
import succsessimg from "../../images/icons/checkedbasket.png";
import {useSlider} from "../Providers/SliderProvider";
import Button from "../Global/Button/Button";
import Input from "../Global/Input/Input";
import {NavLink, useHistory} from "react-router-dom";
import checkt from "../../images/icons/chechkoriginal.png"
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useProduct } from "../Providers/ProductMenu";

const Jobs =()=>{
    const {languae}=useProduct()
    const [sowblok,setsowblock]=useState(null)
    const [activjobTutorial,setActiitmvSubTutorial]=useState({})
    const [activeSelect,Setactiveselect]=useState("Թափուր աշխատատեղեր")
    const [sowselectPopup,setSowSelectPopup] =useState(false)
    const [checkeds,setCheckeds]=useState(false)
    const [filename,setFileName]=useState(null)
    const [loading,setLoading]=useState(false)
    const fileRef = useRef()
    const {jobs,SetJobs}=useSlider();
    const history =useHistory()
    const {t}=useTranslation()

    const [sucsesdata,setSucses]=useState(false)
    const [errors,setErrors]=useState({})


    useEffect(()=>{
     Setactiveselect(languae=="ՀԱՅ" ? "Թափուր աշխատատեղեր" : languae=="ENG" ? "Vacancies" : languae=="РУС" ? "Вакансии" : null)
    },[languae])
    const [JobsData,setJobsData]=useState({
        free_job:activeSelect != "Թափուր աշխատատեղեր" ? activeSelect : "",
        full_name:"",
        phone:"",
        email:"",
        message:"",
        resume:"",
        success_check:checkeds
    })
    const {free_job, full_name, phone, email, message, resume, success_check}=JobsData

    const OnchangeData =(e)=>{
        setJobsData({
            ...JobsData,
            [e.target.name] : e.target.value,
        })
    }


    useEffect(()=>{
       const resjob=axios.get(process.env.REACT_APP_API_URL+"/job")
        resjob.then((res)=>{
            SetJobs(res.data)
            setLoading(true)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const handleSubmit = async () => {

        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("free_job", free_job)
        loginFormData.append("full_name", full_name)
        loginFormData.append("phone", phone)
        loginFormData.append("email", email)
        loginFormData.append("message", message)
        loginFormData.append("resume", resume)
        loginFormData.append("success_check",success_check)
        
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: process.env.REACT_APP_API_URL+"/addApply_Job",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          if(response.data == "success"){
            setSucses(true)
            setErrors({})
              window.scrollTo(0, 400);
          }else{
            setErrors(response.data);
          }
          } catch(error) {
          console.log(error)
        }
      }

    
    const SubmitJobData =(e)=>{
        e.preventDefault()
        handleSubmit()


        
    }
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
        Setactiveselect(jobitem.free_job)
        setSowSelectPopup(!sowselectPopup)
        setJobsData({
            ...JobsData,
            free_job:jobitem.free_job,
        })

    }
    const Apllytojob =(sendAplly)=>{
        Setactiveselect(sendAplly)
        window.scrollTo(0, 1400);
    }
    const hantletargetclick =()=>{

        setCheckeds(!checkeds)
        setJobsData({
            ...JobsData,
            success_check:!checkeds,
        })
    }

    const jobcontext =[
        {id:1,context:"Անվճար տունդարձ երեկոյան հերթափոխից հետո"},
        {id:2,context:"Անվճար սնունդ"},
        {id:3,context:"Համեղ ուտելիքներ"},
        {id:4,context:"Ուրախ թիմ"},
    ]




    return(
         <div className={css.jobscontainer}>
            <div className={css.jibshdr}>
                <div className={css.jobstitle}>
                     <p className={css.job}>{t("job")}</p>
                      <p className={css.jobtext1}>{t("jobtitle")}</p>
                </div>
                <div className={css.jobslogo}>
                    <img src={axjik} alt=""/>
                </div>
            </div>
            <div className={css.jobcontext}>
                 <div className={css.contextone}>
                   <p>Մենք ցանկանում ենք, որ յուրաքանչյուր նոր աշխատակից իրեն զգա հարամարավետ, ջերմ և ընկերական միջավայրում:</p>
                   <p>Մենք ստեղծում ենք միջավայր, որտեղ մարդիկ ցանկանում են սովորել և զարգանալ, աշխատանքից տուն վերադառնալ դրական և էներգիայով լի:</p>
                   <p>Թումանյան Շաուրմայի ցանցերում կան տարբեր բաց հաստիքներ: Այնպես որ, եթե ցանկանում եք միանալ մեր ուրախ թիմին, ընտրեք Ձեզ հարմար հաստիքը և ուղարկեք ինքնակենսագրականը:</p>
                </div>   
                <div className={css.contextty}>
                       
                           {jobcontext.map(({id,context})=>{
                               return(
                                   <div className={css.contextitem} key={id}><div></div><p>{context}</p></div>
                               )
                           })

                           }
                       
                </div>       
            </div>
             {sucsesdata && <div className={css.succsessmobile}>
                 <div className={css.close}><img src={closebtn} alt="" onClick={() => setSucses(!sucsesdata)}/></div>
                 <img src={succsessimg} alt="" className={css.succsesimg}/>
                 <h3 className={css.thenk_one}>{t("thenkyou")}</h3>
                 <h3 className={css.thenk}>Ձեր դիմումն ընդունված է։ Մեր աշխատակիցը կկապվի Ձեզ հետ:</h3>
                 <button className={css.btnpushmenu} onClick={() => {

                     history.push("/home/Shaurma");

                 }}>վերդառնալ մենյու
                 </button>
             </div>}
             <div className={sucsesdata ? css.displayoff : css.jobslist}>
                    <p className={css.tapur}>{t("freejob")}</p>
                    <hr/>
                 {loading && <div className={css.itemjob}>
                     {
                         jobs.map((itm) => {
                             return (
                                 <>
                                     <div
                                         className={css.jobblok}
                                         key={itm.id}
                                         onClick={() => SowJobsTutorial(itm)}
                                     >
                                         <h2>{languae=="ՀԱՅ" ? itm.free_job : languae=="ENG" ? itm.free_jobEN : languae=="РУС" ? itm.free_jobRU : null}</h2>
                                         <h3><img src={cordinat} alt=""/><p>{languae=="ՀԱՅ" ? itm.address : languae=="ENG" ? itm.addressEN : languae=="РУС" ? itm.addressRU : null}</p></h3>
                                         <h4>{itm.date}</h4>
                                         {sowblok === itm.id ? <img className={css.slaqnerqev} src={sala} alt=""/> :
                                             <img className={css.slaqnerqev} src={salb} alt=""/>}

                                     </div>
                                     {sowblok === itm.id ?
                                         <div className={css.tutorialwraper}>
                                             <div className={css.wraper1}>
                                                 <p>Ձեր փորձը՝</p>
                                                 <ul>
                                                     {
                                                         activjobTutorial.experiences.map((elem, index) => {
                                                             return <li key={index}>- {languae=="ՀԱՅ" ? elem.experience : languae=="ENG" ? elem.experienceEN : languae=="РУС" ?elem.experienceRU : null}</li>
                                                         })
                                                     }
                                                 </ul>
                                             </div>
                                             <div className={css.wrapper2}>
                                                 <p>Ձեր հմտությունները՝</p>
                                                 <ul>
                                                     {
                                                         activjobTutorial.skills.map((elem, index) => {
                                                             return <li key={index}>- {languae=="ՀԱՅ" ? elem.skill : languae=="ENG" ? elem.skillEN : languae=="РУС" ?elem.skillRU : null}</li>
                                                         })
                                                     }
                                                 </ul>
                                             </div>
                                             <Button
                                                 cn="btnselectjob"
                                                 title="դիմել"
                                                 onClick={() => Apllytojob(activjobTutorial.jobcategory)}
                                             />

                                         </div> : null}
                                 </>
                             )
                         })
                     }

                 </div>}
                <div className={css.hayt}>
                  <div className={css.haytwraper}>
                             <h2>{t("hayt")}</h2>
                             <p>{t("jobhayttitle")}</p>
                      <form onSubmit={SubmitJobData}>
                            <div className={css.selectjob1} onClick={ShowSelectWindow} style={{border:errors.free_job && "1px solid red"}}>
                                <h3>{activeSelect}</h3>
                                {!sowselectPopup ? <img src={salb} alt=""/> : <img src={sala} alt=""/>}
                            </div>
                          {sowselectPopup &&
                           <div className={css.popupgeneral}>
                              <div className={css.selwraper} />
                               <div className={css.selectdiv}>
                                   {loading && <ul>
                                       {
                                           jobs.map((item) => {
                                               return (
                                                   <li key={item.id} onClick={() => JobsItemClick(item)}>
                                                       {item.free_job}
                                                   </li>
                                               )
                                           })
                                       }
                                   </ul>}

                               </div>

                           </div>
                          }
                          
                          <Input
                              cn="jobinput"
                              placeholder={t("fullname")}
                              type="text"
                              name="full_name"
                              value={full_name}
                              onChange={OnchangeData}
                              style={{border:errors.full_name && "1px solid red"}}
                          />

                          <Input
                              cn="jobinput"
                              placeholder={t("phonenumber")}
                              type="number"
                              name="phone"
                              value={phone}
                              style={{border:errors.phone && "1px solid red"}}
                              onChange={OnchangeData}
                          />

                          <Input
                              cn="jobinput"
                              placeholder={t("emailadress")}
                              type="text"
                              name="email"
                              value={email}
                              style={{border:errors.email ?  "1px solid red" : null}}
                              onChange={OnchangeData}
                          />

                          <textarea
                              className={css.areatext}
                              placeholder={t("messages")}
                              name="message"
                              value={message}
                              style={{border:errors.message && "1px solid red"}}
                              onChange={OnchangeData}
                          ></textarea>

                          <button
                              className={css.filebtn}
                              style={{border:errors.resume && "1px dashed red"}}
                              onClick={(e)=>{
                                  e.preventDefault()
                                  fileRef.current.click();
                              }}
                          >
                              <h3>{t("addrezume")}</h3>
                              <h6>{filename ? filename : "max. 4 MB PDF, DOC, DOCX"}</h6>

                          </button>
                          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={(e)=>{
                              setJobsData({
                                  ...JobsData,
                                  [e.target.name]:e.target.files[0]

                              })
                              setFileName(e.target.files[0].name)
                          }} ref={fileRef} style={{display:"none"}}/>
                           <div className={css.checkandlable}>
                               <input
                                   className={css.checkbox1}
                                   type="checkbox"
                                   onClick={hantletargetclick}
                                   checked={checkeds}
                                   id="okinfo"

                               />
                               <label htmlFor="okinfo">
                                   <div className={css.ckekckdiv2} style={{
                                       backgroundColor:checkeds && "#13AD54",border: checkeds && "1px solid #13AD54",
                                       backgroundImage:checkeds && `url(${checkt})`
                                   }}>
                                   </div>
                                   <h4>Համաձայն եմ <NavLink to={"/"} exact> անձնական տվյալների</NavLink> օգտգործման հետ</h4>
                                   </label>
                           </div>
                           <h6 className={css.error}>{errors.success_check && errors.success_check[0]}</h6>
                        <Button
                          cn="btnjob2"
                          title={t("sendrezume")}

                        />

                      </form>
                  </div>
                </div>

             </div>

             {sucsesdata && <div className={css.succsesswraper}>
                 <div className={css.closewrapper} onClick={()=>setSucses(!sucsesdata)}/>
                 <div className={css.succsess}>
                     <div className={css.close}><img src={closebtn} alt="" onClick={()=>setSucses(!sucsesdata)}/></div>
                     <img src={succsessimg} alt="" className={css.succsesimg}/>
                     <h3 className={css.thenk_one}>Շնորհակալություն։</h3>
                     <h3 className={css.thenk}>Ձեր դիմումն ընդունված է։ Մեր աշխատակիցը կկապվի Ձեզ հետ:</h3>
                     <button className={css.btnpushmenu} onClick={()=> {

                         history.push("/home/Shaurma");
                     }}>վերդառնալ մենյու</button>
                 </div>
             </div>}
        </div>
    )
}

export default Jobs;
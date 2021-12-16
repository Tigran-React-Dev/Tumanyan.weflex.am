import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import css from "./Basket.module.scss"
import {useHistory} from "react-router-dom";
import Basketitem from "./Basketitem/Basketitem";
import Input from "../Global/Input/Input";
import btnbsk from "../../images/icons/btnpromo.svg";
import btndel from "../../images/icons/deletebt.svg";
import adressicon from "../../images/icons/select.png"
import checketbasket from "../../images/icons/checkedbasket.png";
import seltb from "../../images/icons/seltb.png";
import salta from "../../images/icons/selta.png";
import { useDispatch } from 'react-redux';
import {AddproductCard, AddproductCardonly, ClardnBasket} from '../redux/Action/CardAction';
import {SaveorderUser} from "../redux/Action/AuthACtion";
import BasketRecoment from "./BasketRecoment/BasketRecoment";
import Check from "../Global/Checkbox2/Check";
import Button from "../Global/Button/Button";
import {useProduct} from "../Providers/ProductMenu";







const Basket = () => {
    const [showdetalis,setSowdetalis]=useState(1)
    const [paybtnstyle,setPeybtnStyle]=useState(1)
    const [clock,setClock]=useState("Ժամը")
    const [sucsessshop,setSucsessshp]=useState(false)
    const [count,srtcount]=useState(1)
    const product = useSelector(({ ProductReducer  }) => ProductReducer.product)
    const  CardData = useSelector(({ CardReducer  }) => CardReducer)
    const userAdress = useSelector(({AuthReducer})=>AuthReducer.adresess)
    const { totalPrice, items } =  CardData
    const {adressCountry,defaultCity} =useProduct()
    const dispatch =useDispatch()
    const history = useHistory()
    const [basketitemdata,setItemBasketdata]=useState(items)
    const [errors,seterors]=useState("")
    const [dateSelectShow,setDateSelectShow]=useState(false)
    const [sitystyle,setSitystyle]=useState(null)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [sucsessshop])


    useEffect(()=>{
        setTimeout(()=>{
            setItemBasketdata(items)
        },10)
    },[count])

   const clearnBasketitem=()=>{
      dispatch(ClardnBasket())
   }

   const btnpey=[
       {id:1,title:"կանխիկ",},
       {id:2,title:"pos on delivery",},
       {id:3,title:"օնլայն քարտ",},
       {id:4,title:"իդրամ",},

   ];
   const recomentcontroler={
       // width: "30.36458vw",
       // minHeight: "27.55208vw",
       // background: "#F9F9F9",
       // borderRadius: "0.52083vw",
       // marginTopop: "1.30208vw",
   }
   const formandrecomentwraper={
       width: "85.20833vw",
       minHeight: "5.20833vw",
       display: "flex",
       alignItems: "flex-start",
       marginTop: "0.78125vw",
   }

  const handleAddProductCard=(obj)=>{
     dispatch(AddproductCard(obj))
     srtcount(count+1)

    }

    const SendFormdataCheck =()=>{

        dispatch(SaveorderUser(items))
        setSucsessshp(!sucsessshop)
    }

    const [checket,setchecked]=useState(false)
    const hantletargetclick =()=>{
       setchecked(!checket)
      }

     // _____changeInputWalue____

    const [user,setUser]=useState({
        name:"",
        lastname:"",
        phone:"374",
        email:"",
    })
    const {name,lastname,phone,email}=user;

   const OnchangeInputofRegister =(e)=>{
       setUser({
           ...user,
           [e.target.name]:e.target.value,
       })
   }
   const OpenSelectData =()=>{
       setDateSelectShow(!dateSelectShow)
   }

   const InPlace=()=>{
       setSowdetalis(2)
       if(CardData.items.length){
       const newarr=CardData.items.filter((elem)=>elem.category_buffet_id!=undefined || elem.category_buffet_id!=null )
          if(newarr.length){
            seterors("Գրանդ Բուֆֆետից պատվիրելու դեպքում այս տարբերակը չի գործում")
            setSowdetalis(1)
          }else{
              setSowdetalis(2)
              seterors("")
          }

       }
   }
   const ChangeBranch =(sitydata)=>{
       setSitystyle(sitydata.address)

   }


    return (
         <div className={css.Basketconstructor}>
               <div className={css.bskhdr}>
                   <p className={css.baskettitle}>զամբյուղ</p>
               </div>
          <div className={css.bskconstr2}>
              {totalPrice ===0 ?
               <>
                   <p className={css.basketstatus}>ձեր զամբյուղն առայժմ դատարկ է։</p>
                   <div className={css.btndiv}>
                       <button className={css.btnpushmenu} onClick={()=> {

                           history.push("/home/Shaurma");
                     }}>վերդառնալ մենյու</button>
                   </div>
               </>

              : (totalPrice >0 && !sucsessshop) ?

                <div className={css.itemBasket}>
                    {
                        items.length && basketitemdata.map((obj)=>{

                            return(
                                <Basketitem
                                    key={obj.id}
                                    obj={obj}
                                />
                            )
                        })
                    }
                    <div className={css.promokodandbonusblok}>
                       <div className={css.promoblok}>
                          <Input
                              cn="promoinput"
                              placeholder="պրոմոկոդ"/>
                          <img src={btnbsk} alt="" />
                       </div>
                        <div className={css.bonuss}>
                            <p>օգտագործել իմ կուտակված</p>
                             <span>10 %</span>
                             <img src={btnbsk} alt="" />
                        </div>
                        <div className={css.totaldiv}>
                            <p>{totalPrice} ֏</p>
                        </div>
                        <div className={css.clearnbasket} onClick={clearnBasketitem}>
                             <p>Մաքրել <img src={btndel} alt="" /></p>
                        </div>
                    </div>
                   <div className={css.constrctorformandrecoment}>
                       <p className={css.formtitle}>
                       ՊԱՏՎԵՐԻ ՋԵՎԱԿԵՐՊՈՒՄ
                       </p>
                       <p className={css.info}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</p>
                       {/*className={css.formandrecomentwraper}*/}
                      <div style={formandrecomentwraper} className={css.formandrecomentwraper}>

                          <div className={css.formcontlorel}>
                              <div className={css.mobileformtitle}>
                                  <p>
                                      ՊԱՏՎԵՐԻ ՋԵՎԱԿԵՐՊՈՒՄ
                                  </p>
                                  <h6>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</h6>
                              </div>
                              <Input
                                  cn="inputglobalinfo"
                                  placeholder="Անուն*"
                                  type="text"
                                  onChange={OnchangeInputofRegister}
                                  name="name"
                              />
                              <Input
                                  cn="inputglobalinfo"
                                  placeholder="Ազգանուն"
                                  type="text"
                                  onChange={OnchangeInputofRegister}
                                  name="lastname"
                              />
                              <Input
                              cn="inputglobalinfo"
                              placeholder="Հեռախոսահամար*"
                              type="number"
                              maxlength="12"
                              value={phone}
                              onChange={OnchangeInputofRegister}
                              name="phone"
                              />
                              <Input
                              cn="inputglobalinfo"
                              placeholder="էլեկտրոնային հասցե*"
                              type="email"
                              onChange={OnchangeInputofRegister}
                              name="email"
                              />
                              <div className={css.checkdiv}>
                                  <Check
                                      cn="newsinfo"
                                      lableinfo="Ստանալ ակցիաների, նորությունների մասին ծանուցումներ"
                                      id="newcheket"
                                      onClick={hantletargetclick}
                                      isChecked={checket}
                                  />
                                  <hr/>
                              </div>

                               <p className={css.shipment}>առաքում</p>
                              <div className={css.popupbutton}>
                                   <Button
                                       cn="btnPopupshop"
                                       title="առաքում"
                                       onClick={()=> {
                                           seterors("")
                                           setSowdetalis(1)
                                       }}
                                       style={{color: showdetalis===1 ?
                                               "#13AD54" : "#BFB7B6" ,
                                           border:showdetalis===1 ?
                                               "1px solid #13AD54" : "1px solid #BFB7B6"}}

                                   />
                                  <Button
                                      cn="btnPopupshop"
                                      title="տեղում"
                                      onClick={InPlace}
                                      style={{color: showdetalis===2 &&
                                              "#13AD54"  ,
                                          border:showdetalis===2 &&
                                              "1px solid #13AD54" }}
                                   />


                              </div>
                              {errors !="" && <div className={css.error}>
                                  <p>{errors}</p>
                              </div>}
                              {showdetalis===1 ?
                                  <>
                                  {userAdress.length ?
                                      <div className={css.userADresesblok}>
                                         <p className={css.selectuseradres}>Ընտրեք հասցեն՝</p>
                                          <div className={css.adresselement}>
                                              {
                                                  userAdress.map(({id,adress,bulding,apartment})=>{
                                                      return(
                                                          <div key={id} className={css.itermadresandicon}
                                                               style={{marginLeft:id===5  && "3.33vw",marginRight:id===3  && "1.2vw"}}>
                                                              <img src={adressicon} alt=""/>
                                                              <p>{adress }, շ․{bulding}, բն․{apartment}</p>
                                                          </div>
                                                      )
                                                  })
                                              }
                                          </div>
                                          <hr className={css.hradres}/>
                                      </div>
                                      :

                                      <div className={css.renderadressinput}>
                                      <Input
                                          cn="inputglobalinfo"
                                          placeholder="Հասցե*"
                                      />
                                      <div className={css.domandkey}>
                                          <Input
                                              cn="inputdom"
                                              placeholder="Շենք"
                                          />
                                          <Input
                                              cn="inputdom"
                                              placeholder="Բնակարան"
                                          />
                                      </div>
                                      <hr/>

                                  </div>}
                                  </>
                                  :
                                   <div className={css.adresscityortoradress}>
                                      <p className={css.adresstitle}>Ընտրեք մասնաճյուղը՝</p>
                                       <div className={css.adresselement}>
                                           {
                                               adressCountry.map((item,index)=>{
                                                   return(
                                                       defaultCity.toLowerCase() == item.city.name.toLowerCase() &&
                                                       <div key={item.id} className={css.itermadresandicon}
                                                            style={{marginLeft:index===4  && "3.33vw",marginRight:item.id===3  && "1.2vw"}}
                                                            onClick={()=>ChangeBranch(item)}
                                                       >
                                                           <img src={adressicon} alt=""/>
                                                           <p style={{color:sitystyle==item.address &&  "#13AD54" }}>{item.address}</p>
                                                       </div>
                                                   )
                                               })
                                           }
                                       </div>
                                    {/*select data*/}
                                        <div className={css.clokblok}>
                                            <div className={css.clock} onClick={OpenSelectData}>
                                                <p>{clock} </p>
                                                {!dateSelectShow ?  <img src={seltb} alt=""/> :  <img src={salta} alt=""/>}
                                            </div>
                                            {dateSelectShow &&
                                             <div className={css.clockselectwraper}>
                                              <div className={css.clockcloseWraper} onClick={OpenSelectData}/>
                                                 <div className={css.selectdate} onClick={(e)=>e.stopPropagation()}>

                                                 </div>

                                             </div>
                                            }
                                        </div>


                                   </div>

                              }
                              <p className={css.peytitle}>վճարում</p>
                              <div className={css.paymedodsbtn}>
                                  {
                                      btnpey.map(({id,title})=>{
                                          return <Button
                                              key={id}
                                              title={title}
                                              cn="btnPopupshop"
                                              style={{color:id==paybtnstyle && "#13AD54" ,border:id==paybtnstyle && "1px solid #13AD54" }}
                                              onClick={()=>setPeybtnStyle(id)}
                                            />
                                        })
                                  }


                              </div>
                              {paybtnstyle ===1 &&
                              <div className={css.zdachi}>
                                  <p className={css.zdachittitle1}>Մանր</p>
                                  <Input
                                      cn="zdachi"
                                      placeholder="նշեք կանխիկի չափը"
                                  />
                                  <p className={css.zdachittitle1}>-ից</p>
                               </div>
                              }
                              <Button
                                  cn="btnokpey"
                                  title="պատվիրել"
                                  onClick={SendFormdataCheck}

                              />

                          </div>
                          <div className={css.recomentcontroler} style={recomentcontroler} >
                              <div className={css.recometntcontrol}>
                                     <div className={css.shiporder}>
                                      <p className={css.itonalItemcard}>ձեր պատվերի հետ կսազի նաևվ</p>
                                      {
                                          product.filter(i=>i.category=="recoment").map((obj)=>{

                                              return   (<BasketRecoment
                                                  key={obj.id}
                                                  handleAddProductCard={handleAddProductCard}

                                                  {...obj}
                                              />)
                                          })
                                      }
                                      <div className={css.gic2}></div>
                                  </div>

                                </div>
                          </div>
                      </div>  
                   </div>
                </div>
                :
                      <>
                          <img className={css.checkbasket} src={checketbasket} alt=""/>
                          <p className={css.statussok}>ձեր պատվերը կատարվել է։</p>
                          <div className={css.btndiv2}>
                              <button className={css.btnpushmenu} onClick={()=> {
                                  setSucsessshp(!sucsessshop)
                                  history.push("/home/Shaurma");
                              }}>վերդառնալ մենյու</button>
                          </div>
                      </>
              }
         </div>
        </div>
    );
};

export default Basket;


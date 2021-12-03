import React, {useEffect, useRef, useState} from 'react';
import css from "./GrandBuffet.module.scss"
import {useHistory, useParams} from "react-router-dom";
import {useProduct} from "../Providers/ProductMenu";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "../Menu/ProductBlok/ProductBlok";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";
import {BiJoystickButton} from "react-icons/all";
import Button from "../Global/Button/Button";


const GrantBuffet = () => {


    const history = useHistory()
    const {grandBufeData} =useProduct()
    const grandfufet = useSelector(({ ProductReducer  }) => ProductReducer.grandfufet)
    const {id} = useParams()
    const ref=useRef(null)
    const dispatch=useDispatch()
    const [activeMenuStyle,setActiveMenuStyle]=useState({1:true})

     useEffect(()=>{
         window.scrollTo(0, 0);
     },[history])


    const ChangeStyleAndCategory =(menu,index)=>{
        switch (index){
            case 0 :
                ref.current.scrollLeft=0;
                break
            case 1 :
                ref.current.scrollLeft=50;
                break
            case 2 :
                ref.current.scrollLeft=150;
                break
            case 3 :
                ref.current.scrollLeft=290;
                break
            case 4 :
                ref.current.scrollLeft=440;
                break
            case 5 :
                ref.current.scrollLeft=590;
                break
            case 6 :
                ref.current.scrollLeft=800;
                break
            case 7 :
                ref.current.scrollLeft=1000;
                break
            case 8 :
                ref.current.scrollLeft=1200;
                break
            default :
                break
        }
        setActiveMenuStyle({[menu.id]:!activeMenuStyle[menu.id]})
        history.push(`/${menu.category}`)
    }
    const handleAddProductCard =(obj)=>{
        dispatch(AddproductCard(obj))
    }
    const handleonlyproduct=(obj2)=>{
        dispatch(AddproductCardonly(obj2))
    }
    const SendobjtoLikecategory =(ob)=>{
        dispatch(LikeObjSenddat(ob))
    }

    return (
        <div className={css.grandebufecontantainer}>
            <div className={css.grandbufeHdr}>
                 <h1>grand buffet</h1>
            </div>
            <div className={css.menuconsreuctor} ref={ref}>
                {
                    grandBufeData.map((elem,index)=>{
                        return(
                            <div
                                className={css.itemmenu}
                                key={elem.id}
                                onClick={()=>ChangeStyleAndCategory(elem,index)}
                                style={{background:activeMenuStyle[elem.id] && "#13AD54",border:activeMenuStyle[elem.id] && "none"}}
                            >
                                <p style={{color:activeMenuStyle[elem.id] && "#FFFFFF" }}>{elem.title}</p>

                            </div>

                        )
                    })
                }
            </div>
            <div className={css.bufetitemblok}>
                {
                    grandfufet.filter(e=>e.category===id).map((obj)=>{
                        return(
                            <ProductBlok
                              key={obj.id}
                              SendobjtoLikecategory={SendobjtoLikecategory}
                              handleAddProductCard={handleAddProductCard}
                              handleonlyproduct={handleonlyproduct}
                              {...obj}
                            />
                        )
                    })
                }
            </div>
            <div className={css.grandbufefooter}>
                <Button title="տեսնել ավելին" cn="btnreadmore2"/>
            </div>
        </div>
    );
};

export default GrantBuffet;
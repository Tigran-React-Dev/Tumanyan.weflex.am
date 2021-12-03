import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router";
import css from "./Menu.module.scss";
import { useProduct } from "../Providers/ProductMenu";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "./ProductBlok/ProductBlok";
import {ProductReducer} from "../redux/ProductReducer";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";
import { LoadProductData } from "../redux/Action/ProductAction";




const Menu = ({ history }) => {

    
    const {activSub,activeMenuitem, setactiveMenuitem,languae} = useProduct()
    const { id } = useParams();
    const dispatch =useDispatch()
    const ref =useRef(null)
    const [loader, setloader] = useState(true)
    const [loader2, setloader2] = useState(false)
    const product = useSelector(({ ProductReducer  }) => ProductReducer.product)
    const recoment = useSelector(({ ProductReducer  }) => ProductReducer.recoment)
    const Sauces = useSelector(({ ProductReducer  }) => ProductReducer.Sauces)
    const [advances,setadvances]=useState([])




    useEffect(()=>{
       dispatch(LoadProductData())
        setloader2(true)
    },[])



    useEffect(() => {
       if (activSub.length !== 0) {
            let act = activSub.find(i => i.id == id)
            setactiveMenuitem(act)
            setloader(false)
        }

    }, [activSub])

    useEffect(() => {
        window.scrollTo(0, 0);
     }, [])

    const handleAddProductCard =(obj)=>{
        dispatch(AddproductCard(obj))
    }

    const handleonlyproduct=(obj2)=>{
        dispatch(AddproductCardonly(obj2))
    }
    const SendobjtoLikecategory =(ob)=>{
      dispatch(LikeObjSenddat(ob))
    }



    const changeProductCategory = (item,index) => {
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
                ref.current.scrollLeft=250;
                break
            case 4 :
                ref.current.scrollLeft=400;
                break
            case 5 :
                ref.current.scrollLeft=550;
                break
            case 6 :
                ref.current.scrollLeft=680;
                break
            case 7 :
                ref.current.scrollLeft=750;
                break
            default :
                break
        }
       // const activedatas = activSub.find(i => i.id == item.id)
        setactiveMenuitem(item)
        history.push(`/home/${item.id}`)
        window.scrollTo(0, 300)
    }


    return (
        <>
            {loader ?
                <h1>loading</h1> : <div className={css.contanier}>
                <div className={css.menuimagesandtitle}>
                    <img src={process.env.REACT_APP_IMG_URL+activeMenuitem.bigImage} alt="" />
                    <h1>{languae=="ՀԱՅ" ? activeMenuitem.name : languae=="ENG" ? activeMenuitem.nameEN : languae=="РУС" ? activeMenuitem.nameRU : null}</h1>
                </div>
                <div className={css.category} ref={ref}>
                    {activSub.map((item,index) => {
                      return (
                            <div
                                className={item.id == id ? css.btncategory : css.btncategory2}
                                key={item.id} onClick={() => changeProductCategory(item)}
                                >
                                <p className={item.id == id ? css.menuname : css.menuname2} >{languae=="ՀԱՅ" ? item.name : languae=="ENG" ? item.nameEN : languae=="РУС" ? item.nameRU : null}</p>
                            </div>
                        )
                    })
                    }

                </div>
                    {loader2 &&
                    <>
                    <div className={css.categoryitemblok}>
                        {
                            product.filter(fil=>fil.category_id==id).map((obj) => {

                                return (<ProductBlok
                                    key={obj.id}
                                    like={false}
                                    SendobjtoLikecategory={SendobjtoLikecategory}
                                    handleAddProductCard={handleAddProductCard}
                                    handleonlyproduct={handleonlyproduct}
                                    {...obj}
                                />)
                            })
                        }
                    </div>
                    <div className={css.recoment}>
                    <p className={css.recomtitle}>Խորհուրդ ենք տալիս նաեվ</p>
                      <div className={css.recomconstruct}>
                        { product.filter(fil=>fil.category.advices.length).map((obj) => {

                            return (<ProductBlok
                                key={obj.id}
                                like={false}
                                SendobjtoLikecategory={SendobjtoLikecategory}
                                handleAddProductCard={handleAddProductCard}
                                handleonlyproduct={handleonlyproduct}
                                {...obj}
                            />)
                        })
                        }
                    </div>

              </div>
                    </>
                    }

                     <div className={css.Sauces}>
                        <p className={css.Saucestitle}>Սոուսներ</p>
                        {/*{*/}
                        {/*    product.filter(i=>i.category==="սոուսներ").map((obj)=>{*/}
                        {/*       return   (<ProductBlok*/}
                        {/*            key={obj.id}*/}
                        {/*            SendobjtoLikecategory={SendobjtoLikecategory}*/}
                        {/*            handleAddProductCard={handleAddProductCard}*/}
                        {/*            handleonlyproduct={handleonlyproduct}*/}
                        {/*            {...obj}*/}
                        {/*        />)*/}
                        {/*    })*/}
                        {/*}*/}
                    </div>



            </div>}
        </>
    )
}
export default Menu;

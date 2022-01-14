import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router";
import css from "./Menu.module.scss";
import { useProduct } from "../Providers/ProductMenu";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "./ProductBlok/ProductBlok";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";
import { LoadProductData } from "../redux/Action/ProductAction";
import { useTranslation } from "react-i18next";
import axios from "axios";





const Menu = ({ history }) => {

    
    const {activSub,activeMenuitem, setactiveMenuitem,languae} = useProduct()
    const { id } = useParams();
    const { t }=useTranslation() 
    const dispatch =useDispatch()
    const ref =useRef(null)
    const [loader, setloader] = useState(true)
    const [loader2, setloader2] = useState(false)
    const product = useSelector(({ ProductReducer  }) => ProductReducer.product)
    const recoment = useSelector(({ ProductReducer  }) => ProductReducer.recoment)
    const Sauces = useSelector(({ ProductReducer  }) => ProductReducer.Sauces)
    const [advances,setadvances]=useState([])
    const [likeproduct,setLikeProduct]=useState([])
    useEffect(()=>{

        dispatch(LoadProductData())
        setloader2(true)

        let token=sessionStorage.getItem("token")
        let URL=process.env.REACT_APP_API_URL+"/user/like";
         axios.get(URL, {
            'headers': {  "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } ,
            method:"GET"
         }).then((data)=> {
                setLikeProduct(data.data)
             })
            .catch(err=>{
                console.log(err)
            })

      },[])


    useEffect(() => {
       if (activSub.length !== 0) {
           let active = activSub.find(i => i.name == id)
            setactiveMenuitem(active)
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
        history.push(`/home/${item.name}`)
        window.scrollTo(0, 300)
    }
    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }



    return (
        <>
            {loader ?
                <h1></h1> : <div className={css.contanier}>
                <div className={css.menuimagesandtitle}>
                    <img src={process.env.REACT_APP_IMG_URL+activeMenuitem?.bigImage} alt="" />
                    <h1 style={fontproprty}>{languae=="ՀԱՅ" ? activeMenuitem?.name : languae=="ENG" ? activeMenuitem?.nameEN : languae=="РУС" ? activeMenuitem?.nameRU : null}</h1>
                </div>
                <div className={css.category} ref={ref}>
                    {activSub.map((item,index) => {
                      return (
                            <div
                                className={item.name == id ? css.btncategory : css.btncategory2}
                                key={item.id} onClick={() => changeProductCategory(item,index)}
                                >
                                <p className={item.name == id ? css.menuname : css.menuname2} style={fontproprty} >{languae=="ՀԱՅ" ? item.name : languae=="ENG" ? item.nameEN : languae=="РУС" ? item.nameRU : null}</p>
                            </div>
                        )
                    })
                    }

                </div>
                    {loader2 &&
                    <>
                    <div className={css.categoryitemblok}>
                        {product.filter(fil=>fil.name==id)[0]?.products.map((obj) => {
                               return (<ProductBlok
                                    key={obj.id}
                                    likeproduct={likeproduct}
                                    handleAddProductCard={handleAddProductCard}
                                    handleonlyproduct={handleonlyproduct}
                                    {...obj}
                                />)
                            })}
                    </div>
                    <div className={css.recoment}>
                    <p className={css.recomtitle} style={fontproprty}>{t("advaces")}</p>
                      <div className={css.recomconstruct}>
                          {product.filter(fil=>fil.name==id)[0]?.advices?.map((obj) => {
                                return (<ProductBlok
                                      key={obj.product.id}
                                      likeproduct={likeproduct}
                                      handleAddProductCard={handleAddProductCard}
                                      handleonlyproduct={handleonlyproduct}
                                      {...obj.product}
                                  />)
                              })}
                    </div>
                   </div>
                    </>
                    }
                    {id=="Սոուսներ" && <div className={css.Sauces}>
                        <p className={css.Saucestitle} style={fontproprty}>Սոուսներ</p>
                        <div className={css.sousesblog}>
                            {product.filter(fil=>fil.name==id)[0]?.souses?.map((obj) => {
                                 return (<ProductBlok
                                    key={obj.id}
                                    likeproduct={likeproduct}
                                    handleAddProductCard={handleAddProductCard}
                                    handleonlyproduct={handleonlyproduct}
                                    {...obj}
                                />)
                            })}
                        </div>

                    </div>}
             </div>}
        </>
    )
}
export default Menu;

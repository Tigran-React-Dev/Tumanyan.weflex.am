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
import {LoadGrandBufetData, LoadProductData} from '../redux/Action/ProductAction';
import ProductBlokGrand from "./ProductBlok/ProductBlokGrand";
import {HOME_PAGE} from "../urls";
import axios from "axios";


const GrantBuffet = () => {


    const history = useHistory()
    const {languae} =useProduct()
    const grandfufet = useSelector(({ ProductReducer  }) => ProductReducer.grandfufet)
    const product = useSelector(({ ProductReducer  }) => ProductReducer.product)
    const {id} = useParams()
    const ref=useRef(null)
    const dispatch=useDispatch()
    let key2 = sessionStorage.getItem("city")
    const [activeMenuStyle,setActiveMenuStyle]=useState({0:true})
    const [loader2, setloader2] = useState(false)
    const [pagintion,setpagination]=useState(7)
    const [showpage,setShowPage]=useState(true)
    const [likeproductBuffet,setLikeProductBuffet]=useState([])


     useEffect(()=>{

         window.scrollTo(0, 0);
         if(grandfufet.length){
          let data =   grandfufet.filter(f=>f.name==id)
             if(!data.length){
                 history.push(HOME_PAGE)
             }
         }


     },[id,grandfufet])



     useEffect(()=>{
        //Coll grad bufe API in redux think
         dispatch(LoadGrandBufetData())
         setloader2(true)
        //get request req user token, res like product data

         let token=sessionStorage.getItem("token")
         let URL=process.env.REACT_APP_API_URL+"/user/likeBuffet";
         axios.get(URL, {
             'headers': {  "Content-Type": "multipart/form-data",
                 Authorization: `Bearer ${token}`
             } ,
             method:"GET"
         }).then((data)=> {
             debugger
             setLikeProductBuffet(data.data)
         })
             .catch(err=>{
                 console.log(err)
             })

         },[])

    useEffect(()=>{

        let sityname="Ծաղկաձոր"
        if(key2){
            if(key2.toLowerCase()==sityname.toLowerCase()){
                setShowPage(false)
            }else{
                setShowPage(true)
            }
        }
    },[key2])

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
        setActiveMenuStyle({[index]:!activeMenuStyle[index]})
        history.push(`/buffet/${menu.name}`)
    }
    const handleAddProductCard =(obj)=>{
        dispatch(AddproductCard(obj))
    }
    const handleonlyproduct=(obj2)=>{
        dispatch(AddproductCardonly(obj2))
    }


    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }
    const fontproprty2={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Regular" : languae=="ENG" ?
                "manrope-reg" : languae=="РУС" ?
                    "manrope-reg" : null
    }
    console.log(grandfufet)

    return (
        <div className={css.grandebufecontantainer}>
            <div className={css.grandbufeHdr}>
                 <h1 style={fontproprty}>grand buffet</h1>
            </div>
            {loader2 && showpage ?
            <>
             <div className={css.menuconsreuctor} ref={ref}>
                {
                    grandfufet.map((elem,index)=>{
                        return(
                            <div
                                className={css.itemmenu}
                                key={elem.id}
                                onClick={()=>ChangeStyleAndCategory(elem,index)}
                                style={{background:elem.name==id && "#13AD54",border:elem.name==id && "none"}}
                            >
                                <p style={{color:elem.name==id && "#FFFFFF" ,...fontproprty}}>{languae=="ՀԱՅ" ? elem.name : languae=="ENG" ? elem.nameEN : languae=="РУС" ? elem.nameRU : null}</p>

                            </div>

                        )
                    })
                }
            </div>
            <div className={css.bufetitemblok}>
                {grandfufet.filter(fil=>fil.name==id)?.[0]?.product_buffets.map((obj,index)=>{
                        return(
                            index<=pagintion &&
                            <ProductBlokGrand
                            likeproductBuffet={likeproductBuffet}
                            key={obj.id}
                            handleAddProductCard={handleAddProductCard}
                            handleonlyproduct={handleonlyproduct}
                            {...obj}
                          />
                        )
                    })
                }

            </div>

            </>
                :
                <div  className={css.blokbufet}>
                   <p style={fontproprty}>Գրանդ Բուֆֆեի տեսականին Ծաղկաձորում հասանելի չէ։</p>
                </div>
            }
            {grandfufet.filter(fil=>fil.name==id)?.[0]?.product_buffets.length>8 && <div className={css.grandbufefooter}>
                <Button
                    title="տեսնել ավելին"
                    cn="btnreadmore2"
                    style={fontproprty}
                    onClick={() => setpagination(pagintion + 8)}/>
            </div>}
        </div>
    );
};

export default GrantBuffet;
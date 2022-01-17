import React, {useEffect, useState} from 'react';
import css from "./Serch.module.scss";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "../Menu/ProductBlok/ProductBlok";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";
import ProductBlokGrand from "../GrandBuffet/ProductBlok/ProductBlokGrand";
import {LoadProductData} from "../redux/Action/ProductAction";
import axios from "axios";



const Serch = () => {

    const serchdata = useSelector(({ ProductReducer  }) => ProductReducer.searchProduct)
    const serchtext = useSelector(({ ProductReducer  }) => ProductReducer.searchtext)
    const dispatch =useDispatch()
    const [likeproduct,setLikeProduct]=useState([])
    const [likeproductBuffet,setLikeProductBuffet]=useState([])
    useEffect(()=>{

        let token=sessionStorage.getItem("token")
        let URL=process.env.REACT_APP_API_URL+"/user/like";
        axios.get(URL, {
            'headers': {  "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } ,
            method:"GET"
        })

            .then((data)=> {
                console.log(data)
                setLikeProduct(data.data)

            })
            .catch(err=>{
                console.log(err)
            })

        let URL_LIKE_GRANDBUFFE=process.env.REACT_APP_API_URL+"/user/likeBuffet";
         axios.get(URL_LIKE_GRANDBUFFE, {
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


    const handleAddProductCard =(obj)=>{
        dispatch(AddproductCard(obj))
    }
    useEffect(()=>{


    },[serchdata])

    const handleonlyproduct=(obj2)=>{
        dispatch(AddproductCardonly(obj2))
    }
    const SendobjtoLikecategory =(ob)=>{
        dispatch(LikeObjSenddat(ob))
    }

    return (
         <div className={css.serchpage}>
            <div className={css.searchhdr}>
                <div className={css.textstatus}>
                  <p>որոնման արդյունքները</p>
                    <div style={{display:"flex"}}>
                        <h3>&nbsp;&nbsp;«{serchtext}»&nbsp;&nbsp;</h3>
                        <p>բառի համար</p>
                    </div>

                  <h6>&nbsp;({(serchdata.product==undefined) ? "0" : (+serchdata.product?.length)+(+serchdata.product_buffet?.length)} արդյունք)</h6>
                </div>

            </div>
             {(serchdata.product?.length>0 || serchdata.product_buffet?.length>0) ?  <div className={css.product}>
                 {serchdata.product?.map((obj) => {
                     return (
                         <ProductBlok
                             key={obj.id}
                             likeproduct={likeproduct}
                             handleAddProductCard={handleAddProductCard}
                             handleonlyproduct={handleonlyproduct}
                             {...obj}
                         />
                     )
                 })

                 }
                 {serchdata.product_buffet?.map((obj) => {
                     return (
                         <ProductBlokGrand
                             key={obj.id}
                             likeproductBuffet={likeproductBuffet}
                             handleAddProductCard={handleAddProductCard}
                             handleonlyproduct={handleonlyproduct}
                             {...obj}
                         />
                     )
                 })

                 }
             </div> : <p className={css.statuserror}>Որոնման արդյունքում ոչինչ չի գտնվել։</p>}
            </div>
    );
};

export default Serch;
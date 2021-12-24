import React, {useEffect} from 'react';
import css from "./Serch.module.scss";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "../Menu/ProductBlok/ProductBlok";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";
import ProductBlokGrand from "../GrandBuffet/ProductBlok/ProductBlokGrand";



const Serch = () => {

    const serchdata = useSelector(({ ProductReducer  }) => ProductReducer.searchProduct)
    const serchtext = useSelector(({ ProductReducer  }) => ProductReducer.searchtext)
    const dispatch =useDispatch()

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
                  <h3>&nbsp;&nbsp;«{serchtext}»&nbsp;&nbsp;</h3>
                  <p>բառի համար</p>
                  <h6>&nbsp;({(serchdata.product==undefined) ? "0" : (+serchdata.product?.length)+(+serchdata.product_buffet?.length)} արդյունք)</h6>
                </div>

            </div>
             {(serchdata.product?.length>0 || serchdata.product_buffet?.length>0) ?  <div className={css.product}>
                 {serchdata.product?.map((obj) => {
                     return (
                         <ProductBlok
                             key={obj.id}
                             like={false}
                             SendobjtoLikecategory={SendobjtoLikecategory}
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
                             like={false}
                             SendobjtoLikecategory={SendobjtoLikecategory}
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
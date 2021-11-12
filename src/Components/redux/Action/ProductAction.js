export const LIKE_PRODUCT ="LIKE_PRODUCT"
export const CHANGE_CHECKBOX ="CHANGE_CHECKBOX"


export const LikedProduct=(id,category,like)=>{
   return{
       type:LIKE_PRODUCT,
       payload: {
           id,
           category,
           like
       }
   }
}


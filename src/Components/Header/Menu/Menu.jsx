import React, {useState} from "react";
import css from "./Menu.module.scss";
import { isAuthRoutes } from "../../routes";
import { NavLink } from "react-router-dom";
import { useProduct } from "../../Providers/ProductMenu";



const Menu =()=>{

    const {languae}=useProduct()
    const [activestyle,setActiveStyle]=useState(null)


    return(
        <div className={css.menu}>
          <ul >
              {isAuthRoutes.map((item,i)=>{
                        
                  return(
                   <li key={item.id}>
                        
                       <NavLink style={{color:activestyle===i && "#BFB7B6"}} onClick={()=>setActiveStyle(i)}  to={item.path} exact >{languae=="ՀԱՅ" ? item.nameՀԱՅ : languae=="ENG" ? item.nameENG : languae=="РУС" ? item.nameРУС : null}</NavLink>
                   </li>

                  )
              })

              }
          </ul>
        </div>

    )

}

export default Menu;
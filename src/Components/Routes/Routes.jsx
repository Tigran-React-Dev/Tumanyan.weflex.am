import React from "react";
import {Switch,Route} from "react-router-dom";
import Menu from "../Menu/Menu";
import { isAuthRoutes } from "../routes";
import Tumanian from "../Tumanian/Tumanian";
import {
    BASKET_PAGE, FOOD_TRUCK_PAGE, GRAND_BUFFE_PAGE,
    HOME_PAGE,
    LOGIN_PAGES,
    MENU_PAGE,
    NEW_PASSWORD,
    PROFIL_PAGE, PROJECT_PAGE_INFO,
    REGISTER_PAGE,
    RESET_PASSWORD
} from "../urls";
import Basket from "../Basket/Basket";
import LoginPage from "../UserPage/LoginPage/LoginPage";
import SendMailurl from "../UserPage/ResetPassword/SendMailurl";
import ResetPassword from "../UserPage/ResetPassword/ResetPassword";
import Registration from "../UserPage/Registeration/Registration";
import ProfilPage from "../UserPage/ProfilPage/ProfilPage";
import ProjectModals from "../Projects/ProjectModals/ProjectModals";
import Foodtruck from "../Foodtruck/Foodtruck";
import GrantBuffet from "../GrandBuffet/GrantBuffet";




const Routes =()=>{

    return (
        
          <Switch>
             {
                 isAuthRoutes.map(({id,component,path})=>{
                     return (
                        <Route key={id} path={path} component={component} exact/>
                     )
                 })
             }
              <Route path={HOME_PAGE} component={Tumanian} exact/>
              <Route path={MENU_PAGE} component={Menu} exact/>
              <Route path={BASKET_PAGE} component={Basket}exact/>
              <Route path={LOGIN_PAGES} component={LoginPage} exact/>
              <Route path={RESET_PASSWORD} component={SendMailurl} exact/>
              <Route path={NEW_PASSWORD} component={ResetPassword} exact/>
              <Route path={REGISTER_PAGE} component={Registration} exact/>
              <Route path={PROFIL_PAGE} component={ProfilPage} exact/>
              <Route path={PROJECT_PAGE_INFO} component={ProjectModals}/>
              <Route path={FOOD_TRUCK_PAGE} component={Foodtruck} exact/>
              <Route path={GRAND_BUFFE_PAGE} component={GrantBuffet} exact/>
          </Switch>


        
    )
}


export default Routes;
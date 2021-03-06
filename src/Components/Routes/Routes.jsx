import React from "react";
import {Switch, Route, useHistory, Redirect, useLocation} from "react-router-dom";
import Menu from "../Menu/Menu";
import {isAuthRoutes, isOuthFooter} from "../routes";
import Tumanian from "../Tumanian/Tumanian";
import {
    BASKET_PAGE,
    FOOD_TRUCK_PAGE,
    GRAND_BUFFE_PAGE,
    HOME_PAGE,
    LOGIN_PAGES,
    MENU_PAGE,
    NEW_PASSWORD, PRIVACY_POLICEY,
    PROFIL_PAGE,
    PROJECT_PAGE_INFO,
    REGISTER_PAGE,
    RESET_PASSWORD
    , SEARCH_PAGE
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
import Serch from "../Serch/Serch";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";




const Routes =()=>{
    const history=useLocation()
      isAuthRoutes.forEach(p=>{
          if(history.pathname ==p.path){

              return
          }else{
            return  <Redirect to={HOME_PAGE} exact/>
          }
      })

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
              <Route path={SEARCH_PAGE} component={Serch} exact/>
              <Route path={PRIVACY_POLICEY} component={PrivacyPolicy} exect/>
          </Switch>


        
    )
}


export default Routes;
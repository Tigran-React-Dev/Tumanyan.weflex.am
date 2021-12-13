import Tumanian from "../Components/Tumanian/Tumanian";
import Jobs from "../Components/Jobs/Jobs";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact"
import {
    ABOUT_PAGE,
    CONTACT_PAGE,
    FOOD_TRUCK_PAGE,
    GRAND_BUFFE_PAGE,
    HOME_PAGE,
    JOBS_PAGE,
    MENU_PAGE,
    PROJECT_PAGE
} from "./urls"
import Projects from "./Projects/Projects";
import Menu from "./Menu/Menu";
import GrantBuffet from "./GrandBuffet/GrantBuffet";


export const isAuthRoutes =[
    
    {
        id:3,
        component:Projects,
        nameՀԱՅ:"Նախագծեր",
        nameENG:"Project",
        nameРУС:"Проекты",
        path:PROJECT_PAGE
    },
    {
        id:4,
        component:Jobs,
        nameՀԱՅ:"Աշխատանք",
        nameENG:"Job",
        nameРУС:"Работа",
        path:JOBS_PAGE
    },
    {
        id:5,
        component:About,
        nameՀԱՅ:"Մեր մասին",
        nameENG:"About",
        nameРУС:"О нас",
        path:ABOUT_PAGE,
    },
    {
        id:6,
        component:Contact,
        nameՀԱՅ:"Կապ",
        nameENG:"Contact",
        nameРУС:"Контакт",
        path:CONTACT_PAGE
    },

];


export const isOuthFooter =[
    {
        id:7,
        component:Tumanian,
        nameՀԱՅ:"Գլխավոր",
        nameENG:"Home Page",
        nameРУС:"Главная страница",
        path:HOME_PAGE,
    },
    {
        id:8,
        component:Tumanian,
        nameՀԱՅ:"Մենյու",
        nameENG:"Menu",
        nameРУС:"Меню",
        path:HOME_PAGE,
    },
    {
        id:9,
        component:GrantBuffet,
        nameՀԱՅ:"Գրանդ բուֆֆե",
        nameENG:"Գրանդ բուֆֆե",
        nameРУС: "Գրանդ բուֆֆե",
        path:"grandBuffe/Axcan",
    },{
        id:10,
        component:Tumanian,
        nameՀԱՅ:"Food truck",
        nameENG:"Food truck",
        nameРУС:"Food truck",
        path:FOOD_TRUCK_PAGE,
    },

]
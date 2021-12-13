// import React, {useState} from 'react';
// import  css from "./Nav.module.scss";
// import serch from "../../images/icons/search.png";
// import Input from "../Global/Input/Input";
// import Menu from "../Header/Menu/Menu";
// import {useTranslation} from "react-i18next";
//
//
// const Nav = () => {
//     const [sowmenu, setSoumenu] = useState(false)
//     const [inputborder, setInputborder] = useState(false)
//     const { t } = useTranslation();
//     const changeborderinput = (key) => {
//         key ? setInputborder(key) : setInputborder(!inputborder)
//
//     }
//     const changeScrol = (e) => {
//         if (window.scrollY >= 150) {
//             setSoumenu(true)
//         } else {
//             setSoumenu(false)
//         }
//
//     }
//     window.addEventListener("scroll", changeScrol)
//
//
//     const cardStyle = {
//
//         top:  sowmenu ? "-3.4vw" : "0vw",
//          transition: "all 0.4s",
//         // opacity: sowmenu ? "0" : "1",
//
//     };
//
//     return (
//         <div  className={css.header}  style={cardStyle}>
//             <div className={css.serch}>
//                 <form>
//                     <img src={serch} alt="" />
//                     <Input
//                         cn="searchInput"
//                         onMouseEnter={changeborderinput}
//                         onMouseLeave={() => changeborderinput(null)}
//                         placeholder={t('plachholderserch')} />
//                 </form>
//
//             </div>
//             <Menu />
//         </div>
//     );
// };
//
// export default Nav;
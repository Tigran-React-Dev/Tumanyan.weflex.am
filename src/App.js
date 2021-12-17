import logo from './logo.svg';
import './App.scss';
import {Switch,Route,Link,useLocation,Redirect} from "react-router-dom";
import Header from "./Components/Header/Header"
import Routes from "./Components/Routes/Routes"
import {useState,useEffect} from "react";
import Button from "./Components/Global/Button/Button";
import {useProduct} from "./Components/Providers/ProductMenu";
import close from "./images/icons/close.png";
import {HOME_PAGE} from "./Components/urls";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {loadLocalCard} from "./Components/redux/Action/CardAction"
import axios from "axios";

function App() {


    const key = sessionStorage.getItem("key")
    const dispath=useDispatch()
    const [sowZapros ,setSowZapros]=useState(true)
    const {menuCategorup,ChangeACtivSup,setDefaultSity,setactiveCityname,getData} =useProduct()
    const [bgcolor,setBgcolor]=useState(null)
    const history = useLocation()
    const [loading,setloading]=useState(false)
    const [sowmenu, setSoumenu] = useState(false)



  useEffect(()=>{
  let key2 = sessionStorage.getItem("city")

      if(key2){
          setactiveCityname(key2)
          setDefaultSity(key2)
      }
      getData()
    },[])


  useEffect(() => {
     const item = JSON.parse(localStorage.getItem("card"))
   if(item){
      dispath(loadLocalCard(item))
    }
    
      setloading(true)
}, [])

    const Clickcountry =(activdata,name,id)=>{
        sessionStorage.setItem("city",name.toLowerCase())
        setDefaultSity(name.toLowerCase())
        ChangeACtivSup(activdata,name)
        setBgcolor(id)
    }
    
    useEffect(()=>{

         window.scrollTo(0, 0);

    },[])
   if(history.pathname==="/"){
        return <Redirect to={HOME_PAGE}/>
    }

    const CloseWinzapros=()=>{
        setSowZapros(!sowZapros)
        sessionStorage.setItem("key",false)
    }

    const changeScrol = (e) => {
        var width = window.innerWidth;
        if (window.scrollY >= 150 && width > 500) {
            setSoumenu(true)
        } else {
            setSoumenu(false)
        }


    }
    window.addEventListener("scroll", changeScrol)


    const stylemain={
        position:sowmenu ? "absolute" : "absolute",
        top:  sowmenu ? "-1.5vw" : "0vw",
        transition: "all 0.3s ease-in",
    }

    const stylefooter={
        
    }


  return (
    <>
     {loading ? <div>
           <Header/>
      <div className="main" style={stylemain}>
           <Routes/>
           <div style={stylefooter}>
           <Footer/>
           </div>
         
       </div>
          {sowZapros   && !key  && <div className="modalzapros">
             <div className="wraper" onClick={()=>setSowZapros(!sowZapros)} />
                 <div className="zapros" onClick={(e)=>e.stopPropagation()}>
                     <div className="closewindow" onClick={CloseWinzapros}>
                         <img src={close}  className="close"/>
                     </div>
                       <div className="selectetcountri">
                       <h2>Ընտրեք ձեր քաղաքը</h2>
                       </div>
                      
                     <div className="butonns">
                         {
                             menuCategorup.map(({id,name,sup})=>{
                                 return (
                                      <Button
                                        cn={bgcolor===id ? "zaprosbuuton2" : "zaprosbuuton"  }
                                         key={id} 
                                         title={`${name}`} onClick={()=>Clickcountry(sup,name,id)}/>
                                        )
                                    })
                           }
                     </div>
                 </div>


         </div>}
        
     </div> : null}
     </>
  );
}

export default App;

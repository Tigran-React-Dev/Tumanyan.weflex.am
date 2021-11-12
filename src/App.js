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

function App() {

    const CardDeda= useSelector(({CardReducer})=>CardReducer)

    

    const key = sessionStorage.getItem("key")
    const dispath=useDispatch()
    const [sowZapros ,setSowZapros]=useState(true)
    const {mecdata,ChangeACtivSup,setDefaultSity,getData} =useProduct()
    const [bgcolor,setBgcolor]=useState(null)
    const history = useLocation()
    const [loading,setloading]=useState(false)

  useEffect(()=>{
    getData()
  },[])


  useEffect(() => {
      
    const item = JSON.parse(sessionStorage.getItem("card"))
   
    if(item){
      dispath(loadLocalCard(item))
    }
    
      setloading(true)
}, [])

    const Clickcountry =(activdata,name,id)=>{
        setDefaultSity(name)
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

  




  return (
    <>
     {loading ? <div>
      
      
      <Header/>
      <div className="main">
         <Routes/>
       </div>
       <Footer/>
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
                             mecdata.map(({id,name,sup})=>{
                                 return (
                                      <Button
                                       // style={{backgroundColor:bgcolor===id ?
                                       //  "#13AD54" :"#FFFFFF",
                                       //  color:bgcolor===id ? "#FFFFFF" :"#13AD54",
                                       //     boxShadow:bgcolor===id ?  "none" :" 1px 1px 5px rgba(3, 142, 62, 0.2)"}}
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

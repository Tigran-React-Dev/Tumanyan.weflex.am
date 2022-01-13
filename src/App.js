import logo from './logo.svg';
import './App.scss';
import {useLocation,Redirect} from "react-router-dom";
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
import {LoadingUserdata, LoadingUserdataError} from "./Components/redux/Action/AuthACtion";

function App() {


    const key = sessionStorage.getItem("key")
    const dispath=useDispatch()
    const history = useLocation()
    const [sowZapros ,setSowZapros]=useState(true)
    const {menuCategorup,ChangeACtivSup,setDefaultSity,setactiveCityname,getData,languae,setLanguage} =useProduct()
    const [bgcolor,setBgcolor]=useState(null)
    const [loading,setloading]=useState(false)
    const [sowmenu, setSoumenu] = useState(false)



  useEffect(()=>{
  localStorage.setItem("i18nextLng","ՀԱՅ")
  let key2 = sessionStorage.getItem("city")
  const item = JSON.parse(localStorage.getItem("card"))
  if(item){
    dispath(loadLocalCard(item))
  }
  
    setloading(true)
      if(key2){
          setactiveCityname(key2)
          setDefaultSity(key2)
      }
      getData()
      window.scrollTo(0, 0);
    },[])

    useEffect(()=>{
        let userinfo=JSON.parse(sessionStorage.getItem("user"))
        if(userinfo?.token){
            dispath(LoadingUserdata(userinfo,userinfo.token))
        }else{
            dispath(LoadingUserdataError())
        }

    },[sessionStorage.getItem("token")])


  useEffect(() => {
      const activeLanguage=localStorage.getItem("i18nextLng")
      if(activeLanguage){
        setLanguage(activeLanguage)
      }
     
   
      }, [languae])

     const Clickcountry =(activdata,name,id)=>{
        var width = window.innerWidth;
        sessionStorage.setItem("city",name.toLowerCase())
        setDefaultSity(name.toLowerCase())
        ChangeACtivSup(activdata,name)
        setBgcolor(id)
        if(width<700){
            setSowZapros(!sowZapros)
        }
     }
    

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



  return (
    <>
     {loading ? <div>
           <Header/>
      <div className="main" style={stylemain}>
           <Routes/>
           <div>
           <Footer/>
           </div>
         
       </div>
          {sowZapros   && !key  &&
          <div className="modalzapros">
             <div
                 className="wraper"
                 onClick={()=>setSowZapros(!sowZapros)}
             />
                 <div
                     className="zapros"
                     onClick={(e)=>e.stopPropagation()}>
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

import Reactm,{useState} from 'react';
import css from "./Check.module.scss";
import checkt from "../../../images/icons/chechkoriginal.png"

const Check = (props) => {
    
  

    return (
         <>
            <input
                {...props}
                className={css[props.cn]}
                type="checkbox"
                id={props.id}
                checked={props.isChecked}
            />
             <label htmlFor={props.id}>
             <div className={css.ckekckdiv} style={{ 
                       backgroundColor:props.isChecked && "#13AD54",border: props.isChecked && "1px solid #13AD54"
                   }}>
                     {props.isChecked && <img  src={checkt} alt="" /> }
                   </div>
                 <p className={css.textstyle}>{props.lableinfo}</p></label>
        </>
    );
};

export default Check;
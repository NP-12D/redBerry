import styles from "./PasswordForm.module.css" ;
import { useState } from "react";
import eye from "../../assets/Vector.svg";

 
  
export default function PasswordForm({label,name,register, error}){
 const [showPassword, setShowPassword] = useState(false);
    return(<>
    <div className={styles.error_message}>
 <div className={styles.input_div}>
            <label htmlFor={name} className={styles.label}>
              {label}
            </label>
            <input
              id={name}
              type={showPassword ? "text" : "password"}
              {...register(name)}
              placeholder="*"
            ></input>
            <img
              className={styles.eye}
              src={eye}
              onClick={() => setShowPassword(!showPassword)}
            ></img>
          </div>
          {error && <p>{error}</p>}
          </div>
        

    </>)
}
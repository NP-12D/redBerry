import { Link } from "react-router-dom";
import styles from "./ProdactsHeader.module.css"
import logo from "../../assets/HandEye.svg"
import cart from "../../assets/cart.svg"
import person from "../../assets/Ellipse 1.svg"
import downicon from "../../assets/downicon.svg"
export default function ProdactsHeader(){
    return (<>
      
    <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} />
            <h2>RedSeam Clothing</h2>
          </div>
        </Link>
        <div className={styles.imgs_div}>
            <img src={cart} className={styles.cartImg}/>
            <div> <img src={person} className={styles.person_img}/>
            <img src={downicon} className={styles.down}/>
            </div>
           
        </div>

      </header>
    </>);
}
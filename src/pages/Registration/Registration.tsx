import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./Registration.css";
import "../../components/Header/Header"
import mainimg from "../../assets/Rectangle10.svg"
import Header from "../../components/Header/Header";
export default function Registration() {
  return (
   
    <>
     <Header name="Log in"/>
    <main>
        <div className="big_img">
           <img src={mainimg}/>
        </div>
        <div>
            <h1>Registration</h1>
      <RegistrationForm />
      </div>
      </main>
    </>
  );
}

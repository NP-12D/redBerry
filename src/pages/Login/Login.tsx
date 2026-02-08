
import "../Registration/Registration.css";
import mainimg from "../../assets/Rectangle10.svg"
import LoginForm from "../../components/Login/LoginForm";
import Header from "../../components/Header/Header";
export default function Login() {
  return (
    <>
    <Header name="Register"/>
    <main>
        <div className="big_img">
           <img src={mainimg}/>
        </div>
        <div>
          <LoginForm/>
      
      </div>
      </main>
    </>
  );
}

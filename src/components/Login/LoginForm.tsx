import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utlities/yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PasswordForm from "../PasswordForm/PasswordForm";
import Button from "../RegistrationForm/Button/Button";
import styles from "../RegistrationForm/RegistrationForm.module.css"
import "./LoginForm.css"
import axios from "axios";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const navigate=useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      

      formData.append("email", data.email);

      formData.append("password", data.password);
      

      console.log([...formData.entries()]);

      const response = await axios.post(
        "https://api.redseam.redberryinternship.ge/api/login",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );

      console.log("Log in success:", response.data);
      navigate("/products");
    } catch (error) {
      console.error("Log in  failed:", error);
    }
  };


  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.error_message}>
          <div className={styles.input_div}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="text"
            {...register("email")}
            placeholder="*"
          />
          </div>
          {errors.email && <p>{errors.email.message}</p>}
        
        </div>

        <PasswordForm
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <div className={styles.for_button}>
          <Button name="Log in" />
          <p>
            Not a member?<Link to="/"> Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

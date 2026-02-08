import styles from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { schema } from "../../utlities/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import avatar from "../../assets/Ellipse 1.svg";
import Button from "./Button/Button";
import PasswordForm from "../PasswordForm/PasswordForm";

import axios from "axios";

export default function RegistrationForm() {
  const [preview, setPreview] = useState(avatar);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    fileInputRef.current.value = "";

    setPreview(avatar);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      if (fileInputRef.current?.files[0]) {
        formData.append("avatar", fileInputRef.current.files[0]);
      } else {
        formData.append("avatar", null);
      }

      formData.append("email", data.email);

      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);
      formData.append("username", data.userName);

      console.log([...formData.entries()]);

      const response = await axios.post(
        "https://api.redseam.redberryinternship.ge/api/register",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );

      console.log("Registration success:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  //   const onSubmit = async (data: any) => {
  //     const formData = new FormData();
  // formData.append("userName", data.userName);
  // formData.append("email", data.email);
  // formData.append("password", data.password);
  // formData.append("confirmPassword", data.confirmPassword);
  // formData.append("avatar", fileInputRef.current.files[0]);

  //     try {
  //       const response = await axios.post(
  //         "https://api.redseam.redberryinternship.ge/api/register",
  //         formData,
  //         { headers: { "Content-Type": "multipart/form-data",
  //                      "Accept":"application/json"
  //          } },
  //       );
  //       console.log("Registration success:", response.data);
  //     } catch (error) {
  //       console.error("Registration failed:", error);
  //     }
  //   };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.img_upload}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleChange(e)}
          />
          <img
            src={preview}
            alt="Click to upload"
            style={{ width: 150, height: 150, cursor: "pointer" }}
          />
          <p onClick={handleClick}>Upload new </p>
          <p onClick={handleDelete}>Remove</p>
        </div>
        <div className={styles.error_message}>
          <div className={styles.input_div}>
            <label htmlFor="userName" className={styles.label}>
              UserName
            </label>
            <input
              id="userName"
              type="text"
              {...register("userName")}
              placeholder="*"
            ></input>
          </div>
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div className={styles.error_message}>
          <div className={styles.input_div}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email")}
              placeholder="*"
            ></input>
          </div>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <PasswordForm
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <PasswordForm
          label="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <div className={styles.for_button}>
          <Button name="Register" />
          <p>
            Already member? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </>
  );
}

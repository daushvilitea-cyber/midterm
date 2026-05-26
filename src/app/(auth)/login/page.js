"use client";

import styles from "./page.module.css";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),

  password: yup
    .string()
    .required("Password is required"),
});

function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        }
      );

      const result = await response.json();

      if (result?.token) {
        if (data.rememberMe) {
          localStorage.setItem("token", result.token);
        }

        reset();
        router.push("/profile");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.inputWrapper}>
          <label>Username:</label>
          <br />

          <input
            {...register("username")}
            className={styles.input}
            placeholder="username"
          />

          {errors.username && (
            <p className={styles.error}>
              {errors.username.message}
            </p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label>Password:</label>
          <br />

          <input
            {...register("password")}
            className={styles.input}
            placeholder="password"
            type="password"
          />

          {errors.password && (
            <p className={styles.error}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="checkbox"
            {...register("rememberMe")}
          />
          <label> Remember me</label>
        </div>

        <button
          type="submit"
          className={styles.button}
        >
          Login
        </button>
      </form>

      <Link href="/register">
        <button className={styles.notResgitered}>
          No account? Register
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
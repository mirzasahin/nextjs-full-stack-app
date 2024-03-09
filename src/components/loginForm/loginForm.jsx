"use client";
import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  /* useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]); */

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username"></input>
      <input type="password" placeholder="Password" name="password"></input>

      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {" Don't have an account? "}
        <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

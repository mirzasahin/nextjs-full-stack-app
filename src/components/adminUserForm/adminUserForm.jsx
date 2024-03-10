"use client";

import React from "react";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

export const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="Image" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

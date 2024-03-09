"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userId = formData.get("userId");

  /* const {title, desc, slug, userId} = Object.fromEntries(formData); */ // Object destructuring | Short way

  try {
    connectToDb();
    const newPost = new Post({
      // If data names is same, you can use just title, desc, slug and userId.
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
    });

    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog"); // Whenever we add a new post even if we cache our blog posts it's going to revalidate our path and it's going to show us the fresh data.
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  console.log(title, desc, slug, userId);
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData); // Object destructuring | Short way

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog"); // Whenever we add a new post even if we cache our blog posts it's going to revalidate our path and it's going to show us the fresh data.
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return "Username already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    alert("Completed your register");
    console.log("saved to db");
  } catch (error) {
    return { error: "You have successfully registered!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return { error: "You have successfully registered!" };
  }
};

"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

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

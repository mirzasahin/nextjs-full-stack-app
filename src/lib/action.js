import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  "use server";

  const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userId = formData.get("userId");

  /* const {title, desc, slug, userId} = Object.fromEntries(formData); */ // Object destructuring | Short way

  try {
    connectToDb();
    const newPost = new Post({ // If data names is same, you can use just title, desc, slug and userId.
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
    });

    await newPost.save();
    console.log('save to db');

  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  console.log(title, desc, slug, userId);
};

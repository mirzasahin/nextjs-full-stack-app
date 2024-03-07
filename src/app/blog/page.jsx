import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH API
/* const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}; */

export const metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const BlogPage = async () => {
  
  // FETCH DATA WITH API
  /* const posts = await getData(); */

  // FETCH DATA WITHOUT API
  const posts = await getPosts()


  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

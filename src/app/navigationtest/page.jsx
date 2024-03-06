"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default NavigationTestPage;

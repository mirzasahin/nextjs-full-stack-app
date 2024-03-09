import { handleGithubLogin } from "@/lib/action";
import React from "react";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;

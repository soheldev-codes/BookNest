"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = () => {
  const router = useRouter();

  const HandelGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    toast.success("successfully login now!");
    router.push("/");
  };

  return (
    <div className="">
      <div className="divider">OR</div>
      <button onClick={HandelGoogleSignIn} className="btn w-full ">
        <FaGoogle /> Google Sign In
      </button>
    </div>
  );
};

export default GoogleSignIn;

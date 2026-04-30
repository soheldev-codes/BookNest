"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

const Logout = () => {
  const logout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");
  };

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;

  return (
    <>
      {user ? (
        <>
          <div className="badge badge-soft py-4 px-4 text-black font-semibold mr-2">
            <FiUser /> {user?.name}
          </div>
          <button onClick={logout} className="btn ">
            <FiLogOut /> Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="btn ">
          <FiLogIn /> Login
        </Link>
      )}
    </>
  );
};

export default Logout;

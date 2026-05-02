"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProfileUpdate = () => {
  const router = useRouter();

  const handelUpdateUser = async (e) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const image = e.target.image?.value;

    if (!name && !image) {
      toast.error("Required Name and image url");
      return;
    }

    await authClient.updateUser({
      image,
      name,
    });

    toast.success("Thank You Update your information");
    router.push("/profile");
    e.target.reset();
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <div className="card max-w-2xl mt-12 mx-auto py-8   shadow-2xl">
        <form onSubmit={handelUpdateUser} className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full outline-0 border-0 shadow mb-4"
              placeholder="Update Name here"
            />
            <label className="label">Image</label>
            <input
              name="image"
              type="text"
              className="input w-full outline-0 border-0 shadow"
              placeholder="Update Image Url"
            />

            <button
              type="submit"
              className="btn bg-[#643CDD] hover:bg-[#643CDD]/90 text-white mt-4"
            >
              Update User
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;

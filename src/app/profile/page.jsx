"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const handelUpdateUser = async (e) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const image = e.target.image?.value;

    if (!name && !image) {
      toast.error("Required Name and image url");
      document.getElementById("my_modal_2").close();
      return;
    }

    await authClient.updateUser({
      image,
      name,
    });

    document.getElementById("my_modal_2").close();

    toast.success("Thank You Update your information");
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto pt-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" rounded-2xl  overflow-hidden shadow-sm "
      >
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10" />

        <div className="px-6 pb-6 -mt-12 ">
          {/* Avatar */}
          <div className="w-24 h-28 rounded-2xl border-4 border-white overflow-hidden mb-4">
            {user?.image ? (
              <Image
                width={200}
                height={200}
                src={user?.image}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary/10">
                <FaUser className="text-primary text-3xl" />
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-foreground">
            {user?.name || "User"}
          </h1>

          <div className="flex items-center gap-2 text-muted-foreground mt-1">
            <FaEnvelope className="text-sm" />
            <span className="text-sm">{user?.email}</span>
          </div>

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn mt-4 px-4 py-2 cursor-pointer  rounded-xl flex items-center gap-2 hover:bg-muted transition"
          >
            Update Profile <FaArrowRight className="text-sm" />
          </button>
        </div>
      </motion.div>

      {/*  */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="card ">
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
      </dialog>
    </div>
  );
}

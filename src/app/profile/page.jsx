"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

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

          <Link href="/profile/update">
            <button className="btn mt-4 px-4 py-2 cursor-pointer  rounded-xl flex items-center gap-2 hover:bg-muted transition">
              Update Profile <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </motion.div>

      {/*  */}
    </div>
  );
}

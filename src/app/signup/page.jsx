"use client";

import GoogleSignIn from "@/components/GoogleSignIn/GoogleSignIn";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const name = data.name;
    const image = data.image;
    const email = data.email;
    const password = data.password;

    const { data: res, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
      callbackURL: "/",
    });

    if (res) {
      toast.success("Account created successfully 🎉");
    } else {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Create Account 🚀
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full pl-10"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full pl-10"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  className="input input-bordered w-full pl-10 pr-10"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                />

                {/* Show/Hide Button */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div className="form-control">
              <label className="label">Image URL</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your profile image link here"
                  className="input input-bordered w-full pl-10"
                  {...register("image", {
                    required: "Your prfile image required",
                  })}
                />
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full mt-4">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}

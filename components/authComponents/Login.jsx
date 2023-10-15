"use client";
import React from "react";
import Image from "next/image";
import chatgptIMG from "../../public/img/chatgptIMG.png";
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center">
      <Image
        src={chatgptIMG}
        alt="chatgpt"
        height={150}
        className="animate-bounce"
      />
      <h1 className="text-3xl font-bold text-white py-4">ChatGPT</h1>

      <button
        className="bg-teal-300   px-6 py-2 rounded-lg hover:text-white hover:bg-teal-700 transition-all duration-200 ease-out"
        onClick={() => signIn("google")}
      >
        Sign In
      </button>
    </div>
  );
}

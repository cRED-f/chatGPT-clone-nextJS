"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

export default function ChatInput({ id }) {
  const [input, setInput] = React.useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) return;

    const inp = input.trim();

    setInput("");

    const message = {
      text: inp,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email,
        name: session?.user?.name,
        avatar: session?.user?.image || null,
      },
    };
    await addDoc(
      collection(db, "users", session?.user?.email, "chats", id, "messages"),
      message
    );

    //Toast Notification
    const processing = toast.loading("Processing...");

    await fetch("/api/quetions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inp,
        id,
        model,
        session,
      }),
    }).then((res) => {
      toast.success("Success!");
      toast.dismiss(processing);
    });
  };
  return (
    <div className="shadow-md  rounded-lg text-sm">
      <form className="p-4 space-x-8 flex" onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="flex-1   focus:outline-none "
          placeholder="Send a message"
        />
        <button
          className={`h-6 w-6 flex justify-center items-center ${
            input.length > 0
              ? `bg-[#11A37F] rounded-md  text-white`
              : `text-gray-400/50`
          }`}
        >
          <PaperAirplaneIcon className="h-4 w-4" />
        </button>
      </form>

      <div>{/**model selection */}</div>
    </div>
  );
}

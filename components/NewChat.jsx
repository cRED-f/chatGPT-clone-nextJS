"use client";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const docRef = await addDoc(
      collection(db, "users", session?.user?.email, "chats"),
      {
        // messages: [],
        useId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/c/${docRef.id}`);
  };
  return (
    <div
      onClick={createNewChat}
      className="border-gray-700 border chat-box text-sm"
    >
      <PlusIcon className="h-6 w-6 text-white" />
      <p>New Chat</p>
    </div>
  );
}

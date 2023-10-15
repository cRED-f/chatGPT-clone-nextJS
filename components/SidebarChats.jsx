import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

export default function SidebarChats({ id }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = React.useState(false);
  const [messages] = useCollection(
    session &&
      collection(db, "users", session?.user?.email, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) {
      return;
    }
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email, "chats", id));
    router.push(`/c/${id}`);
  };

  return (
    <Link
      href={`/c/${id}`}
      className={`flex justify-evenly py-2 rounded-md ${
        active && `bg-gray-700/50`
      }`}
    >
      <ChatBubbleLeftIcon className="h-6 w-5 text-gray-400" />

      <p className="flex-1 md:ml-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>

      <TrashIcon
        onClick={removeChat}
        className="h-6 w-5 text-gray-400 hover:text-teal-400"
      />
    </Link>
  );
}

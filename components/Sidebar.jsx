"use client";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  const { data: session } = useSession();
  // console.log(session);

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);
  return (
    <div className="bg-gray-900 text-white p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/** new chat*/}
        <NewChat />
        <div>{/** chat list*/}</div>

        {/** chat list item*/}
        <div>
          {/** chat list item active*/}
          {chats?.docs.map((chat) => (
            <SidebarChats key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="flex justify-evenly">
          <img
            src={session.user?.image || null}
            className="w-10 h-10 rounded-sm"
            alt="user"
          />
          <div>
            <p>{session.user?.name}</p>
            <button
              className="rounded-lg  
    hover:text-white animate-pulse transition-all duration-300 ease-in-out "
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

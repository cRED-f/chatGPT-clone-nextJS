import ChatCom from "@/components/ChatsComponents/ChatCom";
import ChatInput from "@/components/ChatsComponents/ChatInput";
export default function ChatPage({ params: { id } }) {
  console.log(id);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ChatCom id={id} />

      <ChatInput id={id} />
    </div>
  );
}

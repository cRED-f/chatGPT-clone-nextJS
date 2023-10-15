import admin from "firebase-admin";
import query from "../../../utils/apiQuery";

import { adminDb } from "../../../firebaseAdmin";
export default async function handler(req, res) {
  const { prompt, id, model, session } = req.body;
  console.log(req.body || "No body");
  if (!prompt || !id) {
    return res.status(400).json({ message: "Missing fields" });
  }
  //ChatGPT Question query
  const response = await query(prompt, id, model);

  const message = {
    text: response || "Sorry, I don't understand that yet.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: null,
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(id)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}

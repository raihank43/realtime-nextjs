"use server";
import { db } from "@/db/config";
import { Message } from "../interfaces/message-interface";

export async function sendMessage(message: string) {
  try {
    const collection = db.collection("messages");
    const result = await collection.insertOne({ message });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export const receiveMessage = async () => {
  // Logic to receive messages
  // Retrieve messages from the database
  try {
    const collection = db.collection("messages");
    const result = await collection.find().toArray();

    console.log(result, "server actions");

    return result as Message[];
  } catch (error) {
    console.error(error);
  }
};

// export const getRecentMessages = async (userId: number) => {
//   // Logic to get recent messages
//   // Retrieve recent messages from the database
//   try {
//     const collection = db.collection("messages");
//     const result = await collection.find({ userId }).toArray();

//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

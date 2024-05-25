"use server";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const receiveMessage = async () => {
  const response = await fetch(`${baseURL}/message`);
  const result = await response.json();

  console.log(result, "<<< server actions");

  return result;
};

export const sendMessage = async (message: string) => {
  const response = await fetch(`${baseURL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
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

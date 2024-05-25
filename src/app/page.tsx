"use client";
import { useEffect, useState } from "react";
import { receiveMessage } from "./actions/chat-action";

export default function Home() {
  const [messages, setMessages] = useState([] as string[]);
  const [message, setMessage] = useState("");

  const handleSendMessage = async (formData: FormData) => {
    // Logic to send message
    // Send message to the database
    // await sendMessage("Hello, World!");

    const message = formData.get("message") as string;

    console.log("Message sent");
    setMessages([...messages, message]);
  };
  useEffect(() => {
    async function fetchMessages() {
      const recentMessages = await receiveMessage();
      // setMessages(recentMessages);

      console.log(recentMessages);
    }
    fetchMessages();
  }, []);

  console.log(messages, "<<<<");
  return (
    <main className="h-screen w-screen flex justify-center flex-col">
      <p className="text-4xl font-bold text-center p-6 bg-gray-600 text-white">
        {" "}
        Welcome to Realtime Nextjs
      </p>

      <section className="bg-gray-800 flex-grow">
        <div className="flex p-6 flex-col gap-3">
          {
            // Display messages
            messages.map((message, index) => (
              <div
                key={index}
                className="bg-slate-200 text-black p-5 max-w-60 rounded-lg shadow-lg"
              >
                <p>{message}</p>
              </div>
            ))
          }
          {/* <div className="bg-slate-200 text-black p-5 max-w-60 rounded-lg shadow-lg">
            <p>Test</p>
          </div> */}
        </div>
      </section>

      <section className="bg-gray-800">
        <div className="flex items-center p-6 text-black">
          <form className="flex gap-2 w-full p-2" action={handleSendMessage}>
            <input
              type="text"
              name="message"
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Enter your message"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

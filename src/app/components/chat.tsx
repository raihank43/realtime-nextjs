"use client";

import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";

export default function Chat() {
  const client = new Ably.Realtime({ authUrl: "http://localhost:3000/api" });

  console.log(client, "<<< client");

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo"></ChannelProvider>
    </AblyProvider>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function Page() {

  // sending data
  async function sendData(text: string) {
    const res = await fetch("/api/apiusage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    //   logging response in client
    //   const data = await res.json();
    //   console.log(data);
  }


  // receiving data
  const [message, setMessage] = useState("fetching message...");
  useEffect(() => {
    sendData("Hello world ha ha") //we are not using response of it
      .then(() => fetch("/api/apiusage")) //for client side it automatically append to existing url
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(console.error);
  }, []); 
  // [] ensures this effect runs only once after the component mounts (like componentDidMount).
  // Useful for calling async functions after the initial UI render.
  // Run once after initial render to fetch data asynchronously.

  return <div>message: {message}</div>;
}

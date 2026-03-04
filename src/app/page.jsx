"use client";
import { useState } from "react";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Tanvir",
      role: "Coder",
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Next Js Api Route Demo</h1>
      <button onClick={handleClick} className="bg-green-600">
        Click Me{" "}
      </button>
    </div>
  );
}

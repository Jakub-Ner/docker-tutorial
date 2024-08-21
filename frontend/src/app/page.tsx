'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [response, setData] = useState("Waiting for data...");
     
  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then(({data}) => setData(data))
      .catch((err) => setData("Could not retrieve data"));
  });

  return (
    <div>
      <h1 className="text-center mt-4 font-bold text-4xl ">Home</h1>
      <h2 className="text-center mt-4">{response}</h2>
    </div>
  );
}

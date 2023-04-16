import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import Link from "next/link";

export default function Home() {
  const [data, setData] = React.useState("");
  const [input, setInput] = React.useState("")
  const [clipboardText, setClipboardText] = React.useState("Copy")
  const [loading, setLoading] = useState(false)

  const generateData = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {}
      })
    } catch (err) { }

  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data));
    setClipboardText("Copied 🧾")

    setInterval(() => {
      setClipboardText("Copy")
    }, 2000)
  };
  return (
    <div className="bg-gray-900 text-white w-full h-screen items-center">
      <Head>
        <title>Fictional Data generator</title>
        <meta
          name="description"
          content="A system for generating fictional data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="flex justify-between gap-2 items-center p-4">

          <Link href="/" className="text-blue-400">Home</Link>
          <Link href="/auth" className="text-blue-400">Login</Link>
        </nav>

      </header>
      <main className="flex flex-col font-sans text-center py-6   ">
        <h1 className="text-3xl font-bold"> Data Generator</h1>
        <p className="text-gray-400">
          The revolutionary software used for generating high-quality data for
          any purpose
        </p>

        <div className="flex items-center justify-center  my-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 outline-none focus:text-black"
            placeholder="Type a prompt e.g generate a full user details for signup"
          />
          <button
            onClick={generateData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
        <p className="text-gray-400 font-bold">Generated Data</p>

        <div className="flex flex-col relative m-4 w-2/3 justify-center  self-center">
          <div className="flex flex-col  text-left bg-gray-800 p-4 h-40 w-full overflow-auto rounded-lg scrollbar">
            <div className="text-gray-300">
              {data ? (
                <JSONPretty id="json-pretty" data={data}></JSONPretty>
              ) : (
                "No data generated yet"
              )}
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-blue-400 outline-none hover:bg-blue-600 p-2 text-xs rounded-md"
            >
              {clipboardText}
            </button>
          </div>
        </div>

        <footer>
          <p className="text-gray-400">
            Made with ❤️ by{" "}
            <a>
              <span className="text-blue-400">PRINCESS ORIADE (P2595157)</span>
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

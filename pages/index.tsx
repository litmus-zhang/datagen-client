import Head from "next/head";
import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState("");
  const [input, setInput] = React.useState("")
  const [clipboardText, setClipboardText] = React.useState("Copy")
  const [loading, setLoading] = useState(false)

  const generateData = async () => {
    setLoading(true)
    try {
      if (input.length === 0) {
        alert("You need to input a text")
        setLoading(false)
      } else {
        const response = await axios.post('/api/generate', { input })
        const { outputs } = await response.data
        console.log(input, outputs);
        setData(outputs)
        setLoading(false)
        setInput("")
      }


    } catch (err) {
      setLoading(false)

      console.log("error", err)
      alert("There was an error generating your response")
      // alert(err)
    }

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

        <div className="flex flex-col items-center justify-center gap-2 my-3">

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 outline-none text-white bg-gray-700 rounded-md w-1/2"
            placeholder="Type a prompt e.g generate a full user details for signup"
            rows={5}
          />
          <button
            onClick={generateData}
            disabled={loading}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-auto ${loading ? "animate-pulse" : ""}`}
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

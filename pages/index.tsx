import Head from "next/head";
import React, * as react from "react";
import JSONPretty from "react-json-pretty";
import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState("");
  const [model, setModel] = React.useState("user");
  const [quantity, setQuantity] = React.useState(1);
  const [clipboardText, setClipboardText] = React.useState("Copy");
  const [loading, setLoading] = react.useState(false);

  const generateData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.API_URL)
    try {
      const response = await axios.post("https://datagen-zda7.onrender.com/models", {
        model: model,
        quantity: quantity,
      });
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log("error", err);
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data));
    setClipboardText("Copied 🧾");

    setInterval(() => {
      setClipboardText("Copy");
    }, 2000);
  };
  return (
    <div className="bg-gray-900 text-white w-full min-h-screen items-center">
      <Head>
        <title>Fictional Data generator</title>
        <meta
          name="description"
          content="A system for generating fictional data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col font-sans text-center py-10  ">
        <h1 className="text-3xl font-bold"> Data Generator</h1>
        <p className="text-gray-400">
          The revolutionary software used for generating high-quality data for
          any purpose
        </p>

        <form
          onSubmit={generateData}
          className="flex flex-col w-64 mx-auto border border-gray-600 p-4 rounded gap-2 my-4"
        >
          <div className="flex flex-col items-start gap-1 w-full">
            <label className="text-gray-400" htmlFor="">
              Model
            </label>
            <select
              className="px-2 py-1 rounded text-black outline-none w-full"
              onChange={(e) => setModel(e.target.value)}
              id=""
              name={model}
              defaultValue ="user"
            >
              <option  value="user">User</option>
              <option value="credit_card">Credit Card Details</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label className="text-gray-400" htmlFor="">
              Number of records
            </label>
            <input
              className="px-2 py-1 rounded text-black outline-none w-full"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min={0}
              max={100}
              name="quantity"
            />
            <small>
              <span className="text-gray-400">Max: 100</span>
            </small>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-auto ${
              loading ? "animate-pulse" : ""
            }`}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
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

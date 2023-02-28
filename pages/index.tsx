import Head from "next/head";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white w-full h-screen flex flex-col items-center">
      <Head>
        <title>Fictional Data generator</title>
        <meta
          name="description"
          content="A system for generating fictional data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans text-center py-6 ">
        <h1 className="text-3xl font-bold"> Data Generator</h1>
        <p className="text-gray-400">
          The revolutionary software used for generating high-quality data for
          any purpose
        </p>

        <div className="flex items-center justify-center  my-3">
          <input
            type="text"
            className="p-2 outline-none focus:text-black"
            placeholder="Type a prompt e.g generate a full user details for signup"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate
          </button>
        </div>
        <p className="text-gray-400 font-bold">Generated Data</p>

        <div className="relative m-4">
          <div className="flex flex-col text-left bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-200">
              {"{name: 'John Doe', email: 'joe@gmail.com '}"}
            </p>
            <button className="absolute top-2 right-2 bg-blue-400 outline-none hover:bg-blue-600 p-2 text-xs rounded-md">
              Copy
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

import Link from "next/link";
import React from "react";

interface Props {}

function Auth(props: Props) {
  const {} = props;

  return (
    <div className="">
 <header>
        <nav className="flex justify-between gap-2 items-center p-4">

        <Link href="/" className="text-blue-400">Home</Link>
        <Link href="/auth" className="text-blue-400">Login</Link>
        </nav>

      </header>
      <main className="flex flex-col min-h-screen bg-gray-800">
      <div className="">
        <div className="flex  self-center my-20 justify-center">
          <form className="flex flex-col gap-2 p-10 bg-white shadow-md">
            <h1 className="text-2xl font-bold">Login</h1>
            <InputComponent type="email" placeholder="Email" />
            <InputComponent type="password" placeholder="Password" />
            <Link href={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            </Link>
            
          </form>
        </div>
      </div>
    </main>

    </div>
    
  );
}

function InputComponent(props: any) {
  const { type, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col gap-1 text-left">
      <label htmlFor={placeholder}>{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 border-gray-100 outline-none rounded-md w-fit p-2"
      />
    </div>
  );
}

export default Auth;

import Link from 'next/link'

export default function Custom404() {
  return (
    <div  className='h-screen w-full text-center flex flex-col justify-center'>

        <h1 className='text-2xl font-bold'>Page does not Exist</h1>
        <Link href={"/"}>&larr; Go back home</Link>
    </div>
  )
}

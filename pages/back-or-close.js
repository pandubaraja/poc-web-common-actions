import Head from 'next/head'
import Image from 'next/image'

export default function BackOrClose() {
  return (
    <div>
      <Head>
        <title>Back Or Close</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container p-8 bg-slate-100'>
        <div className="text-3xl font-bold pb-4 items-center">
          Back Or Close
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="shadow-md rounded-md p-2 w-full bg-neutral-50 active:bg-sky-300 text-center">
            Back Or Close
          </div>
          <div className="shadow-md rounded-md p-2 w-full bg-neutral-50 active:bg-sky-300 text-center">
            Goto Dummy Page
          </div>
          <div className="shadow-md rounded-md p-2 w-full bg-neutral-50 active:bg-sky-300 text-center">
            Goto Landing
          </div>
        </div>
      </div>
    </div>
  )
}

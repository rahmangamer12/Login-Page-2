import Image from 'next/image'; // Ensure you import Image from Next.js correctly

export default function Home() {
  return (
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left Side */}
      <div className='text-3xl w-1/2 px-10'>
        <Image src={"/images/facebook.svg"} width={300} height={100} alt="Facebook Logo" />
        <p className='ml-8 -mt-3'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      {/* Right Side */}
      <div className='bg-white flex flex-col p-5 rounded-xl w-1/3'>
        <input className='my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600' type="text" placeholder='Email address or Phone number' />
        <input className='my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600' type="password" placeholder='Password' />
        <button className='bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700'>Log In</button>
        <p className='text-blue-600 text-sm my-2 text-center cursor-pointer hover:underline'>Forgetton Password?</p>
        <span className='my-2'>
          <hr className='text-gray-400 bg-gray-500' />
        </span>
        <button className='bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto'>Create new account</button>
      </div>
    </div>
  );
}


import React from "react";
import login from "../assets/Facebook-logo.png";

import { useSession, signIn } from 'next-auth/react'
import Image from "next/image";

export default function Login () {
  const { data: session } = useSession();

  

  return (
    <div className=" grid place-items-center">
			<Image onClick={signIn} src={login} height={400} width={400} className='w-auto h-auto  object-contain' alt="/"/>
      <h1 onClick={signIn}  className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with facebook</h1>
		</div>
  )
}
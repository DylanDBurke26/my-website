"use client";
import Image from 'next/image'
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      
      <div className='h-1/4 flex-col justify-center'>
        <Image
            className='rounded-full'
            src="/team-photo-noBg.png"
            alt="My Face"
            width={180}
            height={180}
            priority 
          />
          <div className='text-center text-3xl'>Dylan Burke</div>
      </div>
      
    </main>
  )
}

"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {myJSXComp} from "@/components/datalist";




export default function Home(): JSX.Element {

  let [brpoint, setPoint] = useState('Initial Value')
  const exportedJSX = myJSXComp;
  const [rand, setRand] = useState(0)
  const handleClick = () => {
    setRand(rand +1 )
  }
  useEffect(() => {
    if (rand >= 10)
    setTimeout(setPoint,1000,`Ten times threshold is gone `)
    if (rand >= 20)
      setPoint('You did it more than 20 times bro... Dont stop !!!')
  },[rand])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Button onClick={handleClick} >Clicked {rand} times</Button>
      <h1 className="text-2xl">CAT TEXT IS HERE </h1>
      <Image
      src="/cat1.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      {exportedJSX}
      </div>
      <p>{brpoint}</p>
    </main>
  );
}

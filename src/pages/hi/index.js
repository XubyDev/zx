import Router from 'next/router'
import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import { useLoader } from '@/hooks/loader'
const inter = Inter({ subsets: ['latin'] })

export default function Hi({data}) {
  const {isLoading, setIsLoading}=useLoader();

   function handleClick(){
   
    Router.push('/')
  }
  const  saludo="Hola estamos carrgando"
  return (
    <>
      <h1>{isLoading && saludo}</h1>
      <h1>{data}</h1>
      <button onClick={handleClick}>Cambiar de página2</button>
    </>
  )
}

export async function getServerSideProps(){
  const delay = (s) => new Promise(resolve => setTimeout(resolve, s))
  await delay(300)
  return {props:{data}}
}


import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import { useLoader } from '../hooks/loader'
import Router from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {

  const {isLoading, setIsLoading}=useLoader();

   async function handleClick(){
    setIsLoading(true)     
    const res=await fetch (process.env.NEXT_PUBLIC_URL_SAP,{
      method:'POST',
     
      body:JSON.stringify([{plant:3410,employee:document.getElementById("operario").value}])
     })
     const data=await res.json()
     console.log(data)
     if (!(data[0].MESSAGE.indexOf("No employee info found for ID"))){
      setIsLoading(false)
      alert("no encontrado el user")  
      return
     }else{
      Router.push('/hi')
     }

  }
  const  saludo="Hola estamos carrgando"
  return (
    <>
      <h1>{isLoading && saludo}</h1>
      <h1>{data}</h1>
      <label for="operario">N de operario:</label>
      <input type="text" id="operario" name ="operario"/>
      <button onClick={handleClick}>Login</button>
    </>
  )
}

export async function getServerSideProps(){
  const delay = (s) => new Promise(resolve => setTimeout(resolve, s))
  const res=await fetch (process.env.API_URL)
  await delay(300)
  const data =await res.text()
  return {props:{data}}
}


import { useEffect, useState } from 'react'
import Router from 'next/router'


export function useLoader () {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        Router.events.on("routeChangeStart", (url)=>{
          console.log("estado1")
          setIsLoading(true)
        });
    
        Router.events.on("routeChangeComplete", (url)=>{
          setIsLoading(false)
        });
    
        Router.events.on("routeChangeError", (url) =>{
          setIsLoading(false)
        });
        
      }, [Router])
      return {isLoading,setIsLoading}
}

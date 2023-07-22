"use client";

import ProductCard from "@/components/productcard/ProductCard";
import { useQuery } from "react-query";

export default function Home() {

  const fetchApi = async (api) => {
    const res = await fetch(api);
    
    return res.json();
}

  const {data,isLoading,error} = useQuery(['products'],() => fetchApi('https://fakestoreapi.com/products'));


 
    
if(isLoading) {
  return  <div className='flex items-center h-screen w-screen justify-center px-4 py-10 bg-pageBg'>
  <h1>Loading...</h1>
  </div>
}
// flex flex-row flex-wrap justify-center px-4 py-10 bg-pageBg
if(data) {
return (
  <div className="flex flex-col items-center gap-2 min-h-screen px-4 py-10 bg-pageBg
  z-10">

  <div className="flex flex-col">
    <h3 className="font-bold text-lg text-center">Electronics</h3>
   <div className='flex flex-row flex-wrap justify-center'>
    {data.map(product => {
    if(product.category==="electronics") {
      return <ProductCard img={product.image} title={product.title} price={product.price} id={product.id} />
    }})
  }
      </div>
  </div>

  <div className="flex flex-col">
    <h3 className="font-bold text-lg text-center">Women's Clothing</h3>
   <div className='flex flex-row flex-wrap justify-center'>
    {data.map(product => {
    if(product.category==="women's clothing") {
      return <ProductCard img={product.image} title={product.title} price={product.price} id={product.id} />
    }})
  }
      </div>
  </div>

  <div className="flex flex-col">
    <h3 className="font-bold text-lg text-center">Jewelery</h3>
   <div className='flex flex-row flex-wrap justify-center'>
    {data.map(product => {
    if(product.category==="jewelery") {
      return <ProductCard img={product.image} title={product.title} price={product.price} id={product.id} />
    }})
  }
      </div>
  </div>

  <div className="flex flex-col">
    <h3 className="font-bold text-lg text-center">Men's Clothing</h3>
   <div className='flex flex-row flex-wrap justify-center'>
    {data.map(product => {
    if(product.category==="men's clothing") {
      return <ProductCard img={product.image} title={product.title} price={product.price} id={product.id} />
    }})
  }
      </div>
  </div>

  

      </div>
)
}


if(error) {
  return (
    <div className='flex items-center h-screen w-screen justify-center px-4 py-10 bg-pageBg'>
    <h1>Something went wrong</h1>
    </div>
  )
}

}

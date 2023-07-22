"use client";

import Image from 'next/image'
import { useQuery } from 'react-query'

const ProductDetails = ({params}) => {


  const fetchApi = async (url) => {
    const res = await fetch(url);
    return res.json();
  }

  const {data,isLoading,error} = useQuery('single',() => fetchApi(`https://fakestoreapi.com/products/${params.id}`));


  if(isLoading) {
    return <div className='flex items-center h-screen w-screen justify-center px-4 py-10 bg-pageBg'>
      <h1>Loading...</h1>
    </div>
  }

  if(data) {
    return (
      <div className='flex items-center justify-center bg-pageBg
       min-h-screen min-w-screen md:h-screen md:w-screen'>
        <div className='min-h-96 w-11/12 md:w-detailsBox flex justify-evenly p-3 my-3
        md:flex-row flex-col bg-white hover:shadow-lg'>
  
        <div className='flex items-center justify-center flex-1'>
          <Image src={data.image}
          alt="product"
          height={300}
          width={250}
          />
        </div>
  
        <div className='flex items-start justify-center text-left flex-col flex-1 space-y-3'>
  
        <h1 className='font-bold text-lg'>{data.title}</h1>
  
        <div className='flex flex-row w-3/4 justify-between'>
          <p className='text-cardPrice'>${data.price}</p>
          <p>|</p>
          <p className='text-teal-600 capitalize'>{data.category}</p>
        </div>
  
          <div className='flex flex-col'>
            <h3 className='font-bold'>About this product</h3>
            <p className='capitalize'>{data.description}</p>
          </div>
  
          <button className='text-white bg-cartBox p-3 hover:opacity-80'>Add to Cart</button>
  
  
        </div>
  
        </div>
      </div>
    )
  }
 

  if(error) {
      return <div className='flex items-center h-screen w-screen justify-center px-4 py-10 bg-pageBg'>
        <h1>Sorry something went wrong!</h1>
      </div>
  }


}

export default ProductDetails
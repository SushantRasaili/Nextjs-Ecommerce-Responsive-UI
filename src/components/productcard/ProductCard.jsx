import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({img,title,price,id}) => {
  return (
    <Link href={`/productDetails/${id}`} className=''>
    <div className='bg-white flex justify-between flex-col cursor-pointer 
    hover:shadow-md mx-2 my-3 h-custom w-custom max-[521px]:w-40 max-[410px]:w-72 max-[300px]:w-60'>
      <Image 
      className='object-contain h-3/4 w-full'
      src={img}
      alt="Shoes"
      height={200}
      width={200}/>
      <div className='flex flex-col pt-2 pb-7'>
      <h3 className='text-cardText pl-3 overflow-wrap-break-word leading-tight' >{title.slice(0,35)}...</h3>
      <p className='text-cardPrice pl-3'>${price}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
"use client";

import SearchBox from '@/components/searchbox/SearchBox'
import { useQuery } from 'react-query';
import { useState } from 'react';
import ProductCard from '@/components/productcard/ProductCard';

const Search = () => {

  const [query,setQuery] = useState('');

  const fetchApi =async(url) => {
    const res = await fetch(url);
    return res.json();
  }

  const {isLoading,data,error,refetch} = useQuery('search',() => fetchApi('https://fakestoreapi.com/products'),{
    enabled: false
  })

  const handleSubmit = (query) => {
      setQuery(query);
      refetch();
      console.log(query);
  }

  return (
    <div className='flex flex-col min-h-screen w-screen bg-pageBg'>
      <div className='flex justify-center'>
       <SearchBox onSubmit={handleSubmit} />
      </div>

       <div className='flex flex-row flex-wrap justify-center px-4 py-10'>
       {data ? data.map(product => {
        if(product.title.toLowerCase().includes(query.toLowerCase()))
        return <ProductCard img={product.image} title={product.title} price={product.price} id={product.id} />
       }
    ) :
          <div className=''>
        <h3 className='text-searchPageText'>Please search something I needed to be covered</h3>
            </div>
       }
       </div>


            </div>
  )
}

export default Search
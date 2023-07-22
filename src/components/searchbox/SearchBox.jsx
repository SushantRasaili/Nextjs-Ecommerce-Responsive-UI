import { useState } from 'react'

const SearchBox = ({onSubmit}) => {

  const [query,setQuery] = useState('');

  const handleChange =(e) => {
    setQuery(e.target.value);
  }
  
  const handleClick =(e) => {
    e.preventDefault();
    onSubmit(query);
  
  }


  return (
    <form className='flex flex-row justify-center w-1/2 max-[521px]:w-full my-4' onSubmit={handleClick}>

      <input type="text" 
      placeholder="Search here..."
      className='h-10 px-5 py-2 w-3/4 focus:outline-none' 
      onChange={handleChange}
      value={query}/>

      <button className='flex justify-center items-center bg-searchButton
       text-white w-20 h-10 cursor-pointer hover:bg-teal-600 transition-all duration-300 ease-in '
       onClick={handleClick}>
    
      Search
      </button>

    </form>
  )
}

export default SearchBox
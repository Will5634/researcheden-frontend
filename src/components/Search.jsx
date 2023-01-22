

import React, { useState,useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import download from 'downloadjs';
import axios from 'axios';
//import { API_URL } from '.env';
import { Link } from "react-router-dom";

import { FiSearch } from 'react-icons/fi';
import { URL } from '../App';

const Search = () => {
  //const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const [searchList, setSearchList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  


  const handleSubmit = (e) => {
    e.preventDefault();

    //navigate(`/search/${searchTerm}`);

  };    
  useEffect(() => {
    const getSearchList = async () => {
      try {
        setSearchTerm(prev=>prev.toLowerCase());
        const { data } = await axios.get(`https://research-eden-api.onrender.com/search/${searchTerm}`);
        //const { data } = await axios.get(`${URL}/search/${searchTerm}`);
        setErrorMsg('');
        setSearchList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getSearchList();
  }, [searchTerm]);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`https://research-eden-api.onrender.com/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };
  
  

  return (
    < div className= 'mb-auto'>
    <h1 className='text-center  mt-5'>Please input the project title or department to search</h1>
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-black focus-within:text-black">
      <label htmlFor="search-field" className="sr-only">
        Search all Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-2 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-white w-25 border rounded-lg  placeholder-black-900 outline-none text-base text-black text-lg p-4"
          placeholder="Search....."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {searchList.length > 0 ? (
           searchList.map(
            ({ _id, title, description, department, file_path, file_mimetype }) => (
              <div className="flex justify-center    rounded-lg cursor-pointer max-w-sm p-1 " key={_id}  
           >
            <div className=" singlefile relative w-full h-30  mb-1  mt-1 " >
            <p className="file-title text-lg">{title}</p>
            <p className="file-description text-sm">Department:{department}</p>
            <div className='flex justify-center mr-auto ml-auto'>
              <Link to={`/filedisplay/${_id}`}>
                    <button btn-id={_id} className="px-6 py-3 rounded-3xl text-white">More details</button> 
                </Link>
              </div>
                </div>
                </div>
            )
            )
          ) : (
            <div className='w-full h-80 flex justify-center items-center flex-col'>
                No files found.
                </div>
          )}
        </div>

    </div>
    
  );
};


export default Search